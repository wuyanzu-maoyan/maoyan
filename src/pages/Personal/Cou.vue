<template>
  <div class="wjCou">
    <div class="wjCoupon">
      <input class="wjTextbox" type="text" placeholder="请输入优惠券密码">
      <a href="#">添加</a>
    </div>
    <div class="wjCouList">
      <div class=wjCouItem v-for="(coupon,index) in couponList" :key="index">
        <div class="wjCouItemLeft">
          <div class="wjLeftWrapper">
            <div class="wjAmount">{{coupon.value}}<span>元</span>
            </div>
            <div class="wjVoucher">代金券</div>
          </div>
        </div> 
        <div class="wjCouItemRight">
          <div class="wjTitle">{{coupon.title}}</div>
          <div class="wjDescribe">{{coupon.limitDesc}}</div>
          <div class="wjLife">{{coupon.rangeTime}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from "better-scroll";
  import {reqDiscount} from '@/api';
  export default {
    async mounted() {
    const result = await reqDiscount();
    console.log(result);
    if(result.code===0){
      this.couponList = result.data.couponlist;
      }
    },
    data() {
      return {
        couponList:[]
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .wjCou
    width 100%
    height calc(100vh - 50px)
    background-color #F3F3F3
    .wjCoupon
      width 100%
      height 40px
      padding 15px 15px 0 20px
      .wjTextbox
        width 250px
        height 20px
        border-radius 5px
        border 1px solid rgb(204,204,204)
        padding 5px 0px 5px 5px
        font-size 15px
        outline none 
      a
        width 28px
        height 20px
        font-size 15px
        color #f03d37
        margin-left 20px
    .wjCouList
      width 100%
      
      .wjCouItem
        background-color white
        width 345px
        height 145px
        margin 15px 15px 0 15px
        border 1px solid rgb(216,216,216)
        border-radius 10px
        display flex
        justify-content stretch
        overflow hidden
        background-image url('../../static/images/wjOut.png')
        background-repeat no-repeat
        background-size 65px
        background-position top 7px right 7px
        .wjCouItemLeft
          width 23%
          height 100%
          background-color #C3C3C3
          text-align center
          .wjLeftWrapper
            width 100%
            height 70px
            margin-top 35px
            .wjAmount
              font-size 28px
              color white
              line-height 35px
              span
                font-size 16px
            .wjVoucher
              font-size 14px
              padding 6px 12px 0 12px
              border-top 1px solid #B4B4B4
              color white
        .wjCouItemRight
          width 77%
          height 100%
          border-left 1px dashed rgb(195,195,195) 
          
          .wjTitle
            width 100%
            height 24px
            margin-top 10px
            padding 0 16px
            font-size 16px
            line-height 24px
          .wjDescribe
            height 40px
            margin 6px 0 43px 0
            padding 0 16px
            font-size 13px
            line-height 14px
            color rgb(153,153,153)
          .wjLife
            width 97%
            height 22px
            padding 0 4px
            line-height 22px
            text-align right
            color rgb(119,119,119)
            top-border-1px(#E1E1E1)
          





        
</style>
