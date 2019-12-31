<template>
  <div class="wjVipCard">
    <div class="wjShow">
      <img src="../../static/images/wjShow.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '../../common/stylus/mixins.styl';
  .wjVipCard
    width 348px
    height calc(100vh - 50px)
    background-color #F4F4F4
    padding 0 13.5px 30px 13.5px
    .wjShow
      height 200px
      margin 0 -13.5px
      img
        width 100%
        height 100%
 
</style>
