<template>
  <div id="MovieShowTimeContainer">
    <!-- 电影播出具体时间场次信息 -->
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
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

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
