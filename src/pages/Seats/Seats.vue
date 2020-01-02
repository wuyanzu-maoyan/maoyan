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
          <div class='rowItem' v-for="(item,index) in seat.seat.regions[0].rows" :key="index">{{index}}</div>
        </div>
        <div class="seats">
          <div class="colum" v-for="(row,index) in seat.seat.regions[0].rows" :key="index" >
            <div class="row" v-for="(colum,indexColum) in row.seats" :key="indexColum">
              <img src="../../static/images/seats/seat.png" alt="" v-show="row.rowId&&colum.seatType">
            </div>
          </div>


          
          <div class='bg'>
            <img src="../../static/images/seats/bg.png" alt="">
          </div>
          
          
        </div>
        
      </div>
      
      
    </div>

    <!-- footer -->
    <div class="seatsFooter">
      <div class="seatsTypes">
        <img src="../../static/images/seats/seat.png" alt="">
        <span>可选</span>
        <img src="../../static/images/seats/redseat.png" alt="">
        <span>不可选</span>
        <img src="../../static/images/seats/greenseat.png" alt="">
        <span>已选</span>
      </div>
      <!-- <div class="recommendSeat">
        <span>推荐座位</span>
        <div>1人</div>
        <div>2人</div>
        <div>3人</div>
        <div>4人</div>
      </div> -->
      <div class='selectSeat'>
        <button >请先选座</button>
      </div>
      
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {reqSeats} from '../../api/index';
  export default {
    data() {
      return {
        seat:{}
      }
    },
    async mounted() {
      const result = await reqSeats({hall:'2号厅'});
      console.log(result);
      if(result.code===0){
        this.seat = result.data.seatData
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
      position absolute
      top 50%
      transform translateY(-50%)
      display flex
      .seatsRows
        width 2vw
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
        width 90vw
        padding 0 4vw
        .colum
          display flex
          .row
            width 16px
            height 14px
            padding 3px 2px
            // background-image url(../../static/images/seats/seat.png)
            // background-size 16px 14px
            // background-repeat no-repeat
            img 
              width 16px
              height 14px
        .bg
          width 100%
          height 10px
          text-align center
          img 
            width 46px
            height 8px
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
    .selectSeat
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
</style>
