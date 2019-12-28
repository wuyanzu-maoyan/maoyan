<template>
  <div class="wjCenterContainer">
    <div class="wjHeader">
      <img src="https://img.meituan.net/avatar/cca0b818c56e53f6549f2848c116009e12700.jpg">
    </div>
    <div class="wjContent">
      <div class="wjOrder">
        <div class="wjTitle">我的订单</div>
        <div class="wjOutline"></div>
        <div class="wjOrderMovie">
          <p>电影</p>
        </div>
        <div class="wjOrderShop">
          <p>商城</p>
        </div>
        </div>
      </div>
      <div class="wjCardCoupon">
        <div class="wjDiscountCoupon">优惠券</div>
        <div class="wjDiscountCard">折扣卡</div>

      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .wjCenterContainer
    width 100%
    background-color #F3F3F3
    .wjHeader
      width 100%
      height 150px
      background-image url('../../static/images/wjBeijing.png')
      text-align center
      img
        margin-top 30px
        border 3px solid white
        width 60px
        height 60px
        border-radius 60px
        display inline-block
    .wjContent
      .wjOrder
        width 100%
        height 149px
        margin-top 10px
        padding 0 15px
        background-color white
        text-align center
        box-sizing border-box
        .wjTitle
          width 80px
          height 21px
          margin 13px auto 0
          font-size 15px
          text-align center
          line-height 21px
          display inline-block
          background-color white
        .wjOutline
          width 160px
          height 1px
          background-image url('../../static/images/wjOutline.png')
          text-align center
          margin -10px auto 0
        .wjOrderMovie
        .wjOrderShop
          width 50%
          height 90px
          background-repeat no-repeat
          background-size 42px
          background-position-x 50%
          background-position-y 80%
          margin 0 auto
          p
            margin-top 55%
            font-size 15px
        .wjOrderMovie
          float left
          background-image url('../../static/images/wjMovie.png')
        .wjOrderShop
          float right 
          background-image url('../../static/images/wjShop.png')
    .wjCardCoupon
      width 100%
      height 88px
      margin-top 10px
      background-color white
      .wjDiscountCoupon
        width 100%
        height 50%
        padding 0 15px
        box-sizing border-box
        bottom-border-1px(rgb(204,204,204))
      .wjDiscountCard
        width 100%
        height 50%
        padding 0 15px
        box-sizing border-box
          
      

        
</style>
