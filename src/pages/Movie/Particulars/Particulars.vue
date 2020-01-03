<template>
  <div>
    <div class="lyhParticulars">
      <div class="lyhShade"></div>
      <div class="backgroundImg"></div>
      <div class="lyhContentt">
        <img :src="movieInfo.img">
        <div class="lyhDetails">
          <h2>叶问4:完结版</h2>
          <div>{{movieInfo.enm}}</div>
          <div class="lyhGrade">9.5<p>(30.2万人ping)</p></div><br>
          <span>{{movieInfo.cat}}</span><br>
          <div>中国大陆/107分钟</div>
          <div class="riqi">2019-12-20大陆上映</div>
        </div>
        <span>></span>
      </div>
    </div>
    <div class="lyhTime">
      <ul >
        <li>今天12月30日</li>
        <li>今天12月30日</li>
        <li>今天12月30日</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { reqDetail } from "../../../api/index";
  export default {
    data() {
      return {
        movieInfo:{}
      }
    },
     async mounted() {
      const result = await reqDetail();
      console.log(result);
      if(result.code===0){
        this.movieInfo = result.data[0];
      };
     }
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
      display block
    .backgroundImg
      position absolute
      width 100%
      height 100%
      z-index -1
      overflow hidden
      background-size cover
      background-repeat no-repeat
      background-image url("../img/1.jpg")
      opacity .55
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
  .lyhTime
    width: 100%;
    height: 45px;
    background-color: #fff
    position relative
    z-index 100
    vertical-align: baseline;
    ul
      padding: 0;
      margin: 0;
      height: 45px;
      white-space: nowrap;  
      float left
      li
        position: relative;
        display: inline-block;
        width: 115px;
        line-height: 45px;
        margin-left: 4.5px;
        font-size: 14px;
        text-align: center;
        list-style: none;
        color: #666;
</style>
