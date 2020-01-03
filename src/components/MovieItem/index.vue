<template>
  <div class="zxList clearfix" >
    <div class="zxMovie" v-for="(movie,index) in getMovieList" :key="index" @click="$router.push(`/detail/${movie.id}`)">
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
          <div class="zxBuy" :class="movie.class">{{movie.className}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:["MovieList"],
    
    computed:{
      getMovieList(){
        this.MovieList.forEach(item => {
          console.log(item.rt,item.rt.includes('2020'))
          if(item.rt.includes('2020')){
            if(item.rt.includes('2020-01-')){
              if(item.rt.includes('2020-01-01' || '2020-01-02' || '2020-01-03' || '2020-01-04')){
                item.class = 'btn1' //购票
                item.className = '购票'
                return
              }
              item.class = 'btn3' //预售
              item.className = '预售'
              return
            }
            item.class = 'btn2' //想看
            item.className = '想看'
          }else if(item.rt.includes('2019-12-')){
            item.class = 'btn1' //购票
            item.className = '购票'
          }else{
            item.class = 'btn0'
          }
        });
        return this.MovieList
      }    
    }
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
          &.btn1 //购票
            background-color #ef4238 
          &.btn2 //想看
            background-color #faaf00 
          &.btn3 //预售
            background-color #3c9fe6
          &.btn0 //无
            display none
</style>
