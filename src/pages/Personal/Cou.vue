<template>
  <div>
    <div class="wjCoupon">
      <input class="wjTextbox" type="text" placeholder="请输入优惠券密码">
      <a href="#">添加</a>
    </div>
    <div class="wjCouList">
      <div class=wjCouItem>
        <div class="wjCouItemLeft">
          <div class="wjLeftWrapper">
            <div class="wjAmount">10<span>元</span>
            </div>
            <div class="wjVoucher">代金券</div>
          </div>
        </div> 
        <div class="wjCouItemRight">
          <div class="wjtitle">【电影】-新客专享券</div>
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
      margin-left 17px
  .wjCouList
    width 100%
    .wjCouItem
      width 345px
      height 145px
      margin 15px 15px 0 15px
      border 1px solid rgb(216,216,216)
      border-radius 10px
      display flex
      justify-content stretch
      overflow hidden
      .wjCouItemLeft
        width 23%
        height 100%
        background-color #C3C3C3
        text-align center
        .wjLeftWrapper
          width 100%
          height 70px
          margin-top 35px
          // background-color red
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


        
</style>
