<template>
  <footer>
    <div class="kjcFooterContainer">
      <span class="kjcFooterItem">
        <router-link>
          <i class="iconfont icon-dianying"></i>
          <span>电影</span>
        </router-link>
      </span>
      <span class="kjcFooterItem">
        <router-link>
          <i class="iconfont icon-yingyuan"></i>
          <span>影院</span>
        </router-link>
      </span>
      <span class="kjcFooterItem">
        <router-link>
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </router-link>
      </span>
    </div>
  </footer>
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
      height 48px
      display flex
      flex-direction column
      line-height 48px
      align-items center
      &.active
        color #f03d37
        i 
          display block
          font-size 25px
          line-height 25px
          text-align center
        





 
</style>
