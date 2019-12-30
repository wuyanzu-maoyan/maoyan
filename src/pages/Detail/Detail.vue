<template>
  <div id="detailContainer">
    <div ref="movie" style="height: 607px">
      <div class="movieScroll">
        <OpenApp/>
        <!-- 电影基本信息 -->
        <div class="movieInfo">
          <!-- 头部电影详细信息 -->
          <div class="movieInfoTop">
            <div class="movieImg">
              <img class="movie" src="../CinemaDetail/images/yewen.jpg" alt="">
              <img class="stop" src="./images/stop.png" alt="">
            </div>
            <div class="movieDesc">
              <div class="movieDescTop">
                <p class="movieCnName">叶问4：完结篇</p>
                <p class="movieEnName">葉問4</p>
                <div class="movieOtherInfo">
                  <div class="movieType">
                    <span>动作 / 剧情 / 传记</span>
                    <img src="./images/movieTag.png" alt="">
                  </div>
                  <div class="movieActors">甄子丹 / 吴樾 / 吴建豪</div>
                  <div class="movieShowTime">2019-12-20大陆上映 / 107分钟 > </div>
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
          <div class="realTimeWord">
            <div class="top">
              <div class="tLeft">
                <img src="./images/logo.png" alt="">
                <span>实时口碑</span>
              </div>
              <div class="tRight">
                <span>296854人想看 </span>
                <span> 295254人看过</span>
              </div>
            </div>
            <div class="middle">
              <div class="mLeft">
                <span class="score">9.5</span>
                <span class="peopleGrade">156863人评</span>
              </div>
              <div class="mRight">
                <div class="starsPercent">
                  <div class="starts">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                  </div>
                  <div class="bar">
                    <div class="percent" style="width: 87%"></div>
                  </div>
                  <div class="percentValue">87%</div>
                </div>
                <div class="starsPercent">
                  <div class="starts">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                  </div>
                  <div class="bar">
                    <div class="percent" style="width: 9%"></div>
                  </div>
                  <div class="percentValue">9%</div>
                </div>
                <div class="starsPercent">
                  <div class="starts">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                  </div>
                  <div class="bar">
                    <div class="percent" style="width: 2%"></div>
                  </div>
                  <div class="percentValue">2%</div>
                </div>
                <div class="starsPercent">
                  <div class="starts">
                    <img src="./images/star.png" alt="">
                    <img src="./images/star.png" alt="">
                  </div>
                  <div class="bar">
                    <div class="percent" style="width: 0.5%"></div>
                  </div>
                  <div class="percentValue">0.5%</div>
                </div>
                <div class="starsPercent">
                  <div class="starts">
                    <img src="./images/star.png" alt="">
                  </div>
                  <div class="bar">
                    <div class="percent" style="width: 1.5%"></div>
                  </div>
                  <div class="percentValue">1.5%</div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <span>NO.1热映口碑榜</span>
            </div>
          </div>
          <!-- 活动 -->
          <div class="activity">
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
              <p :class="{lineClamp:zyhIsOpen}">因故来到美国唐人街的叶问（甄子丹 饰），意外卷入一场当地军方势力与华人武馆的纠纷，面对日益猖狂的民族歧视与压迫，叶问挺身而出，在美国海军陆战队军营拼死一战，以正宗咏春，向世界证明了中国功夫。</p>
            </div>
          </div>
          <!-- 演职人员 -->
          <div class="actors">
            <div class="title">
              <span class="left">演职人员</span>
              <span class="right">全部 > </span> 
            </div>
            <div class="actorList">
              <ul class="swiperWrapper">
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">导演</span>
                </li>
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">饰 叶问</span>
                </li>
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">饰 叶问</span>
                </li>
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">饰 叶问</span>
                </li>
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">饰 叶问</span>
                </li>
                <li class="swiperSlide">
                  <img src="./images/actor.png" alt="">
                  <span class="name">甄子丹</span>
                  <span class="role">饰 叶问</span>
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
            <div class="videosList">
              <ul class="swiperWrapper">
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
                </li>
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
                </li>
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
                </li>
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
                </li>
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
                </li>
                <li class="swiperSlide">
                  <img src="./images/videoImg.png" alt="">
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
          <div class="comments">
            <div class="comment">
              <div class="avatar">
                <img src="./images/avatar.png" alt="">
              </div>
              <div class="content">
                <div class="top">
                  <div class="nameBox">
                    <span class="name">中东西南北</span>
                    <img src="./images/vipLevel.png" alt="">
                  </div>
                  <div class="gradeScore">
                    <span>给这部电影打了8分</span>
                  </div>
                </div>
                <div class="middle">
                  <span>
                    之前很担心这个系列烂尾，但看完觉得足够给观众交差了。单说武打呈现，绝对不辱没这个系列的水准。至于剧情，压根不去纠结，这个系列的情节都是编的，看点也不在这儿。所以无所谓，逻辑合理就行。8分的电影，多1分赠给这个团队十年的付出。
                  </span>
                </div>
                <div class="bottom">
                  <div class="time">
                    <span>12-20</span>
                  </div>
                  <div class="right">
                    <img src="./images/thumbUp.png" alt="">
                    <span>9826</span>
                    <div class="goToComments">
                      <img src="./images/comment.png" alt="">
                      <span>496</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="avatar">
                <img src="./images/avatar.png" alt="">
              </div>
              <div class="content">
                <div class="top">
                  <div class="nameBox">
                    <span class="name">中东西南北</span>
                    <img src="./images/vipLevel.png" alt="">
                  </div>
                  <div class="gradeScore">
                    <span>给这部电影打了8分</span>
                  </div>
                </div>
                <div class="middle">
                  <span>
                    之前很担心这个系列烂尾，但看完觉得足够给观众交差了。单说武打呈现，绝对不辱没这个系列的水准。至于剧情，压根不去纠结，这个系列的情节都是编的，看点也不在这儿。所以无所谓，逻辑合理就行。8分的电影，多1分赠给这个团队十年的付出。
                  </span>
                </div>
                <div class="bottom">
                  <div class="time">
                    <span>12-20</span>
                  </div>
                  <div class="right">
                    <img src="./images/thumbUp.png" alt="">
                    <span>9826</span>
                    <div class="goToComments">
                      <img src="./images/comment.png" alt="">
                      <span>496</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment">
              <div class="avatar">
                <img src="./images/avatar.png" alt="">
              </div>
              <div class="content">
                <div class="top">
                  <div class="nameBox">
                    <span class="name">中东西南北</span>
                    <img src="./images/vipLevel.png" alt="">
                  </div>
                  <div class="gradeScore">
                    <span>给这部电影打了8分</span>
                  </div>
                </div>
                <div class="middle">
                  <span>
                    之前很担心这个系列烂尾，但看完觉得足够给观众交差了。单说武打呈现，绝对不辱没这个系列的水准。至于剧情，压根不去纠结，这个系列的情节都是编的，看点也不在这儿。所以无所谓，逻辑合理就行。8分的电影，多1分赠给这个团队十年的付出。
                  </span>
                </div>
                <div class="bottom">
                  <div class="time">
                    <span>12-20</span>
                  </div>
                  <div class="right">
                    <img src="./images/thumbUp.png" alt="">
                    <span>9826</span>
                    <div class="goToComments">
                      <img src="./images/comment.png" alt="">
                      <span>496</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer>
            打开App，90748人正在讨论
          </footer>
        </div>
      </div>
    </div>
    
    <!-- 底部分享 购票 -->
    <div class="shareBuy">
      <img src="./images/share.png" alt="">
      <button>特惠购票</button>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import OpenApp from '../../components/OpenApp/OpenApp'
  
  export default {
    components:{
      OpenApp
    },
    data(){
      return {
        zyhIsOpen: true, //标识简介内容是否要展开，默认为true，此时是收起状态
      }
    },
    methods:{
      zyhToggleOpenClose(){
        this.zyhIsOpen = !this.zyhIsOpen
      }
    },
    mounted(){
      if (!this.scroll) {
        this.scroll = new BScroll(this.$refs.movie, {
          click:true,
          bounce:false
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

#detailContainer
  background rgb(39, 40, 64)
  .movieInfo
    // margin-top 64px
    background rgb(39, 40, 64)
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
            .starts
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
        margin-top 11px
        overflow hidden
        .swiperWrapper
          display flex
          justify-content flex-start
          align-items flex-start
          overflow-x scroll
          .swiperSlide
            display flex
            flex-shrink 0
            flex-flow column
            justify-content center
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
              text-overflow ellipsis
              white-space nowrap
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
        margin-top 11px
        overflow hidden
        .swiperWrapper
          display flex
          justify-content flex-start
          align-items flex-start
          overflow-x scroll
          .swiperSlide
            display flex
            flex-shrink 0
            flex-flow column
            justify-content center
            align-items center
            width 140px
            height 93px
            margin-right 8px
            img 
              width 100%
              height 100%

  
  .discussion
    width 100%
    height 700px
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
    // padding 10px 
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



</style>
