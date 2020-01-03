<template>
  <div class="zxList clearfix" >
    <div class="zxMovie" v-for="(movie,index) in MovieList" :key="index">
      <img class="zxMovieImg" :src="movie.img" alt="" >
      <div class="zxMovieInfo">
        <div class="zxNameScore">
          <p class="zxName">{{movie.nm}}</p>
          <p class="zxWish">{{movie.sc? movie.sc+'分':movie.wish+'人想看'}}</p>
        </div>
        <div class="zxDetailSection">
          <div class="zxDetailItems">
            <p>{{movie.enm}}</p>
            <p>{{movie.cat}}</p>
            <p>{{movie.rt}}</p>
          </div>
          <div class="zxBuy">ddd</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["MovieList"]
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.zxList
  padding-left 15px
  box-sizing border-box
  .zxMovie
    padding 12px 0
    min-height 90px
    border-bottom 1px solid #e6e6e6
    .zxMovieImg 
      background-color #eee
      width 64px
      height 90px
      float left
      margin-right 10px
    .zxMovieInfo
      float right
      width 270px
      padding-right 15px
      margin-top 1px
      .zxNameScore
        display flex
        justify-content space-between
        font-size 16px
        color #222
        margin-bottom 2px
        margin-top 5px
        .zxName
          max-height 24px
          min-width 170px
          max-width 180px
          overflow hidden
          white-space nowrap
          text-overflow ellipsis
          font-weight 700
          font-size 17px
          
        .zxWish
          font-size 14px
          // color #666
          color #fa0
      .zxDetailSection
        margin-top 5px
        display flex
        .zxDetailItems
          overflow hidden
          padding-right 10px
          min-height 27px
          width 213px
          p
            height 18px
            font-size 13px
            color #666
            margin-top 2px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
        .zxBuy
          background-color #3c9fe6
          color #fff
          border-radius 4px
          font-size 12px
          line-height 13px
          margin-bottom 7px
          margin-top 15px
          width 48px
          text-align center
          height 27px
          line-height 27px

 
</style>
