<template>
  <div class="kjcCinemaContainer">
      <div class="kjcTopbar">
      <div class="kjcLocation" v-if="recently0City.length" @click="$router.push('/city')">
        <span>{{recentlyCity[0].name || 北京}}</span>
        <i></i>
      </div>
      <div class="kjcSearchCinema" @click="$router.push(`/search/${true}`)">
        <i class="iconfont icon-search"></i>
        <span>搜影院</span>
      </div>
     </div>
    <div class="kjcHeaderLine" v-show="isShowType === 0 || isShowType === 1 || isShowType === 2"></div>
    <div class="kjcSearchType">
      <div class="kjcAllCity" @click="toggleShow(0)"> 
        <span :class="{kjcRed:isShowType == 0 || (allCityName && isShowType === 0)}">{{allCityName || locationName || '全城'}}</span>
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
      <div class="kjcAllCityWrap" v-show="isShowType === 0">
        <div class="kjcAllCityContentHeader">
          <span class="kjcAllCityContentHeaderLeft" :class="{active:!isSubway}" @click="checkSubway(false)">商区</span>
          <span class="kjcAllCityContentHeaderRight" :class="{active:isSubway}" @click="checkSubway(true)">地铁站</span>
        </div>
        <CinemaSearchType ref="CinemaSearchType" v-show="isShowType === 0" :district="district" :subway="subway"></CinemaSearchType>
      </div>
      <CinemaSearchBrand v-if="isShowType === 1"></CinemaSearchBrand>
      <CinemaSearchChar v-if="isShowType === 2"></CinemaSearchChar>
    </div>
    <div class="kjcMask" v-if="isShowType !== -1" @click="closeMask()"></div>
    <div class="kjcScrollWrap" ref="scrollContainer">
      <div class="kjcSrcollContent"  v-if="isFirst && !cinemaList.length">
        <CinemaItem v-for="(cinema,index) in cinemaListOrigin" :key="cinema.id" :cinema="cinema"></CinemaItem>
      </div>
      <div class="kjcSrcollContent"  v-else-if="cinemaList.length || !isFirst">
      <CinemaItem  v-for="(cinema,index) in cinemaList" :key="cinema.id" :cinema="cinema"></CinemaItem>
      </div>
    </div>
    <div class="kjcNoFind" v-if="!cinemaList.length && !isFirst">
        <img src="../../static/images/wjCat.png" alt="">
        <p>暂无符合条件的影院</p>
    </div>
    <div class="kjcNoLocation" v-show="isShowLocation">
      <img class="kjcFirstImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACI0lEQVRoQ+2Z4VHDMAxGlQ3KBLABMAFsUDYAJkCdAJgAbQBswAbABLABMAFsYE53Mee2VmLZsZXekT/c0TT2iz8/y24HO351O95/+AdoNYKIuOi67tw5d0xEF77d2Y8AIh4AwDUAnAHAAgAuiehh9gCr1WrpnEMAOA1G+YuIGOjvmtUIBDHhjq91tO/xLRHdzA4gEhNpau0R0c9sAISYSJ1/DCev2RxIiIkEwPZ53/yw2RxQxCQG8EpE4WRuN4mVMZHe/po6q8+BgpjEALbUWQ2gMCbS299S5+QAE8UkWZ2TAEwcE5U6iwAqxUSlziyAyjFRqTMZoFFM1OocBWgcE7U6RQCDmGSpc3AE+rfPpSwv3Ud9WXsotVTp/1tVp9ROci2EiAzjgRiOIfcrAESrzmKA2AN4kvdQHoz/nhRCRavOKgDSQ4MY8u5JAyRWnU0BfGOIyKcH94oREatOKwCO1FsiwGDVaQLAjSKiSwQYrDotAXgbmKLhZHWOrsSJbyzpNkR8AoDlyM0qdbYGYBPxydrQpVJnawBe9J4Heq9WZ2sAXrE/BgDU6mwKMGKiLHVaALwIK3KWOi0ACACuIjHKUqcFAJ82320AZKvTAiBmomx1WgBw2f0dNFykzuYAvYk+gw1QkTqtALyJitVpBeBLimJ1WgH4zU2xOq0AeHODsZ+Jkspa4abkU4mSRvx3+WQj9jNRybObApR0VPruP0CNt6p55i/PKfMxjSGtyAAAAABJRU5ErkJggg==" alt="">
      <span>定位失败，请稍后再试</span>
      <img class="kjcLastImg" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAEUElEQVRoQ91aTVbbSBCuEkjbkBMMc4KBE4ScgOQEMzlB8ILWYxWy4qm8sHOCkBMETjDkBHFOEDjBMFt+VHmfX8tPltQ/tuzgpJcgdddX9VV16SszbcgqiuIVEY2Y+coY8ybWLI59cN3PicgVEb3AOar6Ps/z05gzNwnABREdWgDXeZ7/uREARORFmqbfBoPBrc8gEfmHiD5WzzDzy+PjY0TFu1YWARjKzAeqekBEe0S04zj5SlUnRDTJsuyyAjYajXbu7u6umfmZjcKnPM8Ban0Azs7OdpMkecvMOMhlsM8AROWCmT/B20VRnDPz3/aFW2PM87UAgOFbW1vviCjooZABtf+DLt+I6G31N1V9nec5csO5FqaQiOAAVIhlPL4Anumjl8YYlNf+ACxHPzKzd0NVhRenXkuSZC4JVXW3yhFm/isGTZqmz30FICoCMP7+/v5fm5ytc2E0M48fHx+vTk5OrmMMs/kDCh5Viet4740x5ty1ZxCA5ftXB2VuQCffASEwNrJHHiBfjDGobJ3LC8DneVWNKnM+ANb4Q1vFOo0MneMFICKgTdfG3rCGvD4cDnFfoFw6q5iq/k9E4yzLxkvlQFEU4OaoaUzsDekCYSn53QNySss0TS9Ctzf26IyAh/e9PI8D0XUy8+cOAF9UdRyq+y2HdnmicSNOHwlxMUSb6v82r9BK/FHtW5blaWz1CgJwhPjGGLMba2ToOYB4eHjY297ensTQxLdfi0Jd3iei3tQJgVr2/y0AIvJfo+Z76/CyB6/qvTkAjgTbWO+3qpCIjOvdIB4I9SKr8uSy+8xFoP5dajfcaPp0RUDrnljk43pZD/Z9bxaBrvIZ80HR14C+788A2P4Evc9s9W0b+hoX874XABHtG2Nwa27s+r0B/FIUAkdEpFmFgqrAU3OreRPf1r9Pf6kyaiMwE1itZ4OyxqZF4JSZIVjN1qa0EsPhEMIvWvAP9Ra82UpA04QCUV9P3sw1erSJMWa/MrCrnYauM/1asgsDh5dPRZWuDsEYM7O764Om9TH/lC1FxwfWXIPZAtCUueF5VY0eOKwyUiLSonTzbupUJYqiaCUzEX0wxkBB+2lLRJCPAFGtVnvvFLZEpJkL2OSnJbSIYFrTFL5avZkTQFd3at2w9gaviwGuS9UrLTqotNZIFEWBUescVaF+53lep9KMU0F12iGzILGhog1WlRBW8IJiN6fFwvgsyw5c+lEQAAz0gECeDBaVA5ugPVOfmzRN95YSd5uHuEBUl52qntenjqHI2AvqUFVx77RUP3i+LMtXIckxKgKVMZjlgjq+iYqqXiRJMinLEiPTuWkNM++UZXnAzOCzc2gBHTbLsqMY2XEhAABiPYeRz/RnASteN4jIIpRcGEAjGgh/1LDOB7QaZsT+PqK+19IAqk1wX5RliQsHuv90yr7AusREs8+MrTeAurHoXTBGtUnZqtvoqYjoGuPXmN9BxDjiB9YfOU/rFhCmAAAAAElFTkSuQmCC" alt="">
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CinemaItem from '../../components/CinemaItem/CinemaItem';
  import CinemaSearchType from '../../components/CinemaSearchType/CinemaSearchType'
  import CinemaSearchBrand from '../../components/CinemaSearchBrand/CinemaSearchBrand'
  import CinemaSearchChar from '../../components/CinemaSearchChar/CinemaSearchChar'
  import {SET_ISSUBWAY,SAVE_TYPE_OBJ} from '@/vuex/mutation-types.js'
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
        isShowLocation:true, //展示定位信息
        locationName:'' //地区的名字
      }
    },
    components:{
      CinemaItem,
      CinemaSearchType,
      CinemaSearchBrand,
      CinemaSearchChar
    },
    computed:{
      ...mapState({
        cinemaListOrigin: state => state.cinema.cinemaListOrigin || [],
        cinemaList: state => state.cinema.cinemaList || [],
        isSubway: state => state.cinema.isSubway,
        district: state => state.cinema.filterCinemas.district || {},
        subway: state => state.cinema.filterCinemas.subway || {},
        isFirst: state => state.cinema.isFirst,
        recentlyCity:state => state.city.recentlyCity
      }),
      isRed(){
        //计算特色什么时候是红色
        if((this.tagName != '全部' && this.hallTypeName != '全部') && (this.hallTypeName || this.tagName != '全部') && this.isShowType !== -1){
          return true
        }else if(this.isShowType == 2){
          return true
        }else{
          return false
        }
      
      }

    },
    beforeDestroy(){
     
    },
    methods:{
      initScroll(){
        if(!this.cinemaScroll){
        this.cinemaScroll = new BScroll('.kjcScrollWrap',{
          click:true
          })
          this.cinemaScroll.on('scrollStart',()=>{
            this.isShowLocation = false
          })
          this.cinemaScroll.on('touchEnd',()=>{
            this.isShowLocation = true
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
       
      }
    },
   async mounted(){
    await this.$store.dispatch('getCinemaListOrigin');
    await this.$store.dispatch('getFilterCinemas')
       this.$nextTick(()=>{
          this.$refs.CinemaSearchType.initScroll()
       })
    
      // if(this.cinemaListOrigin.length){
      //   this.initScroll()
      // }
      //在挂载时判断如果有值 相当于缓存(切换到其他路由 没有销毁 就重新初始化scroll
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
      this.$globalEventBus.$on('getLocation',(value)=>{
          this.locationName = value
      })
      this.$globalEventBus.$on('changeIsShowType',(value)=>{
          this.isShowType = value
      })
      
      
     
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
      },
      isShowType(value){
        if(value  ==  0 && this.district.name || this.subway.name){
          this.$nextTick(()=>{
          this.$refs.CinemaSearchType.initScroll()
          this.initScroll()
          })
        }
      }
    },
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
    .kjcScrollWrap
      width 100%
      height calc(100vh - 188px)    
      .kjcScrollContainer
        width 100%
    .kjcNoFind
      position absolute
      top 0
      left 0 
      width 100%
      height calc(100vh - 188px) 
      text-align center
      img 
        width 83px
        margin 180px 55px 0 
      p
        font-size 14px
        color #777  
    .kjcNoLocation
      position fixed
      background-color hsla(0,0%,94%,.9)
      width 335px
      height 19px
      bottom 49px
      left 0
      padding 8px
      margin 0 12px
      border-radius 5px
      z-index 1
      .kjcFirstImg
        width 14px
        height 14px
        vertical-align middle 
        margin 2px 5px 0 0
      .kjcLastImg
        width 14px
        height 14px
        vertical-align middle 
        margin 2px 0 0
        float right
      span
        font-size 13px
        color #666
        vertical-align middle 


</style>
