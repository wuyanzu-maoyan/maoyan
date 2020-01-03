<template>
  <div id="AppContainer">
    <div class="back" @click="$router.back()"></div>
    <img src="./images/app.png" alt="">
    <div class="btn">立即下载</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  #AppContainer
    .back
      position absolute
      left 15px
      top 15px
      width 16px
      height 16px
      transform rotate(45deg)
      border-left 2px solid #fff
      border-bottom 2px solid #fff
    img 
      width 100%
      height 290px
    .btn 
      width 247px
      height 46px
      background linear-gradient(-90deg, #EE2F28 0, #F3532F 98%)
      border-radius 23px
      margin 16px auto 
      font-size 16px
      color #fff
      line-height 46px
      text-align center
</style>
