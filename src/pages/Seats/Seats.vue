<template>
  <div class='seatsContainer' >
    <!-- 头部 -->
    <div class="seatsHeader" v-if="seat.movie">
      <div class='titleWrapper'>
        <h1 class='title'>{{seat.movie.movieName}}</h1>
        <div class='timeDetail'>
          <span>{{seat.show.showDate}} </span>
          <span>{{seat.show.showTime}}</span>
          <span>{{seat.show.lang+seat.show.dim}}</span>
        </div>
      </div>
      <div class='reminder'> 
        <div v-for="(item,index) in seat.reminder.notice" :key="index">
          <img :src="item.imgUrl" alt="">
          <span>{{item.detail}}</span>
          
        </div>
      </div>
    </div>

    <!-- 座位分布图 -->
    <div class="seatsContent" v-if="seat.hall">
      <div class='hallName'>{{seat.hall.hallName}}</div>

      <div class='seatsDetail'>
        <div class='seatsRows'>
          <div class='rowItem' v-for="(item,index) in seat.seat.regions[0].rows" :key="index">{{item.rowId}}</div>
        </div>


        <div class="seats">
          <div class='seatsBlock'>
            <div class="colum" v-for="(row,index) in seat.seat.regions[0].rows" :key="index" >
              <div class="rowWraper" v-for="(colum,indexColum) in row.seats" :key="indexColum" >
                <div 
                  
                  class='row' :class="[colum.seatType,seatType[colum.seatStatus]]" 
                  
                  @click="selectSeat(index,indexColum,colum.rowId,colum.columnId,colum.seatType)"
                >

                </div>
                
              </div>
            </div>
            
          </div>

          
          <div class="line"></div> 
          <div class='bg'>
            <img src="../../static/images/seats/bg.png" alt="">
          </div>
        </div>
        
        
        
      </div>
      
      
    </div>

    <!-- footer -->
    <div class="seatsFooter" v-if="seat.price">
      <div class="seatsTypes">
        <img src="../../static/images/seats/seat.png" alt="">
        <span>可选</span>
        <img src="../../static/images/seats/redseat.png" alt="">
        <span>不可选</span>
        <img src="../../static/images/seats/greenseat.png" alt="">
        <span>已选</span>
      </div>
      
      <div class='selectSeatButton'>
        <div class="selectedSeats" v-if="selectedNum>0">
          <div>已选座位</div>
          <ul>
            <li v-for="(item,index) in priceList" :key="index">
              <!-- {{`${item.seatNum.row}排${item.seatNum.colum}座`}} -->
              <div class='seatNum'>{{`${item.seatNum.rowId}排${item.seatNum.columId}座`}}</div>
              <div class='price' >{{`￥${item.originPrice}`}}</div>
            </li>
          </ul>
        </div>
        
        <button :class='{active:selectedNum>0}' :disabled='selectedNum===0' @click="submitOrder">{{selectedNum>0?`￥${totalPrice}确认选座`:'请先选座'}}</button>
      </div>
      
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {reqSeats} from '../../api/index';
  import { Toast,MessageBox } from 'mint-ui';
  import {mapState} from 'vuex';
  export default {
    data() {
      return {
        seat:{},
        seatType:['empty','optional','optioned','noOption'],//没有座位，可以选的座位（白），自己选的（绿），不能选的（红）
        selectedNum:0,
        totalPrice:0,
        seatsNum:[],
        
      }
    },
    async mounted() {
      let hall = this.$route.params.id.substring(0,1);
      console.log(hall);
      const result = await reqSeats({hall});
      console.log(result);
      if(result.code===0){
        this.seat = result.data.seatData
      }
      if(this.seatsOrder[hall]){
        console.log(this.seatsOrder[hall]) ;
        this.seatsOrder[hall].forEach((item,index) => {
          this.seat.seat.regions[0].rows[item.row].seats[item.colum].seatStatus = 2;
          this.selectedNum++
          this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * this.selectedNum;
          this.addSeat(item.row,item.colum,item.rowId,item.columId,item.seatType);
             
        })
      }
      
    },
    computed: {
      ...mapState({
        token:state => state.user.token,
        seatsOrder:state => {
          //console.log(this.$route.params.id.substring(0,1));
          return state.order.seatsNumList || {}
        }

      }),
      priceList(){
        let arr = Object.values(this.seat.price['0000000000000001'].seatsPriceDetail);
        arr.forEach((item,index) => {
          item.seatNum = this.seatsNum[index];
        })
        return arr.slice(0,this.selectedNum) ;
        
      },
     
    },
    methods: {
      submitOrder(){
        //提交订单时将
        console.log('111');
        let hall = this.$route.params.id.substring(0,1)
        
        this.$store.commit('save_seatsnum',{hall,seatsNum:this.seatsNum});
        Toast('加入订单成功');
      },
      selectSeat(row,colum,rowId,columId,seatType){
        rowId = Number(rowId);
        columId = Number(columId);
        row = Number(row);
        colum = Number(colum);
        const seatStatus = this.seat.seat.regions[0].rows[row].seats[colum].seatStatus;
        let num = this.selectedNum;
        if(seatStatus === 1){
          if(seatType==='L'){
            num = num+2;
          }else if(seatType==='R'){
            num = num+2;
          }else{
            num++;
          }
          if(num>4){
            Toast('每次最多可选4个座位')
            return
          }
          if(seatType==='L'){
            
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 2;
            this.seat.seat.regions[0].rows[row].seats[colum+1].seatStatus = 2;
            this.addSeat(row,colum,rowId,columId,seatType);
            this.addSeat(row,colum+1,rowId,columId+1,'R');
          

            

            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * num;
          }else if(seatType==='R'){
            
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 2;
            this.seat.seat.regions[0].rows[row].seats[colum-1].seatStatus = 2;
            this.addSeat(row,colum-1,rowId,columId-1,'L');
            this.addSeat(row,colum,rowId,columId,seatType);
            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * num;
          }else{
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 2;
            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * num;
            this.addSeat(row,colum,rowId,columId,seatType);
          }
          this.selectedNum = num;
          
        }else if(seatStatus === 2){
          //取消选座
          if(seatType==='L'){
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 1;
            this.seat.seat.regions[0].rows[row].seats[colum+1].seatStatus = 1;
            this.selectedNum = this.selectedNum-2;
            this.deleteSeat(rowId,columId,rowId,columId);
            this.deleteSeat(rowId,columId-1,rowId,columId);
            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * this.selectedNum;
          }else if(seatType==='R'){
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 1;
            this.seat.seat.regions[0].rows[row].seats[colum-1].seatStatus = 1;
            this.selectedNum = this.selectedNum-2;
            this.deleteSeat(row,colum,rowId,columId,seatType);
            this.deleteSeat(row,colum+1,rowId,columId,seatType);
            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * this.selectedNum;
          }else{
            this.seat.seat.regions[0].rows[row].seats[colum].seatStatus = 1;
            this.selectedNum--;
            this.deleteSeat(row,colum,rowId,columId,seatType);
            this.totalPrice = this.seat.price['0000000000000001'].seatsPriceDetail[1].originPrice * this.selectedNum;
          }
          
        }
        
        
      },
      addSeat(row,colum,rowId,columId,seatType){
        
        this.seatsNum.push({row,colum,rowId,columId,seatType});
      },
      deleteSeat(row,colum,rowId,columId,seatType){
        
        
        let seatId = this.seatsNum.findIndex(item => {
          return item.row === row && item.colum === colum ;
        })
        
        
        this.seatsNum.splice(seatId,1);
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .seatsHeader
    height 100px
    width 100vw
    background-color #fff
    .titleWrapper
      width 100%
      padding 15px
      box-sizing border-box
      .title
        height 24px
        line-height 24px
        font-size 16px
        font-weight 700
        color #333
      .timeDetail
        font-size 13px
        padding-top 2px
        line-height 1
        color #777
    .reminder
      margin 0 15px
      padding-top 5px
      font-size 12px
      color #666
      border-top 1px solid #e7e7e7
      div
        img 
          width 17px
          height 17px
          vertical-align middle
        span 
          vertical-align middle
          font-size 12px
  .seatsContent
    width 100vw
    height 410px
    background-color #f2f1f6
    position relative
    .hallName
      width 200px
      margin 0 auto 
      height 18px
      background-color #e3e3e3
      border-radius: 0 0 30px 30px
      text-align center
      color #777
      font-size 14px
      line-height 18px
      font-family: PingFangSC-Regular,Hiragino Sans GB,sans-serif;
    .seatsDetail
      overflow:hidden
      height 100%
      .seatsRows
        position absolute
        top 85px
        left 0
        width 6px
        z-index 2
        background-color: rgba(0,0,0,.05)
        .rowItem
          font-size 1px
          color rgb(119, 119, 119);
          width 100%
          text-align center
          height 20px
          line-height 20px
          transform:  scale(0.8, 0.8) rotate3d(0, 0, 0, 0deg);  
      
      .seats
        position absolute
        left 50%
        top 85px
        transform translateX(-50%)
        .bg
          position absolute
          width 100%
          height 10px
          text-align center
          img 
            width 46px
            height 8px
        .seatsBlock
          position relative
          z-index 2
          width 324px
          .colum
            width 324px
            overflow hidden
            .rowWraper  
              float left         
              width 18px
              height 20px
              overflow hidden
              .row
                padding 3px 1px
                width 16px
                height 14px
                background-image url(../../static/images/seats/seat.png)
                background-repeat no-repeat
                background-size 16px 14px
                &.empty
                  background-image none 
                &.optional
                  background-image url(../../static/images/seats/seat.png)
                &.optioned
                  background-image url(../../static/images/seats/greenseat.png)
                &.noOption
                  background-image url(../../static/images/seats/redseat.png)
                
                &.R
                  padding 3px 1px 3px 0
                  background-image url(../../static/images/seats/doubleseat.png)
                  background-position -18px 0
                  background-size 34px 14px
                  &.empty
                    background-image none 
                  &.optional
                    background-image url(../../static/images/seats/doubleseat.png)
                  &.optioned
                    background-image url(../../static/images/seats/doublegreenseat.png)
                  &.noOption
                    padding 3px 1px
                    width 16px
                    height 14px
                    background-repeat no-repeat
                    background-size 16px 14px
                    background-position 0px 0
                    background-image url(../../static/images/seats/redseat.png)
                  
                &.L
                  padding 3px 0px 3px 1px
                  background-image url(../../static/images/seats/doubleseat.png)
                  background-position 0 0
                  background-size 34px 14px
                  &.empty
                    background-image none 
                  &.optional
                    background-image url(../../static/images/seats/doubleseat.png)
                  &.optioned
                    background-image url(../../static/images/seats/doublegreenseat.png)
                  &.noOption
                    padding 3px 1px
                    width 16px
                    height 14px
                    background-repeat no-repeat
                    background-size 16px 14px
                    background-image url(../../static/images/seats/redseat.png)
        
        .line
          position absolute
          width 0px
          border-left 1px dashed #c3c3c3
          height 100%
          top 50%
          left 50%
          transform translate(0 ,-50%)
          z-index 1
  .seatsFooter
    width 100%
    background-color #fff
    .seatsTypes
      width 100%
      height 35px
      background-color rgba(240, 240, 240,.8);
      border-top 1px solid #fff
      line-height 35px
      text-align center
      img
        width 17px
        height 15px
        vertical-align middle
        margin 0 3px
      span 
        vertical-align middle
        margin 0 3px
        color #777
        font-size 12px
    .recommendSeat
      display flex
      width 100%
      height 32px
      line-height 32px
      font-size 14px
      color #777
      padding 9px 
      span 
        color rgb(51, 51, 51)
      div
        width 48px
        height 30px
        border 1px solid rgb(215, 215, 215);
        line-height 30px
        text-align center
        margin-left 8px
        vertical-align middle
    .selectSeatButton
      position relative
      width 100%
      height 65px
      padding 10px
      box-sizing border-box
      margin-top 5px
      button
        width 100%
        height 45px
        border none 
        outline none 
        background-color rgb(255, 221, 178);
        border-radius 4px
        font-size 18px 
        font-weight bold
        color white
        &.active
          background-color #f90
      .selectedSeats
        width 100%
        height 72px
        background-color #fff
        position absolute
        top -72px
        left 0
        z-index 9
        padding 0 10px
        box-sizing border-box
        &>div 
          position: relative;
          margin: 0;
          padding-top: 5px;
          height: 20px;
          color: #333;
          font-size: 11px;
        ul
          display flex
          li
            background-image: url(../../static/images/seats/border.png);
            margin: 5px 2px;
            width: 82.5px;
            height: 37px;
            background-size: 82.5px 37px;
            text-align: center;
            .seatNum
              font-size: 12px;
              color: #333;
              height 19px
              line-height 19px
            .price
              font-size: 11px;
              color: #fa5939;
              height 18px
              line-height 18px
              
</style>
