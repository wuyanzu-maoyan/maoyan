<template>
  <div class="kjcCinemaContainer">
      <div class="kjcTopbar">
      <div class="kjcLocation">
        <span>北京</span>
        <i></i>
      </div>
      <div class="kjcSearchCinema">
        <i class="iconfont icon-search"></i>
        <span>搜影院</span>
      </div>
     </div>
    <div class="kjcHeaderLine" v-show="isShowAllCity || isShowBrand || isShowChar"></div>
    <div class="kjcSearchType">
      <div class="kjcAllCity" @click="toggleShow(0)"> 
        <span :class="{kjcRed:isShowAllCity}">全城</span>
        <i :class="{kjcRed:isShowAllCity}"></i>
      </div>
      <div class="kjcBrand" @click="toggleShow(1)">
        <span :class="{kjcRed:isShowBrand}">品牌</span>
        <i :class="{kjcRed:isShowBrand}"></i>
      </div>
      <div class="kjcChar" @click="toggleShow(2)" >
        <span :class="{kjcRed:isShowChar}">特色</span>
        <i :class="{kjcRed:isShowChar}"></i>
      </div>
    </div>
    <div class="kjcSearchTypeDetail" v-if="isShowSearchType">
      <div class="kjcAllCityWrap">
        <div class="kjcAllCityContentHeader">
          <span class="kjcAllCityContentHeaderLeft" :class="{active:!isSubway}" @click="isSubway = false">商区</span>
          <span class="kjcAllCityContentHeaderRight" :class="{active:isSubway}" @click="isSubway = true">地铁站</span>
        </div>
        <CinemaSearchType></CinemaSearchType>
      </div>
    </div>
    <div class="kjcMask"></div>
    <div class="kjcScrollContainer" ref="scrollContainer">
      <div class="kjcSrcollContent">
        <CinemaItem ref="cinemaItem" v-for="(cinema,index) in cinemaList" :key="cinema.id" :cinema="cinema"></CinemaItem>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import CinemaItem from '../../components/CinemaItem/CinemaItem';
  import CinemaSearchType from '../../components/CinemaSearchType/CinemaSearchType'
  import BScroll from "better-scroll";
  import {mapState} from 'vuex'
  import {reqCinemaList,reqFilterCinemas} from '@/api';
  
  export default {
    data(){
      return{
        isShowAllCity:false,  //是否选择全城
        isShowBrand:false,  //是否选择品牌
        isShowChar:false, //是否选择特色
        isShowSearchType:true, //是否展示搜索类型
        isSubway:false //是 按地铁查看/ 否 按商区查看
      }
    },
    components:{
      CinemaItem,
      CinemaSearchType
    },
    computed:{
      ...mapState({
        cinemaList: state => state.cinema.cinemaList || [],
      })
    },
    methods:{
      initScroll(){
        if(!this.cinemaScroll){
        this.cinemaScroll = new BScroll('.kjcScrollContainer',{
          click:true
          })
        }else{
         this.cinemaScroll.refresh()
       }
      },
      toggleShow(type){
                  /* 0 全城 1品牌 2特色  */
          let isShowAllCity = !this.isShowAllCity
          let isShowBrand = !this.isShowBrand
          let isShowChar = !this.isShowChar
        if(type == 0){
          this.isShowAllCity = isShowAllCity
          this.isShowBrand = false;
          this.isShowChar = false;
        }else if(type == 1){
          this.isShowAllCity = false
          this.isShowBrand = isShowBrand;
          this.isShowChar = false;
        }else{
          this.isShowAllCity = false
          this.isShowBrand = false;
          this.isShowChar = isShowChar;
        }
      }
    },
    mounted(){
      this.$store.dispatch('getCinemaList');
      //在挂载时判断如果有值 相当于缓存(切换到其他路由 没有销毁 就重新初始化scroll
      if(this.cinemaList.length){
        this.initScroll()
      }
    },
    watch:{
      //监视电影院列表的值
      cinemaList(){
        //如果他的值有变化就调用 说明请求回来值
        //就初始化scroll
        this.initScroll();
      
      }
    }
    
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .kjcCinemaContainer
    width 100%
    height 100%
    position relative
    .kjcMask
      position absolute 
      top -50px
      left 0
      right 0
      bottom -48px
      background-color rgba(0,0,0,0.3)
      z-index 20
      display none
    .kjcHeaderLine
      position absolute
      height 2px
      width 100%
      background-color #777
      top 48px
      left 0px
      z-index 21
    .kjcSearchTypeDetail
      width 100%
      height 444px
      position absolute
      z-index 21
      background-color white
      .kjcAllCityWrap
        width 100%
        height 100%
        .kjcAllCityContentHeader
          width 95%
          height 44px
          display flex
          span
            width 50%
            height 100%
            text-align center
            line-height 44px
            font-size 15px
            color rgb(119,119,119)
            margin-right 10px
            &.active
              border-bottom 2px solid #f03d37
          .kjcAllCityContentHeaderRight
            font-size 15px
          .kjcAllCityContentHeaderLeft
            font-size 15px
    .kjcTopbar
      position relative
      z-index 10
      width 100%
      height 48px
      display flex
      align-items center
      background-color #f5f5f5
      z-index 21
      .kjcLocation
        padding-left 15px
        height 20px
        span 
          font-size 15px
          color #666
          line-height 20px
        i 
          display inline-block
          border 4px solid #b0b0b0
          border-left-color transparent
          border-right-color transparent
          border-bottom-color transparent
          margin-bottom -2px
          margin-left 4px
      .kjcSearchCinema
        margin-left 20px;
        margin-right 15px;
        width 280px
        height 29px
        background-color white
        display flex
        align-items center
        border 0.5px solid #e6e6e6
        border-radius 5px
        box-sizing border-box
        span 
          font-size 13px
          color #b2b2b2;
          margin-left 3px;
        i
          font-size 14px
          color #b2b2b2;
          margin-left 115px
          font-weight bold
    .kjcSearchType
      position relative
      z-index 21
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
          &.kjcRed
            border 4px solid #e54847
            border-left-color transparent
            border-right-color transparent
            border-top-color transparent
            margin-top -6px
        span 
          font-size 13px
          color #777
          margin-left  42px
          &.kjcRed
            color #e54847
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
    .kjcScrollContainer
      width 100%
      height calc(100vh - 188px)


</style>
