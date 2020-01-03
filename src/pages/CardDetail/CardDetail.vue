<template>
<div>
  <div class="kjcContainer">
    
   <div class="kjcCardDetailContainer">
     <Header title='会员卡详情页'></Header>
    <div class="kjcHeader">
      <div class="kjcContent">
        <div class="kjcInstruction">
          <i class="iconfont icon-wenhao"></i>
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
          <i class="iconfont icon-gantanhao-quan"></i>
          <span>不可储值,不可退换</span>
          <div class="kjcCardPrice">
            <img src="http://s0.meituan.net/bs/?f=myfe/canary:/img/membercard/sale-tag.png" alt="">
            <span class="kjcNewPrice"><span>¥</span>19.9</span>
            <span class="kjcOldPrice">¥30</span>
          </div>
        </div>
      </div>
    </div>
    <div class="kjcCardInfo">
      <div class="kjcCardNotice">
        <span class="kjcCardTag">购卡特惠</span>
        <span>19.9元开卡</span>
      </div>
      <div class="kjcCardNotice">
        <span class="kjcCardTag">首单特惠</span>
        <span>首单1张立减4.0元</span>
      </div>
    </div>
    <div class="kjcItemHeight"></div>
    <div class='kjcCardTips'>
      <div class="kjcCardTipsMain">
        <div class="kjcCardTipsTitle">购票优惠</div>
      <div class="kjcCardTipsContent">
        <img src="http://p1.meituan.net/movie/8a3aa6b113694a653b29e30831832fe82893.png.webp" alt="">
        <div class="kjcTipsContent">
          <div class="kjcTipsTitle">购票享超值会员价</div>
          <p>有效期内，在会员卡支持影院购票可享优惠价；享受会员卡优惠的场次及价格动态变化，优惠幅度由影院决定；每天限购4张会员票，超出后需以非优惠价格购买</p>
        </div>
      </div>
      </div>
    </div>
    <div class="kjcItemHeight"></div>
    <div class="kjcSupportCinemaContent">
      <div class="kjcSupportTitle">支持影院</div>
      <div class="kjckjcSupportContent">
        <i class="iconfont icon-location"></i>
        <span>北京</span>
        <span>1家,全国1家</span>
      </div>
    </div>
    <div class="kjcCardLoaction">
      <div class="kjcCardLocationTitle">中影星美国际影城（温都水城店）</div>
      <div class="kjcCardLocationContent">昌平区北七家镇温都水城广场4-5层</div>
    </div>
    <div class="kjcItemHeight"></div>
    <div class="kjcCardFooter">
      <div class="kjcFooterContent">
        <span>开卡即同意</span>
        <span class="kjcCardProtocol">《影城卡协议》</span>
      </div>
    </div>
    </div>
    </div>
  <div class="kjcBuyCard">
    <div class="kjcBuyCardContent">
      15.9元特惠开卡
    </div>
  </div>
</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
  export default {
    methods:{
      initScroll(){
        if(!this.scroll){
         this.scroll = new BScroll('.kjcContainer',{
            click:true,
            bounce: {
              top: false,
              bottom: false
            }
          })
        }else{
          this.scroll.refresh()
        }
      }
    },
    mounted(){
      this.initScroll()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .kjcBuyCard
    width 100%
    height 65px
    position fixed
    bottom 0
    left 0
    background-color white
    .kjcBuyCardContent
      margin 10px 15px
      background-color rgba(255,158,31,0.98)
      width 345px
      height 45px
      font-size 16px
      color white
      text-align center
      line-height 45px
      border-radius 4px
  .kjcContainer
    width 100%
    height calc(100vh - 65px)
    position relative
    .kjcCardDetailContainer
      width 100%
      position relative
      .kjcItemHeight
        width 100%
        height 10px
        background-color #F4F4F4
      .kjcCardFooter
        width 100%
        height 58.5px
        .kjcFooterContent
          width 100%
          height 58.5px
          display flex
          align-items center
          justify-content center
          span
            vertical-align middle
            font-size 13px
            color #999  
          .kjcCardProtocol
            text-decoration underline
        
      .kjcCardLoaction
        width 100%
        height 73px
        padding 15px
        box-sizing border-box
        .kjcCardLocationTitle
          font-size 15px
          color #333333
          line-height 22.5px
          text-align left
        .kjcCardLocationContent
          font-size 13px
          color #999999
          line-height 18.5px
          text-align left
      .kjcSupportCinemaContent
        width 100%
        height 88px
        padding 20px 15px
        border-top 1px solid #e6e6e6
        border-bottom 1px solid #e6e6e6
        box-sizing border-box
        .kjcSupportTitle
          font-size 17px
          color #333
          text-align center
          margin-bottom 5px
          &:before
              content ''
              display inline-block
              width 28px
              height 1px
              background-color #ccc
              vertical-align middle
              margin-right 8px
          &:after
              content ''
              display inline-block
              width 28px
              height 1px
              background-color #ccc
              vertical-align middle
              margin-left 8px
        .kjckjcSupportContent
          font-size 13px
          color #999999
          text-align center    
          line-height 22.5px
          height 22.5px
          i 
            color #12C5B2
          span 
            margin-right 5px
      .kjcCardTips
        width 100%
        height 205.6px
        padding 30px 15px 0
        box-sizing border-box
        border-top 1px solid #e6e6e6
        border-bottom 1px solid #e6e6e6
        .kjcCardTipsMain
          width 100%
          height 175.6px
          .kjcCardTipsTitle
            width 100%
            height 24px
            text-align center
            line-height 24px
            font-size 17px
            color #333
            &:before
              content ''
              display inline-block
              width 28px
              height 1px
              background-color rgb(204,204,204)
              vertical-align middle
              margin-right 8px
            &:after
              content ''
              display inline-block
              width 28px
              height 1px
              background-color rgb(204,204,204)
              vertical-align middle
              margin-left 8px
        .kjcCardTipsContent
          margin-bottom 30px
          display flex
          padding-top 20px
          img
            vertical-align top
            width 30px
            height 30px
            margin-top 5px
          .kjcTipsContent
            width 100%
            padding-left 12.5px
            .kjcTipsTitle
              color #333333
              font-size 15px
              line-height 22.5px
              margin-bottom 2px
            p
              font-size 13px
              line-height 19.5px
              color #999
      .kjcHeader
        width 345px
        height 146px
        background-image url('https://p0.meituan.net/movie/99a88a75d5e44e839a77d24a925c79063747.png')
        background-color #3474bc
        background-size 100% 100%
        background-position cover
        background-repeat no-repeat
        margin 15px auto 0
        color #fff
        border-radius 6px
        position relative
        margin-bottom 10px
        background-color white
        .kjcContent
          width 345px
          height 146px
          box-shadow  0 6px 10px 0 rgba(0,0,0,0.13)
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
              color rgba(255,255,255,0.8)
            span 
              font-size 13px
              line-height 38px
              vertical-align middle
              margin-left 2px
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
                vertical-align bottom
              .kjcNewPrice
                font-size 18px
                margin 0 2px 0 0
                vertical-align bottom
                span
                  font-size 13px
              .kjcOldPrice
                font-size 11px
                text-decoration line-through
                vertical-align bottom
                margin-top 2px
      .kjcCardInfo
        width 345px
        height 72px
        padding 0 15px 20px
        border-bottom 1px solid rgb(230,230,230)
        border-top 0.5px solid rgba(0,0,0,0.1)
        background-color white
        .kjcCardNotice
          width 345px
          height 21px
          padding-top 20px
          color #999
          line-height 21px
          &:last-child
            padding-top 0
            margin-top 10px
          span 
            font-size 14px
            color #999
          .kjcCardTag
            border 1px solid #FF9900
            font-size 12px
            line-height 18px
            padding 0 4px
            margin-right 5px
            border-radius 1px
            color #FF9900



</style>
