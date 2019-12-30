<template>
  <div>
    <div class="wjNot">
      <div class="wjText">您最近还没有新订单，赶快去下一单吧</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  div
    background-color #F0EFED
      width 100%
      height 100%
    .wjNot
      position absolute
      width 380px
      height 200px
      background-image url('../../static/images/wjCat.png')
      background-repeat no-repeat
      background-size 110px
      margin-top -100px
      top 50%
      background-position-x center;
      background-position-y top;
      text-align center
      .wjText
        width 100%
        height 148px
        box-sizing border-box
        padding-top 130px
        font-size 16px
        color #999
</style>
