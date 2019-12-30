<template>
  <div class="wjCenterContainer">
    <div class="wjHeader">
      <img src="https://img.meituan.net/avatar/cca0b818c56e53f6549f2848c116009e12700.jpg">
    </div>
    <div class="wjContent">
      <div class="wjOrder">
        <div class="wjTitle">我的订单</div>
        <div class="wjOutline"></div>
        <div class="wjOrderMovie" @click="$router.push('/Order')">
          <p>电影</p>
        </div>
        <div class="wjOrderShop" @click="$router.push('/Store')">
          <p>商城</p>
        </div>
      </div>
      <div class="wjCardCoupon">
        <div class="wjDiscountCoupon" @click="$router.push('/Cou')">优惠券
          <i class="iconfont icon-arrow-right-ico"></i>
        </div>
        <div class="wjDiscountCard">折扣卡
          <i class="iconfont icon-arrow-right-ico"></i>
        </div>
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
      width 100%
      height 407px
      .wjOrder
        position relative
        width 100%
        height 149px
        margin-top 10px
        padding 0 15px
        background-color white
        text-align center
        box-sizing border-box
        .wjTitle
          position absolute
          width 80px
          height 21px
          padding-top 13px
          top 0
          bottom 0
          left 0
          right 0
          margin 0 auto 
          font-size 15px
          text-align center
          line-height 21px
          background-color white
          z-index 9
        .wjOutline
          position absolute
          width 160px
          height 1px
          background-color #EBEBEB
          text-align center
          top 23px
          left 50%
          margin-left -80px
        .wjOrderMovie
        .wjOrderShop
          width 50%
          height 90px
          background-repeat no-repeat
          background-size 42px
          background-position-x 50%
          background-position-y 80%
          margin 20px auto 0
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
        .wjDiscountCard
          width 100%
          height 50%
          padding-right 15px
          margin-left 15px
          box-sizing border-box
          font-size 15px
          line-height 44px
          .icon-arrow-right-ico
            color #e1e1e1
            font-size 13px
            float right
            margin-right 10px
        .wjDiscountCoupon
          bottom-border-1px(rgb(204,204,204))   
</style>
