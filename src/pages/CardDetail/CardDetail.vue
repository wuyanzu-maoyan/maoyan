<template>
  <div class="kjcCardDetailContainer">
    <div class="kjcHeader">
      <div class="kjcContent">
        <div class="kjcInstruction">
          <i>?</i>
          <span>使用说明</span>
          <span class="kjcCardMark"></span>
        </div>
        <div class="kjcCardContent">
          <img src="http://p0.meituan.net/mmerchant/edff1f324ca98587bedcb47b17415c247610.jpg.webp" alt="">
          <div class="kjcCardDetail">
            <div class="kjcCardTitle">耀莱成龙国际影城</div>
            <div class="kjcCardTime">有效期6个月</div>
          </div>
        </div>
        <div class="kjcCardFooter">
          <i>!</i>
          <span>不可充值,不可退换</span>
          <div class="kjcCardPrice">
            <img src="http://s0.meituan.net/bs/?f=myfe/canary:/img/membercard/sale-tag.png" alt="">
            <span class="kjcNewPrice">¥19.9</span>
            <span class="kjcOldPrice">¥30.0</span>
          </div>
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
  .kjcCardDetailContainer
    padding-top 15px
    width 100%
    height 100%
    position relative
    .kjcHeader
      width 345px
      height 146px
      background-image url('https://p0.meituan.net/movie/99a88a75d5e44e839a77d24a925c79063747.png')
      background-size 100% 100%
      background-position cover
      background-repeat no-repeat
      margin 0 auto
      box-shadow  0 6px 10px 0 rgba(0,0,0,0.13)
      color #fff
      border-radius 6px
      position relative
      .kjcInstruction
        position absolute
        top 5px
        left 8px
        color rgba(255,255,255,0.6)
        width 100%
        height 24px
        display flex
        -webkit-tap-highlight-color: rgba(255,255,255,0)
        i 
          font-size 12px
          margin 0 4px 0 0
          padding 2.5px 0 0
          width 12px
          height 14.5
        span 
          padding 2.5px 0 0
          font-size 12px
        .kjcCardMark
          margin-left 315px
          background-color rgba(0,0,0,0.08)
          width 10px
          height 100%
          padding 0 
          position absolute 
          top -5px
      .kjcCardContent
        width 100%
        height calc(100% - 75px)
        img 
          position absolute
          top 45px
          left 79.4px
          width 35px
          height 35px
          border-radius 50%
          vertical-align middle
        .kjcCardDetail
          vertical-align middle
          position absolute
          top 40px
          left 122.5px
          .kjcCardTitle
            font-size 18px
            color #ffffff
            line-height 24.8px
          .kjcCardTime
            font-size 13px
            color rgba(255,255,255,0.8)
            line-height 18.4px
      .kjcCardFooter
        position absolute
        bottom 0
        left 0 
        width 100%
        height 38px
        display flex
        background-color rgba(0,0,0,0.08)
        i 
          font-size 13px
          line-height 38px
          padding-left 19px
          vertical-align middle
        span 
          font-size 13px
          line-height 38px
          vertical-align middle
          margin-left 6px
        .kjcCardPrice
          width 135px
          height 100%
          line-height 38px
          display flex
          margin-left 60px
          img 
            width 59px
            height 21px
            margin 9px 2px 0 0
            


</style>
