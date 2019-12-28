<template>
  <div class="kjcHeaderContainer">
    <header class="kjcHeader">
      <i class="iconfont icon-zuojiantou back"></i>
      <h1 class="kjcTitle">{{title}}</h1>
    </header>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:['title']
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kjcHeaderContainer
    height 50px
    width 100%
    .kjcHeader
      height 50px
      background-color #e54847
      border-bottom 1px solid #e54847
      color white
      width 100%
      position relative
      z-index 10
      top 0
      left 0
      .back
        width 50px
        height 50px
        font-size 30px
        color white
        position absolute 
        top 10px
        left 10px
      .kjcTitle
        width 100%
        height 100%
        font-size 18px
        font-weight 400
        text-align center
        line-height 50px
        white-space nowrap 
        overflow hidden
        text-overflow ellipsis

  
</style>
