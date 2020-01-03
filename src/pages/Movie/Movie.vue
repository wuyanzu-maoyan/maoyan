<template>
  <div>
    <open/>
    <Particulars/>
    
    <div class="kjcSearchType">
      <div class="kjcAllCity" @click="toggleShow(0)"> 
        <span :class="{kjcRed:isShowType == 0 || (allCityName && isShowType === 0)}">{{allCityName || '全城'}}</span>
        <i :class="{kjcRed:isShowType == 0 || (allCityName && isShowType === 0)}"></i>
      </div>
      <div class="kjcBrand" @click="toggleShow(1)">
        <span :class="{kjcRed:isShowType == 1 || (brandName && isShowType === 1)}">{{brandName || '品牌'}}</span>
        <i :class="{kjcRed:isShowType == 1 || (brandName && isShowType === 1)}"></i>
      </div>
      <div class="kjcChar" @click="toggleShow(2)" >
        <span :class="{kjcRed:isRed}">特色</span>
        <i :class="{kjcRed:isRed}"></i>
      </div>
    </div>
    <div class="kjcSearchTypeDetail">
      <div class="kjcAllCityWrap" v-if="isShowType === 0">
        <div class="kjcAllCityContentHeader">
          <span class="kjcAllCityContentHeaderLeft" :class="{active:!isSubway}" @click="checkSubway(false)">商区</span>
          <span class="kjcAllCityContentHeaderRight" :class="{active:isSubway}" @click="checkSubway(true)">地铁站</span>
        </div>
        <CinemaSearchType v-if="isShowType === 0" :district="district" :subway="subway"></CinemaSearchType>
      </div>
      <CinemaSearchBrand v-if="isShowType === 1"></CinemaSearchBrand>
      <CinemaSearchChar v-if="isShowType === 2"></CinemaSearchChar>
    </div>
    <div class="kjcMask" v-if="isShowType !== -1" @click="closeMask()"></div>
    <div class="kjcScrollContainer" ref="scrollContainer">
      <div class="kjcSrcollContent" v-if="isFirst">
        <CinemaItem   v-for="(cinema,index) in cinemaListOrigin" :key="cinema.id" :cinema="cinema"></CinemaItem>
      </div>
      <div class="kjcSrcollContent" v-else-if="cinemaList.length || !isFirst">
      <CinemaItem   v-for="(cinema,index) in cinemaList" :key="cinema.id" :cinema="cinema"></CinemaItem>
      </div>
    </div>
  </div>
  
</template>

<script type="text/ecmascript-6">
  import {reqNowMoives} from '../../api/index'
  import { reqDetail } from "../../api/index";
  import CinemaItem from '../../components/CinemaItem/CinemaItem';
  import CinemaSearchType from '../../components/CinemaSearchType/CinemaSearchType'
  import CinemaSearchBrand from '../../components/CinemaSearchBrand/CinemaSearchBrand'
  import CinemaSearchChar from '../../components/CinemaSearchChar/CinemaSearchChar'
  import Particulars from './Particulars/Particulars'
  import {SET_ISSUBWAY,SAVE_TYPE_OBJ} from '@/vuex/mutation-types.js'
  import open from '../../components/Openapp/OpenApp'
  import BScroll from "better-scroll";
  import {mapState} from 'vuex'
  
  export default {
    data(){
      return{
        isShowType:-1, //0全城 1品牌 2特色
        allCityName:'', //搜索全城的条件名字
        brandName:'',//搜索品牌的条件名字
        tagName: '', //搜索标签 可改签/可退票的条件名字
        hallTypeName:'', //搜索特殊厅的条件名字
        movieInfo:{}
      }
    },
    components:{
      CinemaItem,
      CinemaSearchType,
      CinemaSearchBrand,
      CinemaSearchChar,
      open,
      Particulars
    },
    computed:{
      ...mapState({
        cinemaListOrigin: state => state.cinema.cinemaListOrigin || [],
        cinemaList: state => state.cinema.cinemaList || [],
        isSubway: state => state.cinema.isSubway,
        district: state => state.cinema.filterCinemas.district || {},
        subway: state => state.cinema.filterCinemas.subway || {},
        isFirst: state => state.cinema.isFirst
      }),
      isRed(){
        //计算特色什么时候是红色
        if((this.tagName && this.isShowType == -1)||( this.hallTypeName && this.isShowType == -1)){
          return true
        }else if(this.isShowType == 2){
          return true
        }else{
          return false
        }
      
      }

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
            let isShowType = this.isShowType
            if(isShowType !== type){
              this.isShowType = type

            }else{
              this.isShowType = -1
            }
              if(isShowType == 0){
                this.$store.commit(SET_ISSUBWAY,false)
              }
              
             
      },
      checkSubway(type){
        this.$store.commit(SET_ISSUBWAY,type)
      },
      closeMask(){
        this.isShowType = -1
       
      },
    },
    async mounted(){
      this.$globalEventBus.$on('getSearchCondition',(obj)=>{

            if(this.isShowType !== 2){
              this.isShowType = -1
            }
            if(obj.key === 'addr'){
              this.allCityName = obj.value
            }else if(obj.key === 'brand'){
              this.brandName = obj.value
            }else if(obj.key === 'tag'){
              this.tagName = obj.value
            }else if(obj.key === 'hallType'){
              this.hallTypeName = obj.value
            }
             this.$store.commit(SAVE_TYPE_OBJ,obj)
             this.$store.dispatch('getSearchContent')
           
      })
      this.$store.dispatch('getCinemaListOrigin');

      //在挂载时判断如果有值 相当于缓存(切换到其他路由 没有销毁 就重新初始化scroll
      if(this.cinemaListOrigin.length){
        this.initScroll()
      }
      this.$globalEventBus.$on('changeIsShowType',(value)=>{
          this.isShowType = value
      })
      this.$store.dispatch('getFilterCinemas')
      const result = await reqDetail();
      console.log(result);
      if(result.code===0){
        this.movieInfo = result.data[0];
      };
    },
    watch:{
      //监视电影院列表的值
      cinemaListOrigin(){
        //如果他的值有变化就调用 说明请求回来值
        //就初始化scroll
        this.$nextTick(()=>{
          this.initScroll();
        })
      
      },
      cinemaList(){
        this.$nextTick(()=>{
          this.initScroll();
        })
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kjcSearchTypeDetail
      width 100%
      position absolute
      z-index 21
      background-color rgba(255,255,255,1)
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
            box-sizing border-box
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
          margin-right 5px
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
          white-space nowrap
          overflow hidden 
          text-overflow ellipsis 
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
