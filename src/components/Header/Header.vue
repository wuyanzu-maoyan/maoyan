<template>
  <div>
    <header class="kjcHeader">
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
  .kjcHeader
    height 50px
    background-color #e54847
    border-bottom 1px solid #e54847
    color white
    width 100%
    position fixed
    top 0
    left 0
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
