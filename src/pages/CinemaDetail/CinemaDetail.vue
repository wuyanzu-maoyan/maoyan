<template>
  <div id="cinemaDetailContainer">
    <Header :title="'中影星美国际影城（温都水城店）'"/>
    <!-- 头部影院信息 -->
    <div class="cinemaInfo">
      <div class="cinameData">
        <p class="cinemaName">中影星美国际影城（温都水城店）</p>
        <p class="cinemaAddress">昌平区北七家镇温都水城广场4-5层</p>
      </div>
      <div class="cinameLocation">
        <i class="iconfont address">addr</i>
      </div>
    </div>
    <!-- 电影轮播图 -->
    <div class="moviesSwiper">
      <div class="swiperContainer">
        <div class="swiperWrapper">
          <div class="swiperSlide">
            <img src="./images/yewen.jpg" alt="">
          </div>
          <div class="swiperSlide selectImg">
            <img src="./images/yewen.jpg" alt="">
          </div>
          <div class="swiperSlide">
            <img src="./images/yewen.jpg" alt="">
          </div>
          <div class="swiperSlide">
            <img src="./images/yewen.jpg" alt="">
          </div>
          <div class="swiperSlide">
            <img src="./images/yewen.jpg" alt="">
          </div>
        </div>
      </div>
      <div class="movieInfo">
        <div class="movieTitle">
          <span class="title">叶问4：完结篇 </span>
          <span class="grade">
            <span>9.5<span class="small">分</span></span>
          </span>
        </div>
        <div class="movieDesc">107分钟 | 动作 | 甄子丹,吴樾,吴建豪</div>
      </div>
    </div>
    <!-- 电影播出时间导航 -->
    <div class="movieDateNav">
      <div class="movieDateNavItem active">
        今天12月28日
      </div>
      <div class="movieDateNavItem">
        明天12月29日
      </div>
      <div class="movieDateNavItem">
        后天12月30日
      </div>
    </div>
    <!-- 电影播出具体时间场次信息 -->
    <MovieShowTime/>
  </div>
</template>

<script type="text/ecmascript-6">
  import MovieShowTime from '@/components/MovieShowTime/MovieShowTime'
  export default {
    components:{
      MovieShowTime
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#cinemaDetailContainer
  .cinemaInfo
    width 100%
    height 74px
    padding 15px
    border-top 1px solid #ddd
    box-sizing border-box
    display flex
    margin-top 64px
    .cinameData
      width 300px
      height 42px
      .cinemaName
        font-size 17px
        font-weight bold
        color #333
        line-height 24px
      .cinemaAddress
        font-size 13px
        color #999
        line-height 21px
    .cinameLocation
      width 80px
      height 30px
      border-left 1px solid #ddd
      line-height 30px
      text-align center

  .moviesSwiper
    width 100%
    height 201px
    box-sizing border-box
    border-bottom 1px solid #ddd
    .swiperContainer
      position relative
      width 100%
      height 135px
      background #8E9BA7
      padding 20px 15px 20px 5px
      box-sizing border-box
      overflow hidden
      .swiperWrapper
        position absolute
        width 600%
        height 95px
        .swiperSlide
          width 65px
          height 95px
          margin-left 15px
          float left
          &.selectImg
            transform scale(1.2)
            border 2px solid #fff
            position relative
            &:after
              position absolute
              bottom -11px
              left 50%
              transform translateX(-50%)
              content ""
              // border 5px solid #f00
              border 5px solid transparent
              border-top 5px solid #fff

          img 
            width 100%
            height 100%
        
    .movieInfo
      width 100%
      height 66px
      padding 11px 15px
      box-sizing border-box
      .movieTitle
        width 345px
        height 24px
        text-align center
        line-height 24px
        .title
          font-size 17px
          color #333
          font-weight bold
          line-height 24px
        .grade
          font-size 16px
          color #ffb400
          font-weight 700
          .small
            font-size 10px
      .movieDesc
        width 345px
        height 18px
        line-height 18px
        text-align center
        color #999
        font-size 13px
  .movieDateNav
    width 100%
    height 45px
    border-bottom 1px solid #ddd
    display flex
    justify-content space-around
    .movieDateNavItem
      width 33%
      height 100%
      margin 0 15px
      font-size 14px 
      color #666
      line-height 45px
      text-align center
      &.active
        border-bottom 2px solid #f03d37
        color #f03d37

  
</style>
