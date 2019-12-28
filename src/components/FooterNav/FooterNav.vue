<template>
    <div class="kjcFooterContainer">
      <span class="kjcFooterItem" @click="$router.push('/home')">
          <i class="iconfont icon-dianying"></i>
          <p>电影</p>
      </span>
      <span class="kjcFooterItem" @click="$router.push('/cinema')">
          <i class="iconfont icon-yingyuan"></i>
          <p>影院</p>
      </span>
      <span class="kjcFooterItem" @click="$router.push('/personal')">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
      </span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kjcFooterContainer
    position fixed
    bottom 0 
    left 0
    width 100%
    background #fff
    display flex
    height 48px
    .kjcFooterItem
      width 33.33333%
      display flex
      flex-direction column
      align-items center
      &.active
        color #f03d37
      i 
        display block
        font-size 22px
        text-align center
        margin 5px 0
      p 
        font-size 12px;

        





 
</style>
