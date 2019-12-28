<template>
  <div class="loginContainer">
    <div>头部组件</div>
    <div class="loginInner">
      <div class="loginHeader">
        <div class='active'>
          <a href="javascript:;" >美团账号登录</a>
        </div>
        <div>
          <a href="javascript:;" >手机验证登录</a>
        </div>    
      </div>
      <div class="line"></div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .loginInner
    .loginHeader
      width 90vw
      padding 0 5vw
      display flex
      div
        width 100%
        height 72px
        line-height 72px
        text-align center
        position relative
        &.active::after
          position absolute
          width 100%
          height 8px
          content ''
          display table
          background-color #df2d2d
    .line
      width 100vw
      height 8px
      background-color #f8f8f8
        

 
</style>
