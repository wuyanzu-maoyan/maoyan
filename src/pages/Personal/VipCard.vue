<template>
  <div class="wjContainer">
    <div class="wjVipCard">
      <Header title="影院会员卡"></Header>
      <div class="wjShow">
        <img src="../../static/images/wjShow.png" alt="">
      </div>
      <div class="wjCardList">
        <div class="wjCardItem" @click="$router.push('/carddetail')" v-for="(item,index) in 15" :key="index">
          <div class="kjcContent">
            <div class="kjcInstruction">
              <span class="kjcCardMark">折扣卡</span>
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
              <span>不可充值,不可退换</span>
              <div class="kjcCardPrice">
                <span class="kjcNewPrice">促销价:</span>
                <span class="kjcOldPrice">¥15.90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.initScroll()
    },
    methods: {
      initScroll(){
        if (!this.scroll) {
          this.scroll=new BScroll('.wjContainer',{
            click:true,
            bounce:{
              top:false,
              bottom:false
            }
            })
          }else{
          this.scroll.refresh();
        }
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
.wjContainer
  width 100%
  height 100vh
  background-color #F4F4F4
  .wjVipCard
    width 100%
    padding-bottom 30px
    .wjShow
      height 200px
      margin 0 -13.5px
      img
        width 100%
        height 100%
    .wjCardList
      .wjCardItem
        width 345px
        height 146px
        background-image url('https://p0.meituan.net/movie/99a88a75d5e44e839a77d24a925c79063747.png')
        background-size 100% 100%
        background-position cover
        background-repeat no-repeat
        margin 13.5px auto 0
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
          .kjcCardMark
            margin-left 280px
            background-color rgba(0,0,0,0.08)
            width 35px
            height 18px
            padding 0 8px
            position absolute 
            top -3px
            font-size 11px
            color white
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
            width 100px
            height 100%
            line-height 38px
            display flex
            padding-left 90px
 
</style>
