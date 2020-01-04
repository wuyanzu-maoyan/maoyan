<template>
  <div>
    <div class="lyhParticulars" v-if="movieInfo">
      <div class="lyhShade"></div>
        <div class="backgroundImg" :style="{backgroundImage:`url(${movieInfo.albumImg})`}"></div>
          <div class="lyhContentt" >
        <img :src="movieInfo.img">
        <div class="lyhDetails">
          <h2>{{movieInfo.nm}}</h2>
          <div>{{movieInfo.enm}}</div>
          <div class="lyhGrade">{{movieInfo.sc}}<p>(30.2万人ping)</p></div><br>
          <span>{{movieInfo.cat}}</span><br>
          <div>{{movieInfo.src}}/{{movieInfo.episodeDur}}分钟</div>
          <div class="riqi">{{movieInfo.pubDesc}}</div>
        </div>
        <span @click="toCinemaDetail">></span>
      </div>
  </div>
  <!-- <div class="lyhParticulars" v-else>
      <div class="lyhShade"></div>
        <div class="backgroundImg"  :style="{backgroundImage:`url("http://p1.meituan.net/moviemachine/86cf790dc2e0a280c0c3fbf8f4502acc70103.gif")`}"></div>
          <div class="lyhContentt" >
        <img src="http://p1.meituan.net/moviemachine/86cf790dc2e0a280c0c3fbf8f4502acc70103.gif">
        <div class="lyhDetails">
          <h2>叶问4：完结篇</h2>
          <div>葉問4</div>
          <div class="lyhGrade">{{movieInfo.sc}}<p>(30.2万人ping)</p></div><br>
          <span>动作/剧情/传记</span><br>
          <div>中国大陆/107分钟</div>
          <div class="riqi">2019-12-20大陆上映</div>
        </div>
        <span @click="toCinemaDetail">></span>
    </div>
   </div>
   -->
   </div>
</template>

<script type="text/ecmascript-6">
  import { reqDetail } from "../../../api/index";
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        movieInfo:{ 
          albumImg: "http://p1.meituan.net/moviemachine/86cf790dc2e0a280c0c3fbf8f4502acc70103.gif",
          availableEpisodes: 0,
          awardUrl: "",
          backgroundColor: "#272840",
          bingeWatch: 7357,
          bingeWatchst: 0,
          cat: "动作/剧情/传记",
          movieTag:"//s0.meituan.net/bs/?f=myfe/canary:/asgard/images/movie/movie-tag-CGS.png",
          comScorePersona: true,
          commented: false,
          dra: "因故来到美国唐人街的叶问（甄子丹 饰），意外卷入一场当地军方势力与华人武馆的纠纷，面对日益猖狂的民族歧视与压迫，叶问挺身而出，在美国海军陆战队军营拼死一战，以正宗咏春，向世界证明了中国功夫。",
          dur: 107,
          egg: false,
          enm: "葉問4",
          episodeDur: 107,
          episodes: 0,
          globalReleased: true,
          id: 1190122,
          img: "http://p0.meituan.net/128.180/movie/a3d6ca3bdd5b0ddd7016acff9a9f2f2e2805813.jpg",
          latestEpisode: 0,
          modcsSt: false,
          movieType: 0,
          multiPub: false,
          musicName: "咏春 ",
          musicNum: 1,
          musicStar: "李宇春",
          nm: "叶问4：完结篇",
          onSale: true,
          onlinePlay: false,
          orderSt: 0,
          oriLang: "粤语,英语",
          pn: 202,
          preScorePersona: false,
          proScore: 0,
          proScoreNum: 1,
          pubDesc: "2019-12-20大陆上映",
          rt: "2019-12-20",
          sc: 9.5,
          scm: "",
          scoreLabel: "猫眼购票评分",
          showst: 3,
          snum: 340588,
          src: "中国大陆",
          star: "甄子丹/吴樾/吴建豪",
          type: 0,
          vd: "http://maoyan.meituan.net/movie/videos/854x480a573780921e84d7f97c1b47e6b4a2d1b.mp4",
          ver: "2D/中国巨幕/全景声/4DX",
          videoImg: "http://p0.meituan.net/movie/dc5c4148030ebb718bef2144ccdce48e399568.jpg@640w_360h_1e_1c",
          videoName: "评书版预告片 叶问咏春名扬天下",
          videourl: "http://maoyan.meituan.net/movie/videos/854x480a573780921e84d7f97c1b47e6b4a2d1b.mp4",
          viewedSt: 0,
          vnum: 17,
          vodFreeSt: 0,
          vodPlay: false,
          vodSt: 0,
          watched: 311426,
          wish: 295118,
          wishst: 0,
          version: ""
         }
      }
    },
     async mounted() {
      const result = await reqDetail();
      if(result.code===0){
        let obj = result.data.find((item,index)=>{
           return item.id == this.$route.params.id
        })
        if(obj){
          this.movieInfo = obj
        }
        
      };
     },
     methods: {
       toCinemaDetail(){
         let id = this.movieInfo.id;
         console.log(id)
         if(id){
           this.$router.push('/detail/'+id);

         }else{
           this.$router.push('/detail/1190122')
         }

         
       }
     },

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .lyhParticulars
    z-index 20
    height 188px
    position relative
    cursor pointer
    .lyhShade
      position absolute
      width 100%
      height 100%
      background-color #333
      z-index -1
      opacity .8
      display #333
    .backgroundImg
      position absolute
      width 100%
      height 100%
      z-index -2
      overflow hidden
      background-image url("../img/1.jpg")
    .lyhContentt
      height 150px
      padding 19px 30px 19px 15px
      display flex
      img 
        width 110px
        height 150px
        box-sizing border-box
      .lyhDetails
        width 260px
        color #fff
        overflow-x: hidden
        margin-left: 10px;
        line-height: 1;
        h2
          font-size 20px
          margin-top 2px
          font-weight 700
          overflow hidden
        div
          
          margin-top 10px
          font-size: 12px;
          opacity: .8;
        .lyhGrade
          display flex
          font-size: 18px;
          font-weight: 700;
          color: #fc0;
          margin-top: 11px;
          p
            margin-top: 3px;
            margin-left: 5px;
            font-size: 12px;
            color: #fff;
            opacity: .8;
        span 
          width 180px 
          margin-top 10px
          font-size: 12px;
          opacity: .8;
      >span
        position absolute
        right 8px
        color #fff
        font-size 30px
        line-height 150px
</style>
