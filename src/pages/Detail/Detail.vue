<template>
  <div id="detailContainer" >
    <div ref="movie"  :style="{background:detail.backgroundColor,height: '607px'}">
      <div class="movieScroll">
        <OpenApp/>
        <Open/>
        <!-- 电影基本信息 -->
        <div class="movieInfo">
          <!-- 返回按钮 -->
          <div class="back" @click="$router.go(-1)"></div>
          <!-- 头部电影详细信息 -->
          <div class="movieInfoTop">
            <div class="movieImg" @click="toVideo">
              <img class="movie" :src="detail.albumImg" alt="">
              <img class="stop" src="./images/stop.png" alt="">
            </div>
            <div class="movieDesc">
              <div class="movieDescTop">
                <p class="movieCnName">{{detail.nm}}</p>
                <p class="movieEnName">{{detail.enm}}</p>
                <div class="movieOtherInfo">
                  <div class="movieType">
                    <span>{{detail.cat}}</span>
                    <img :src="detail.movieTag" alt="">
                  </div>
                  <div class="movieActors">{{detail.star}}</div>
                  <div class="movieShowTime">{{detail.pubDesc}} / {{detail.episodeDur}}分钟 > </div>
                </div>
              </div>
              <div class="btns">
                <button class="btnWantWatch">
                  <img src="./images/want.png" alt="">
                  想看</button>
                <button class="btnWatched">
                  <img src="./images/watched.png" alt="">
                  看过</button>
              </div>
            </div>
          </div>
          <!-- 中：实时口碑 -->
          <div v-if="detail.distributions">
            <div class="realTimeWord">
              <div class="top">
                <div class="tLeft">
                  <img src="./images/logo.png" alt="">
                  <span>实时口碑</span>
                </div>
                <div class="tRight" v-if="detail.distributions.length==5">
                  <span>{{detail.wish}}人想看 </span>
                  <span> {{detail.watched}}人看过</span>
                </div>
              </div>
              <!-- 已上映 -->
              <div class="middle" v-if="detail.distributions.length==5">
                <div class="mLeft">
                  <span class="score">{{detail.sc}}</span>
                  <span class="peopleGrade">{{detail.snum}}人评</span>
                </div>
                <div class="mRight" v-if="detail.distributions">
                  <div class="starsPercent" v-for="(score,index) in detail.distributions" :key="index">
                    <div class="stars">
                      <img class="star" src="./images/star.png" alt=""  v-for="(item,index) in bigArr[index]" :key="index">
                    </div>
                    <div class="bar">
                      <div class="percent" :style="{width:score.proportion+'%'}"></div>
                    </div>
                    <div class="percentValue">
                      {{score.proportion}}%
                    </div>
                  </div>
                </div>
              </div>
              <!-- 未上映的情况 -->
              <div class="wish" v-if="detail.distributions.length<5">
                <span class="score">{{detail.wish}}</span>
                <span class="want">人想看</span>
              </div>

              <div class="bottom"  >
                <span v-if="detail.distributions.length==5">NO.1热映口碑榜</span>
                <span v-else>想看人数超越96%的电影</span>
              </div>

              
            </div>
          </div>
          <!-- 活动 -->
          <div class="activity" @click="$router.push('/app')">
            <div class="left">
              <img src="./images/redBag.png" alt="">
              <span>必得 90 元电影券，猛戳 👉</span>
            </div>
            <div class="right">
              <span>前往 App，免费领取 > </span>
            </div>
          </div>
          <!-- 简介 -->
          <div class="introduction">
            <div class="title">
              <span class="left">简介</span>
              <div class="open " @click="zyhToggleOpenClose">
                <span>{{zyhIsOpen ? '展开' : '收起'}}</span>
                <img src="./images/arrow.png" alt="" :style="{transform: zyhIsOpen ? 'rotate(90deg)' : 'rotate(-90deg)'}">
              </div>
            </div>
            <div class="content">
              <p :class="{lineClamp:zyhIsOpen}">{{detail.dra}}</p>
            </div>
          </div>
          <!-- 演职人员 -->
          <div class="actors">
            <div class="title">
              <span class="left">演职人员</span>
              <span class="right">全部 > </span> 
            </div>
            <div class="actorList" ref="actor">
              <ul class="swiperWrapper" v-if="detail.actors">
                <li class="swiperSlide" v-for="(actor,index) in detail.actors" :key="index">
                  <img :src="actor.img" alt="">
                  <span class="name">{{actor.name}}</span>
                  <span class="role">{{actor.role}}</span>
                </li>
              </ul>
            </div>
          </div>
          <!-- 视频剧照 -->
          <div class="videos">
            <div class="title">
              <span class="left">视频剧照</span>
              <span class="right">全部剧照 > </span> 
            </div>
            <div class="videosList" ref="video">
              <ul class="swiperWrapper" v-if="detail.photos">
                <li class="swiperSlide" @click="toVideo">
                  <img class="photo" :src="detail.videoImg" alt="">
                  <img class="videoStop" src="./images/videoStop.png" alt="">
                </li>
                <li class="swiperSlide" v-for="(photo,index) in detail.photos" :key="index">
                  <img  class="photo" :src="photo" alt="">
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- 网友讨论 -->
        <div class="discussion">
          <header>
            <span>讨论</span>
          </header>
          <div class="comments" v-if="detail.comments">
            <div class="comment" v-for="(comment,index) in detail.comments" :key="index">
              <div class="avatar">
                <img :src="comment.avatar" alt="">
              </div>
              <div class="content">
                <div class="top">
                  <div class="nameBox">
                    <span class="name">{{comment.name}}</span>
                    <img :src="comment.vipUrl" alt="">
                  </div>
                  <div class="gradeScore">
                    <span>{{comment.score}}</span>
                  </div>
                </div>
                <div class="middle">
                  <span>{{comment.content}}</span>
                </div>
                <div class="bottom">
                  <div class="time">
                    <span>{{comment.time}}</span>
                  </div>
                  <div class="right">
                    <img src="./images/thumbUp.png" alt="">
                    <span>{{comment.thumbUpNum}}</span>
                    <div class="goToComments">
                      <img src="./images/comment.png" alt="">
                      <span>{{comment.commentsNum}}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer @click="$router.push('/app')">
            打开App，90748人正在讨论
          </footer>
        </div>
      </div>
    </div>
    
     <!-- 底部分享 购票 -->
    <div class="shareBuy">
      <img src="./images/share.png" alt="" @click="IsShare=true">
      <button @click="$router.push(`/movie/${detail.id}`)">特惠购票</button>
    </div>
    <!-- 点击分享遮罩 -->
    <div class="mask" v-show="IsShare" @click="IsShare=false">
      <span>点击下方，分享给好友</span>
      <img src="./images/clickShare.png" alt="">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll'
  import OpenApp from '../../components/Openapp/OpenApp'
  import Open from '../../components/Open/Open'
  import {mapState} from 'vuex'
  import {reqDetail} from '@/api'
  
  export default {
    name: 'm' ,
    props: ['id'],
    components:{
      OpenApp,
      Open
    },
    data(){
      return {
        zyhIsOpen: true, //标识简介内容是否要展开，默认为true，此时是收起状态
        IsShare: false,  //标识是否是分享状态，默认false
        smallArr: [],  //存放星星的小数组
        bigArr: [],  //存放星星数组的大数组，二维数组，
      }
    },
    async mounted(){
      const id = this.id
      await this.$store.dispatch('getDetail', id)

      //全屏竖向滑屏
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.movie, {
          click:true,
          bounce:false  //取消弹簧效果
        })
      }else{
        this.scroll.refresh()
      }

    },
    computed:{
      ...mapState({
        detail: state => state.detail.detail || {}
      }),

      //计算星星个数
      starts(){
        this.detail.distributions.forEach(movieScore => {
          const score = movieScore.movieScoreLevel.slice(0,1) * 1
          for (let index = 0; index < Math.floor(score/2) + 1; index++) {
            this.smallArr.push('star')
          }
          this.bigArr.push(this.smallArr)
          this.smallArr = []
        });
        return this.bigArr
      }
    },
    methods:{
      //切换简介内容展开收起状态的回调
      zyhToggleOpenClose(){
        this.zyhIsOpen = !this.zyhIsOpen
      },
      //跳转到视频播放的链接
      toVideo(){
        // console.log('跳转到视频');
        location.href=`${this.detail.videourl}`
      },

      //初始化横向滑屏
      _initScroll(){
        //演员的横向滑动
        if (!this.actorScroll) {
          this.actorScroll = new BScroll(this.$refs.actor, {
            click:true,
            bounce:false,  //取消弹簧效果
            scrollX:true,  //允许横向滑屏
          })
        }
        //视频剧照的横向滑屏
        if (!this.videoScroll) {
          this.videoScroll = new BScroll(this.$refs.video, {
            click:true,
            bounce:false,  //取消弹簧效果
            scrollX:true,  //允许横向滑屏
          })
        }
      }
    },
    watch:{
      detail(){
        this.$nextTick(()=>{
          this._initScroll()
        })
      },
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#detailContainer
  // background rgb(39, 40, 64)
  .back
    position absolute
    left 8px
    top 70px
    width 10px
    height 10px
    transform rotate(45deg)
    border-left 2px solid #fff
    border-bottom 2px solid #fff
  .movieInfo
    padding 21px 16px
    .movieInfoTop
      width 100%
      height 138px
      display flex
      .movieImg 
        width 100px
        height 138px
        position relative
        .movie
          width 100%
          height 100%
        .stop
          position absolute
          left 0
          bottom 0
          width 30px
          height 30px

      .movieDesc
        width 231px
        height 108px
        margin-left 12px
        .movieDescTop
          font-size 12px
          color rgba(255,255,255,.6)
          line-height 20px
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          .movieCnName
            font-size 20px
            color #fff
            font-weight bold
            line-height 28px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
          .movieEnName
          .movieOtherInfo
            .movieType
              img 
                width 61px
                height 14px
                border-radius 2px
                margin-left 4px
                vertical-align text-bottom
        .btns
          .btnWantWatch
            margin-right 10px
          .btnWantWatch,.btnWatched
            width 110px
            height 30px
            background rgba(255,255,255,.35)
            color #fff
            font-size 14px
            line-height 30px
            text-align center
            vertical-align middle
            border none 
            border-radius 4px
            box-shadow 0 1px 4px rgba(0,0,0,.1)
            img 
              width 14px
              height 14px
              margin-right 2px
              margin-top -2px
              vertical-align middle




    .realTimeWord
      width 100%
      height 178px
      background rgba(0,0,0,.2)
      border-radius 6px
      // box-shadow 0 0 3px 0
      box-shadow 0 0 3px 0 hsla(0,0%,100%,.03)
      margin-top 15px
      padding 10px 12px
      box-sizing border-box
      .top
        display flex
        justify-content space-between
        .tLeft
          img 
            width 14px
            height 14px
            margin-right 4px
            vertical-align middle
          span 
            font-size 12px
            color #fff
            vertical-align middle
        .tRight
          span 
            font-size 10px
            color rgba(255,255,255,.6)
      .middle
        display flex
        justify-content center
        padding 20px 0
        align-items center
        border-bottom 1px solid rgba(255,255,255,.05)
        .mLeft
          display flex
          flex-direction column
          justify-content center
          align-items center
          margin-right 20px
          .score
            font-size 34px
            color #ffb400
            line-height 45px
          .peopleGrade
            font-size 10px
            color rgba(255,255,255,.4)
        .mRight
          width 173px
          height 72px
          .starsPercent
            display flex
            align-items center
            line-height 14px
            .stars
              display flex
              align-items center
              justify-content flex-end
              width 35px
              img 
                width 5px
                height 5px
                margin-left 1px
                opacity 0.4
            .bar
              width 100px
              height 5px
              background rgba(255,255,255,.05)
              border-radius 1px
              margin 0 5px 0 6px
              .percent
                height 100%
                background #ffb400
                border-radius 1px
            .percentValue
              font-size 7px
              color #fff
              opacity .4

      .wish
        display flex
        justify-content center
        padding 20px 0
        align-items center
        border-bottom 1px solid rgba(255,255,255,.05)
        width 319px
        height 72px
        margin auto
        .score
          font-size 30px
          color #ffb400
          line-height 45px
        .want
          font-size 26px
          color #fff
          line-height 45px

      .bottom
        display flex
        justify-content flex-start
        padding-top 15px
        font-size 12px
        color #ffe4a2
      

    .activity
      display flex
      justify-content space-between
      align-items center
      width 100%
      height 22px
      padding 25px 0 13px 0
      border-bottom 1px solid rgba(255,255,255, .1)
      .left
        img 
          width 16px
          height 16px
          margin-right 8px
          vertical-align text-top
        span 
          font-size 15px
          color #fff
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
      .right
        font-size 12px
        color rgba(255,255,255,.6)

            



    .introduction
      width 100%
      padding-top 16px
      box-sizing border-box
      .title
        display flex
        justify-content space-between
        align-items center
        .left
          font-size 15px
          color #fff
        .open
          font-size 12px
          color #fff
          opacity 0.6
          img 
            width 5px
            height 8px
            // transform rotate(90deg)
            margin-left 6px
      .content
        width 100%
        p
          margin 7px 0
          height 128px
          font-size 15px
          color #fff
          line-height 26px
          &.lineClamp
            height 77px
            overflow hidden
            display -webkit-box
            -webkit-box-orient vertical
            -webkit-line-clamp 3

    .actors
      width 100%
      height 180px
      margin 18px 0 15px
      .title
        display flex
        justify-content space-between
        align-items center
        .left
          font-size 15px
          color #fff
        .right
          font-size 12px
          color #fff
          opacity 0.6
      .actorList
        width 100%
        height 147px
        margin-top 11px
        overflow hidden
        .swiperWrapper
          width 1230px
          height 147px
          display flex
          justify-content flex-start
          align-items flex-start
          .swiperSlide
            display flex
            flex-shrink 0
            flex-flow column
            justify-content space-between
            align-items center
            width 82px
            height 147px
            margin-right 6px
            img 
              width 80px
              height 112px
            .name,.role
              font-size 12px
              color #fff
              text-align center
              overflow hidden
              display -webkit-box
              -webkit-box-orient vertical
              -webkit-line-clamp 1
              // overflow hidden
              // text-overflow ellipsis
              // white-space nowrap
            .role
              opacity 0.4

    .videos
      margin-top 18px
      .title
        display flex
        justify-content space-between
        align-items center
        .left
          font-size 15px
          color #fff
        .right
          font-size 12px
          color #fff
          opacity 0.6
      .videosList
        width 100%
        height 132px
        margin-top 11px
        overflow hidden
        .swiperWrapper
          width 3100px
          height 98px
          display flex
          justify-content flex-start
          align-items flex-start
          // overflow-x scroll
          .swiperSlide
            position relative
            display flex
            flex-shrink 0
            flex-flow column
            justify-content center
            align-items center
            width 140px
            height 93px
            margin-right 8px
            .photo 
              width 100%
              height 100%
            .videoStop
              position absolute
              left 50%
              top 50%
              margin -16px 0 0 -16px
              width 32px
              height 32px

  .discussion
    width 100%
    // height 700px
    background #fff
    border-top-left-radius 10px
    border-top-right-radius 10px
    margin-top -12px
    header
      padding 13px 16px 14px
      span
        font-size 15px
        color #333
    .comments
      .comment
        padding 15px
        display flex
        justify-content flex-start
        align-items flex-start
        border-bottom 1px solid #eee
        .avatar img
          width 34px
          height 34px
        .content
          width 100%
          margin-left 11px
          .top
            .nameBox
              .name
                font-size 12px
                color #333
                vertical-align middle
              img 
                width 31px
                height 15px
                vertical-align middle
            .gradeScore
              font-size 11px
              color #999
              line-height 24px
          .middle
            margin-top 5px
            span 
              font-size 15px
              color #333
              line-height 24px
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
              overflow: hidden;
          .bottom
            margin-top 10px
            display flex
            justify-content space-between
            align-items center
            font-size 12px
            color #666
            .right
              display flex
              justify-content flex-start
              align-items center
              img   
                width 10px
                height 10px
              span 
                margin-left 5px
              .goToComments
                width 55px
                height 28px
                margin-left 10px
                border 1px solid #ddd
                // border 1px solid rgba(255,255,255,.3)
                border-radius 14px
                display flex
                justify-content center
                align-items center

    footer
      width 100%
      height 45px
      display flex
      justify-content center
      align-items center
      background #fff
      font-size 15px
      color #f03d37

  .shareBuy
    position fixed
    bottom 0
    left 0
    z-index 2
    display flex
    justify-content flex-start
    align-items center
    width 100%
    height 60px
    background #fff
    box-sizing border-box
    border-top-left-radius 5px
    border-top-right-radius 5px
    
    img 
      width 19px
      height 19px
      margin 0 30px 0 24px
    button
      width 282px
      height 44px
      background linear-gradient(-90deg,#fb3333,#ff5269)
      box-shadow 0 3px 6px 0 rgba(251,51,51,.3)
      border-radius 22px
      border none
      font-size 17px
      color #fff
      text-align center
      line-height 44px
      margin 0 10px

  .mask
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    background rgba(0,0,0,.8)
    z-index 3
    span
      font-size 15px
      color #ffffff
      position fixed
      left 140px
      bottom 65px
    img 
      position fixed
      left 185px
      bottom 10px
      width 28px
      height 34px
      transform rotate(180deg)




</style>
