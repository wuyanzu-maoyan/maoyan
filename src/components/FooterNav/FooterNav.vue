<template>
    <div class="kjcFooterContainer" v-show="$route.meta.isFooter">
      <span class="kjcFooterItem" @click="goto('/home/now')" :class="{active:$route.path === '/home/now' || $route.path === '/home/will'}">
          <i class="iconfont icon-dianying"></i>
          <p>电影</p>
      </span>
      <span class="kjcFooterItem" @click="goto('/cinema')" :class="{active:$route.path === '/cinema'}">
          <i class="iconfont icon-yingyuan"></i>
          <p>影院</p>
      </span>
      <span class="kjcFooterItem" @click="goto('/personal')" :class="{active:$route.path === '/personal'}">
          <i class="iconfont icon-wode"></i>
          <p>我的</p>
      </span>
    </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goto(path){
        if(this.$route.path !== path){
          this.$router.push(path)
        }
      }
    }
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
    border-top 0.5px solid #d8d8d8
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
