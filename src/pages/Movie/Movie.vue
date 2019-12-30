<template>
  <div>
    <open/>
  <div class="lyhParticulars">
      <div class="lyhShade"></div>
      <div class="backgroundImg"></div>
      <div class="lyhContentt">
        <img src="./img/1.jpg">
        <div class="lyhDetails">
          <h2>叶问4:完结版</h2>
          <div>yewen</div>
          <div class="lyhGrade">9.5<p>(30.2万人ping)</p></div><br>
          <span>爱情,动作,大片</span><br>
          <div>中国大陆/107分钟</div>
          <div class="riqi">2019-12-20大陆上映</div>
        </div>
        <span>></span>
      </div>
    </div>
    <div class="lyhTime">
      <ul >
        <li v-for="(item,index) in items" :key="index">今天12月30日</li>
        <li>今天12月30日</li>
        <li>今天12月30日</li>
      </ul>
    </div>
    <div class="kjcSearchType">
        <div class="kjcAllCity">
          <span>全城</span>
          <i></i>
        </div>
        <div class="kjcBrand">
          <span>品牌</span>
          <i></i>
        </div>
        <div class="kjcChar">
          <span>特色</span>
          <i></i>
        </div>
      </div>
      <Theatercomponent></Theatercomponent>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import open from '../../components/Openapp/Openapp'
  import Theatercomponent from './Theater component/Theater component.vue'
  export default {
    data(){
      return {
        items:3
      }
    },
    components:{
      open,
      Theatercomponent
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  
  .lyhParticulars
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
      background-image url("./img/1.jpg")
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
    overflow-x: scroll;
    background-color: #fff
    overflow: scroll
    ul
      overflow-x: scroll;
      padding: 0;
      margin: 0;
      height: 45px;
      white-space: nowrap;
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
  .kjcSearchType
      position relative
      z-index 11
      display flex
      div
        height 40px
        width 33.33333%
        bottom-border-1px(#e8e8e8)
        display flex
        align-items center
        background-color white
        i
          display inline-block
          border 4px solid #b0b0b0
          border-left-color transparent
          border-right-color transparent
          border-bottom-color transparent
          margin-bottom -4px
          margin-left 4px
        span 
          font-size 13px
          color #777
          margin-left  42px
      .kjcBrand:before
        content:''
        display block
        position absolute 
        top 10px
        left 0
        height 20px
        color #e8e8e8
        border-left 1px solid #e8e8e8 
      .kjcChar:before
        content:''
        display block
        position absolute 
        top 10px
        left 0
        height 20px
        color #e8e8e8
        border-left 1px solid #e8e8e8 
</style>
