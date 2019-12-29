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
    <!-- 电影播出具体时间及座位 -->
    <div class="movieTimeWrap">
      <div class="vipInfo">
        <div class="label">折扣卡</div>
        <div class="labelText">现在开卡，首单2张最高立减6元</div>
        <div class="labelProcess">20元起开卡 > </div>
      </div>
      <div class="movieShowList">
        <div class="movieShowItem">
          <div class="time">
            <div class="begin">10:22</div>
            <div class="end">12:14 散场</div>
          </div>
          <div class="info">
            <div class="lang">国语 2D</div>
            <div class="hall">5号厅</div>
          </div>
          <div class="price">
            <div class="sellPrice">
              ￥
              <span class="p">38</span>
            </div>
            <div class="vipPrice">
              <span class="vip">折扣卡</span>
              <span class="num">￥33</span>
            </div>
            <div class="vipDesc">折扣卡首单特惠</div>
          </div>
          <button class="btn">购票</button>
        </div>
        <div class="movieShowItem">
          <div class="time">
            <div class="begin">10:22</div>
            <div class="end">12:14 散场</div>
          </div>
          <div class="info">
            <div class="lang">国语 2D</div>
            <div class="hall">5号厅</div>
          </div>
          <div class="price">
            <div class="sellPrice">
              ￥
              <span class="p">38</span>
            </div>
            <div class="vipPrice">
              <span class="vip">折扣卡</span>
              <span class="num">￥33</span>
            </div>
            <div class="vipDesc">折扣卡首单特惠</div>
          </div>
          <button class="btn">购票</button>
        </div>
        <div class="movieShowItem">
          <div class="time">
            <div class="begin">10:22</div>
            <div class="end">12:14 散场</div>
          </div>
          <div class="info">
            <div class="lang">国语 2D</div>
            <div class="hall">5号厅</div>
          </div>
          <div class="price">
            <div class="sellPrice">
              ￥
              <span class="p">38</span>
            </div>
            <div class="vipPrice">
              <span class="vip">折扣卡</span>
              <span class="num">￥33</span>
            </div>
            <div class="vipDesc">折扣卡首单特惠</div>
          </div>
          <button class="btn">购票</button>
        </div>
        <div class="movieShowItem">
          <div class="time">
            <div class="begin">10:22</div>
            <div class="end">12:14 散场</div>
          </div>
          <div class="info">
            <div class="lang">国语 2D</div>
            <div class="hall">5号厅</div>
          </div>
          <div class="price">
            <div class="sellPrice">
              ￥
              <span class="p">38</span>
            </div>
            <div class="vipPrice">
              <span class="vip">折扣卡</span>
              <span class="num">￥33</span>
            </div>
            <div class="vipDesc">折扣卡首单特惠</div>
          </div>
          <button class="btn">购票</button>
        </div>
      </div>
    </div>2
  </div>
</template>

<script type="text/ecmascript-6">

  export default {
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
    margin-top 55px
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

  .movieTimeWrap
    width 100%
    .vipInfo
      width 100%
      height 42px
      background #FFF5EA
      padding 0 15px
      display flex
      .label
        width 34px
        height 15px
        background #ffb400  
        line-height 15px
        border-radius 2px
        margin 13px 10px 0 0
        font-size 10px
        color #fff
        text-align center
      .labelText
        width 231px
        color #ffb400
        font-size 12px
        line-height 42px
      .labelProcess
        font-size 12px
        color #999
        line-height 42px

    .movieShowList
      .movieShowItem
        width 100%
        height 76px
        padding 17px 12px
        box-sizing border-box
        border-bottom 1px solid #ddd
        display flex
        .time
          width 54px
          height 42px
          .begin
            font-size 20px
            color #333
          .end
            font-size 11px
            color #999
            margin-top 10px
        .info
          width 96px
          height 42px
          margin-left 17px
          .lang
            font-size 13px
            color #333
            line-height 18px
            margin-top 3px
          .hall
            font-size 11px
            color #999
            margin-top 8px
        .price
          width 130px
          height 42px
          margin-left 5px
          .sellPrice
            display inline-block
            width 35px
            height 21px
            font-size 11px
            color #f03d37
            .p
              font-size 19px
              margin-left -5px
          .vipPrice
            display inline-block
            width 54px
            height 14px
            border 1px solid #ff9000
            border-radius 2px
            font-size 10px
            line-height 15px
            .vip
              color #fff
              background #f90
              box-sizing border-box
            .num
              color #f90
          .vipDesc
            font-size 11px
            color #999
            margin-top 8px

        .btn
          width 45px
          height 27px
          background #f03d37
          border-radius 4px
          text-align center
          line-height 27px
          border none
          color #fff
          font-size 12px
          margin-top 8px





</style>
