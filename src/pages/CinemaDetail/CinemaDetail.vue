<template>
  <div id="cinemaDetailContainer">
    <div ref="cinema" style="height: 667px">
      <div class="cinemaScroll">
        <div v-if='cinemaDetail.cinemaData'>
          <Header :title="cinemaDetail.cinemaData.nm"/>
        </div>
        <OpenApp/>
        <!-- 头部影院信息 -->
        <div class="cinemaInfo"  >
          <div class="cinameData" v-if='cinemaDetail.cinemaData'>
            <p class="cinemaName">{{cinemaDetail.cinemaData.nm}}</p>
            <p class="cinemaAddress">{{cinemaDetail.cinemaData.addr}}</p>
          </div>
          <div class="cinameLocation">
            <img src="./images/addr.png" alt=""/>
          </div>
        </div>
        <!-- 电影轮播图 -->
        <div class="moviesSwiper">
          <div class="swiperContainer" ref="movies">
            <div class="swiperWrapper" v-if='cinemaDetail.showData' :style="`transform:translateX(${MovieX}px)`">
              <div class="swiperSlide" :class="{selectMovie:MovieIndex===index}" @click="changeMovie(index)"
                v-for="(movie,index) in cinemaDetail.showData.movies" :key="index">
                <img :src="movie.img" alt="">
              </div>
            </div>
          </div>
          <div v-if='cinemaDetail.showData'>
            <div class="movieInfo" v-show="MovieIndex===index"
              v-for="(movie,index) in cinemaDetail.showData.movies" :key="index">
              <div class="movieTitle">
                <span class="title">{{movie.nm}} </span>
                <span class="grade">
                  <span>
                    {{movie.sc}}
                    <span class="small">分</span>
                  </span>
                </span>
              </div>
              <div class="movieDesc">{{movie.desc}}</div>
            </div>
          </div>
        </div>
        <!-- 电影播出时间导航 -->
        <div class="movieDateNav" v-if="cinemaDetail.showData">
          <!-- 如果是未上映的电影，默认加‘今天’的时间导航 -->
          <div class="movieDateNavItem" :class="{active:zyhIsActive===0 }" @click="changeActive(0)"
            v-if="!cinemaDetail.showData.movies[MovieIndex].globalReleased">
            今天12月28日
          </div>
         
          <div class="movieDateNavItem" :class="{active: zyhIsActive===index}" @click="changeActive(index)"
            v-for="(date,index) in cinemaDetail.showData.movies[MovieIndex].shows" :key="index">
            {{date.dateShow}}
          </div>
          
        </div>
        <!-- 电影播出具体时间场次信息 -->
        <div class="movieTimeWrap" >
          <!-- 会员卡信息 -->
          <div class="vipInfo" v-if="cinemaDetail.showData" >
            <div class="label">{{cinemaDetail.showData.vipInfo[0].tag}}</div>
            <div class="labelText">{{cinemaDetail.showData.vipInfo[0].title}}</div>
            <div class="labelProcess">{{cinemaDetail.showData.vipInfo[0].process}} > </div>
          </div>
          <!-- 放映时间 -->
          <div class="movieShowList" v-if="cinemaDetail.showData && cinemaDetail.showData.movies[MovieIndex].globalReleased">
            <div class="movieShowItem" @click="$router.push(`/seats/${show.th}`)"
              v-for="(show,index) in cinemaDetail.showData.movies[MovieIndex].shows[this.zyhIsActive].plist" :key="index">
              <div class="time">
                <div class="begin">{{show.tm}}</div>
                <!-- <div class="end">{{EndTime[index]}} 散场</div> -->
                <div class="end">{{EndTime[index] || show.tm}} 散场</div>
              </div>
              <div class="info">
                <div class="lang">{{show.lang}} {{show.tp}}</div>
                <div class="hall">{{show.th}}</div>
              </div>
              <div class="price">
                <div class="sellPrice">
                  ￥
                  <span class="p">38</span>
                </div>
                <div class="vipPrice">
                  <span class="vip">{{show.vipPriceName}}</span>
                  <span class="num">￥{{show.vipPrice}}</span>
                </div>
                <div class="vipDesc">{{show.extraDesc}}</div>
              </div>
              <button class="btn">购票</button>
            </div> 
          </div>

          <!-- 影片未上映的情况 -->
          <div class="noSeat" v-if="cinemaDetail.showData && !cinemaDetail.showData.movies[MovieIndex].globalReleased">
            <img src="./images/noSeat.png" alt="">
            <div class="text">影片未上映  </div>
            <div class="dateBtn">点击查看{{cinemaDetail.showData.movies[MovieIndex].shows[0].dateShow}}场次
            </div>
          </div>
        </div>

        <div class="gap"></div>
        <!-- 影院套餐 -->
        <div class="taocanList">
          <div class="title">影院超值套餐</div>
          <div v-if="cinemaDetail.dealList">
            <div class="taocanItem" v-for="(taocan,index) in cinemaDetail.dealList.dealList" :key="index">
              <div class="img">
                <img :src="taocan.imageUrl" alt="">
                <div class="hot" v-if="taocan.cardTag==='HOT'">HOT</div>
              </div>
              <div class="taocanInfo">
                <div class="top">
                  <div class="tag" v-if="taocan.recommendPersonNum===1">单人</div>
                  <div class="tag" v-if="taocan.recommendPersonNum===2">双人</div>
                  <div class="tag" v-if="taocan.recommendPersonNum===3">多人</div>
                  <span class="content">{{taocan.title}}</span>
                </div>
                <div class="sellNum">{{taocan.curNumberDesc}}</div>
                <div class="bottom">
                  <div class="sellPrice">￥{{taocan.price}} </div>
                  <div class="btn">去购买</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import OpenApp from '../../components/Openapp/OpenApp'
  import {mapState} from 'vuex'
  import {reqCinemaDetail} from '@/api'
  
  export default {
    name: 'CinemaDetail',
    props:['id'],
    components:{
      OpenApp,
    },
    data(){
      return {
        zyhIsActive: 0,  //时间导航的切换：默认为0：12月28日  ||  1：12月29日  ||  2：12月30日
        MovieIndex: 0,  //轮播图中当前选中的电影的index，初始为0，默认选中第一个
        MovieX: 0,  //电影轮播图的偏移量
        EndTime: [] , //包含电影结束时间的数组
      }
    },
    async mounted(){
      const id = this.id
      await this.$store.dispatch('getCinemaDetail', id)

      //竖向滑屏
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.cinema, {
          click:true,
          bounce:false,  //取消弹簧效果
        })
      }
      this.endTime
    },
    updated(){
      this.endTime
    },
    computed:{
      ...mapState({
        cinemaDetail: state => state.cinemaDetail.cinemaDetail || {}
      }),

     //电影结束时间的计算
      endTime(){
        this.EndTime = []
        this.cinemaDetail.showData.movies[this.MovieIndex].shows[this.zyhIsActive].plist.forEach(movie => {
          let startTimeArr = movie.tm.split(':')    //将电影开始时间分割成【小时，分钟】小数组
          let startTime = startTimeArr[0]*60 + startTimeArr[1]*1   //将时间计算成分钟
          //求电影结束时间的小数组=电影开始时间+电影时长
          let EndTimeItem = startTime + this.cinemaDetail.showData.movies[this.MovieIndex].dur    
          //结束时间拼成数组
          let EndTimeArr = [Math.floor(EndTimeItem/60)%24, EndTimeItem%60]
          // console.log(EndTimeArr);
          //判断时间，
          if (EndTimeArr[0] <= 9) {
            EndTimeArr[0] = `0${EndTimeArr[0]}`
          }
          if (EndTimeArr[1] < 10) {
            EndTimeArr[1] = `0${EndTimeArr[1]}`
          }

          this.EndTime.push(`${EndTimeArr[0]}:${EndTimeArr[1]}`)
          // console.log(this.EndTime);
        })
          
        return this.EndTime
      },

    },
    methods:{
      //电影轮播图 点击切换电影的回调
      changeMovie(index){
        let MovieX = 142
        this.MovieIndex = index
        MovieX = MovieX - this.MovieIndex*80
        this.MovieX = MovieX
      },
      //切换时间导航的回调
      changeActive(date){
        this.zyhIsActive = date
      },
      //初始化电影轮播图的横向滑屏
      _initMovieScroll(){
        if (!this.moviesScroll) {
          this.moviesScroll = new BScroll(this.$refs.movies, {
            click:true,
            scrollX: true,  //允许横向滑屏
          })
        }
      },

    },
    watch:{
      cinemaDetail(){
        this.$nextTick(()=>{
          //电影轮播图的横向滑屏
          this._initMovieScroll()
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#cinemaDetailContainer
  .gap
    width 100%
    height 10px
    background #f0f0f0
  .cinemaInfo
    width 100%
    height 74px
    padding 15px
    border-top 1px solid #ddd
    box-sizing border-box
    display flex
    // margin-top 64px
    .cinameData
      width 300px
      height 42px
      .cinemaName
        font-size 17px
        font-weight bold
        color #333
        line-height 24px
        overflow hidden
        text-overflow ellipsis 
        white-space nowrap
      .cinemaAddress
        font-size 13px
        color #999
        line-height 21px
        overflow hidden
        text-overflow ellipsis 
        white-space nowrap
    .cinameLocation
      width 71px
      height 30px
      border-left 1px solid #ddd
      margin 7px -15px 0 0
      line-height 30px
      text-align center
      img
        width 19px
        height 22px
        vertical-align middle

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
        display flex
        justify-content flex-start
        width 880px
        height 95px
        
        .swiperSlide  
          width 65px
          height 95px
          margin-left 15px
          transition transform .5s
          &.selectMovie
            position absolute
            top 0
            left 0
            transform scale(1.2)
            border 2px solid #fff
            position relative
            &:after
              position absolute
              bottom -11px
              left 50%
              transform translateX(-50%)
              content ""
              border 5px solid transparent
              border-top 5px solid #fff
          img 
            width 65px
            height 95px
          
        
    .movieInfo
      width 100%
      height 66px
      // overflow hidden
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
    justify-content flex-start
    .movieDateNavItem
      width 33%
      max-width 90px
      // min-width 33%
      height 100%
      margin 0 15px
      font-size 14px 
      color #666
      line-height 45px
      text-align center
      &.active
        border-bottom 2px solid #f03d37
        color #f03d37

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
          width 97px
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
            width 60px
            height 14px
            border 1px solid #ff9000
            border-radius 2px
            font-size 10px
            line-height 15px
            .vip
              width 32px
              color #fff
              background #f90
              box-sizing border-box
            .num
              width 28px
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
 

  
    .noSeat
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 100%
      height 230px
      background #f0f0f0
      img
        width 77px
        height 71px
      .text
        margin-top 12px
        font-size 16px
        color #acacac
      .dateBtn
        min-width 170px
        height 35px
        background #fff
        margin 20px auto 0
        padding 0 10px
        border-radius 5px
        border 1px solid rgba(0,0,0,.15)
        line-height 35px
        text-align center
        font-size 14px
        color #f03d37
        // overflow hidden
        // text-overflow ellipsis
        // white-space nowrap

 
  .taocanList
    width 100%
    // height 989px
    margin-left 15px
    .title 
      height 45px
      line-height 45px
      font-size 15px
      color #666
    .taocanItem
      display flex
      justify-content flex-start
      height 92px
      padding 13px 0
      border-top 1px solid #eee
      .img
        position relative
        img 
          width 92px
          height 92px
        .hot 
          position absolute
          left 0
          top 0
          width 26px
          height 18px
          background #fa5939
          border-bottom-right-radius 2px
          padding 0 5px
          font-size 12px
          color #fff
          line-height 18px
      .taocanInfo
        display flex
        flex-direction column
        justify-content space-between
        width 243px
        height 92px
        margin 0 15px
        .top 
          font-size 14px
          color #333
          line-height 18px
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          .tag
            display inline-block
            width 20px
            height 15px
            padding 0 4px
            margin-right 7px
            border-radius 2px
            line-height 15px
            text-align center
            font-size 10px
            color #fff
            background #f90
        .sellNum
          display flex
          justify-content flex-end
          height 16px
          line-height 16px
          font-size 12px
          color #999
        .bottom 
          display flex 
          justify-content space-between
          align-items center
          .sellPrice
            font-size 16px
            color #f03d37
          .btn 
            width 36px
            height 27px
            background #f03d37
            padding 0 8px
            border-radius 3px
            line-height 27px
            font-size 12px
            color #fff

        
      


  
</style>
