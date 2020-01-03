<template>
  <div>
    <div class="open" @click="$router.push('/app')">
          <div class="openBg">
            <img src="./images/logo.png" alt="">
          </div>
          <button>打开APP</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
