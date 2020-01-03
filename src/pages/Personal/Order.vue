<template>
  <!-- 订单列表 -->
  <div class="wjOrderList">
    <!-- 订单项 -->
    <div class="wjOrderItem" v-for="(order,index) in orderlist" :key="index">
      <!-- 订单头部 -->
      <div class="wjOrderTitle">
        <a class="wjCinemaName" href="#">{{order.cinema.name}}<i class="iconfont icon-arrow-right-ico"></i></a>
        <div>支付剩余时间：15:00</div>
      </div>
      <!-- 订单详情 -->
      <a href="#" class="wjOrderDetail">
        <div class="wjOrderInfo">
          <!-- 电影海报 -->
          <img :src= order.movie.img>
          <!-- 电影相关信息 -->
          <div class="wjOrderMessage">
            <div class=wjMessageName>
              <div>{{order.movie.name}}<span>{{order.seats.count}}张</span></div>
            </div>
            <div class=wjMessageDate>
              <div>{{order.show.showTime}}</div>
            </div>
            <div class=wjMessageSeat>
              <span>{{order.seats.hallName}} </span>
              <span v-for="(seat,index) in order.seats.list" :key="index">{{seat.rowId}}排{{seat.columnId}}座 </span>
            </div>
          </div>
          <!-- 订单状态按钮 -->
          <div class="wjOrderStatus">
            <div>{{order.infoStatus}}</div>
          </div>
        </div>
      </a>
      <!-- 订单状态信息 -->
      <div class="wjOrderMore">
        <div class="wjPrive">总价：<span>{{order.order.sellMoney}}</span></div>
        <div class="wjStatus">{{order.otherStatus}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqmyOrder} from '@/api';
  export default {
    async mounted() {
      const result = await reqmyOrder();
      console.log(result);
        if(result.code===0){
          this.orderlist = result.data.orderlist;
        }
      },
      data() {
        return {
          orderlist:[]
        }
      },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .wjOrderList
    width 100%
    height 100%
    .wjOrderItem
      width 100%
      height 184px
      margin-bottom 10px
      .wjOrderTitle
        width 100%
        height 38px
        padding 0 15px
        line-height 38px
        font-size 13px
        bottom-border-1px(rgb(204,204,204))
        .wjCinemaName
          float left
          color #666
          .icon-arrow-right-ico
            font-size 10px
            color #777
            padding-left 4px
            margin-right 6px
        div
          color rgb(239,66,56)
      .wjOrderDetail
        width 100%
        height 80px
        .wjOrderInfo
          margin 12px
          display flex
          img
            width 57px
            height 80px
          .wjOrderMessage
            margin-top 4px
            margin-left 12px
            width 216px
            height 76px
            .wjMessageName
              height 21px
              font-size 15px
              line-height 21px
              color #000
              span
                margin-left 10px
            .wjMessageDate
              height 18px
              margin-top 5px
              line-height 18px
            .wjMessageSeat
              height 18px
              line-height 18px
          .wjOrderStatus
            width 48px
            height 80px
            margin-left 12px
            display flex
            font-size 12px
            flex-direction column
            justify-content center
            div
              width 46px
              height 30px
              background-color #f03d37
              padding 0 10px
              box-sizing border-box
              border 1px solid #f03d37
              border-radius 6px
              color #fff
              line-height 30px
      .wjOrderMore
        width 100%
        height 42px
        margin-left 15px
        padding-right 15px
        line-height 42px
        font-size 13px
        top-border-1px(#EBEBEB)
        .wjPrive
          float left
          color rgb(136,136,136)
        .wjStatus
          float right
          margin-right 30px 
              



        
</style>
