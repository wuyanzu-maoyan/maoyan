<template>
  <div id="zxCity">
    <!-- 定位城市 -->
    <section class="zxCityContainer">
      <div class="zxCityTitle">
        定位城市
      </div>
      <div class="zxCityItemCon clearfix">
        <div class="zxCityItem">定位失败,请点击重试</div>
      </div>
    </section>
    <!-- 最近访问 -->
    <section class="zxCityContainer">
      <div class="zxCityTitle">
        最近访问城市
      </div>
      <div class="zxCityItemCon clearfix">
        <div class="zxCityItem">北京</div>
      </div>
    </section>
    <!-- 热门城市 -->
    <section class="zxCityContainer">
      <div class="zxCityTitle">
        热门城市
      </div>
      <div class="zxCityItemCon clearfix">
        <div class="zxCityItem" v-for="(hotCity,index) in hotCitys" :key="index">{{hotCity}}</div>
      </div>
    </section>
    <!-- 列表 -->
    <section class="zxCityContainer">
      <div class="zxCityTitle">
        A
      </div>
      <div class="zxCityUl">
        <div class="zxCityli">阿拉善</div>
        <div class="zxCityli">鞍山</div>
        <div class="zxCityli">安庆</div>
        <div class="zxCityli">安阳</div>
        <div class="zxCityli">阿贝</div>
      </div>
    </section>
    <!-- 导航 -->
    <div class="zxNav">
      <div class="zxNavItem">定位</div>
      <div class="zxNavItem">最近</div>
      <div class="zxNavItem">热门</div>
      <div class="zxNavItem">A</div>
      <div class="zxNavItem">B</div>
      <div class="zxNavItem">C</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return{
        hotCitys:['上海','北京','广州','深圳','武汉','天津','西安','南京','杭州','成都','重庆']
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #zxCity
    background-color #ebebeb
    width 100%
    height 100%
    .zxCityContainer
      width 358px
      font-size 14px
      .zxCityTitle
        width 100%
        height 30px
        line-height 30px
        padding-left 10px
      .clearfix::after
          content ""
          display table
          clear both
      .zxCityItemCon
        width 100%
        background-color #f5f5f5
        padding-bottom 8px
        .zxCityItem
          height 33px
          min-width 27%
          padding 0 20px
          float left
          background-color #fff
          margin-top 15px
          margin-left 4%
          border 1px solid #e6e6e6
          border-radius 3px
          line-height 33px
          text-align center
          box-sizing border-box
      .zxCityUl
        width 100%
        background-color #f5f5f5
        padding-bottom 8px
        .zxCityli
          height 44px
          line-height 44px
          margin-left 15px
          margin-right 20px
          border-bottom 1px solid #c8c7cc
    .zxNav
      position fixed
      top 75px
      right 0
      width 35px
      text-align center
      font-size 12px
      z-index 9
      .zxNavItem
        height 20px
        line-height 20px
        color #333

</style>
