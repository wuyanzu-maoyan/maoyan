<template>
  <div id="openAppContainer"  ref="app">
    <div class="appScroll">
      <!-- 上方头部导航条 -->
      <div class="lyhLogo_app">
        <div class="lyhLogo">
          <img src="./images/logo.png">
        </div>
        <div class="lyhText">
          <h2>猫眼</h2>
          <span>在线选座,热门影讯,爱上看电影</span>
        </div>
        <button>立即打开</button>
      </div>
    </div>
    <!-- 右下方图标按钮 -->
    <!-- <div class="open" :style="{display: zyhIsShow ? 'block' : 'none'}"> -->
    <div class="open">
      <div class="openBg">
        <img src="./images/logo.png" alt="">
      </div>
      <button>打开APP</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  // import BScroll from 'better-scroll'

  export default {
    /* data(){
      return {
        zyhIsShow: false, //控制右下方图标的显示隐藏，默认隐藏
        zyhY: 0  //App导航向上滑动的距离 translateY
      }
    }, */
    /* mounted(){
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.app, {
          click:true,
          probeType: 1,  // 非实时 / 触摸
        })
      }
      // 绑定scroll监听
      this.scroll.on('scroll', ({x,y})=>{
        console.log('scroll',x,y);
        this.zyhY = Math.abs(y)
        console.log('zyhY', this.zyhY);
        if (y < -120) {
          this.zyhIsShow = true
        }
      })
    } */
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #openAppContainer 
    height 64px
    .lyhLogo_app
      width: 100%;
      height: 64px;
      background #fff
      position: relative;
      display: flex;
      border-bottom: 1px solid #e6e6e6;
      .lyhLogo
        width: 44px;
        height: 44px;
        border-radius:50%; 
        overflow: hidden
        img
          position: absolute;
          width: 44px;
          height: 44px;
          border-radius:50%;
          line-height: 64px;
          top:11px;
          left: 15px;
      button
        width:68px;
        height: 30px;
        background: #ef4238;
        color: #fff;
        font-size: 12px;
        border-radius: 8px;
        border: 0px;
        position: absolute;
        right:15px ;
        top: 18px;
        text-align: center
      .lyhText
        position: absolute;
        height:40px;
        top: 17px;
        left: 63px;
        h2
          font-size: 17px;
          color: #222;
          margin-bottom: 5px;
        span
          font-size: 12px;
          color: #999;
    .open
      position fixed
      right 16px
      bottom 100px
      z-index 2
      width 60px
      height 95px
      display flex
      flex-direction column
      justify-content center
      align-items center
      .openBg
        width 55px
        height 55px
        background #fff
        border-radius 15px
        padding 5px
        box-sizing border-box
        img 
          width 100%
          height 100%
      button
        width 60px
        height 22px
        background linear-gradient(-90deg,#FEC718,#FCA72A)
        margin-top 8px
        border none
        border-radius 13px
        font-size 10px
        color #fff



</style>
