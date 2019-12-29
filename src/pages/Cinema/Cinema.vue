<template>
  <div class="kjcCinemaContainer">
    <div class="kcjTopbar">
      <div class="kjcLocation">
        <span>北京</span>
        <i></i>
      </div>
      <div class="kjcSearchCinema">
        <i class="iconfont icon-search"></i>
        <span>搜影院</span>
      </div>
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
      <div class="kjcScrollContainer" ref="scrollContainer">
       <div class="kjcSrcollContent">
          <CinemaItem ref="cinemaItem" v-for="(cinema,index) in cinemaList" :key="cinema.id" :cinema="cinema"></CinemaItem>
       </div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CinemaItem from '../../components/CinemaItem/CinemaItem';
  import BScroll from "better-scroll";
  import {reqCinemaList} from '@/api'
  export default {
    data(){
      return{
        cinemaList:[]
      }
    },
    components:{
      CinemaItem
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
      }
    },
    async mounted(){
    
      let result = await reqCinemaList()
      const {code,data} = result;
      if(code === 0){
        console.log(data)
        this.cinemaList = data.cinemas
      }
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
    .kcjTopbar
      position relative
      z-index 10
      width 100%
      height 48px
      display flex
      align-items center
      background-color #f5f5f5
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
    .kjcScrollContainer
      width 100%
      height calc(100vh - 188px)


</style>
