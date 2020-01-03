<template>
  <div id="zxCity" ref="zxScroll">
    <div class="zxAllInner" ref="zxCityList">
      <!-- 定位城市 -->
      <section class="zxCityContainer">
        <div class="zxCityTitle">
          定位城市
        </div>
        <div class="zxCityItemCon clearfix">
          <div class="zxCityItem">定位失败,请点击重试</div>
        </div>
      </section>
      <!-- 最近访问 -->
      <section class="zxCityContainer">
        <div class="zxCityTitle" v-if="recentlyCity.length">
          最近访问城市
        </div>
        <div class="zxCityItemCon clearfix ">
          <div class="zxCityItem zxCityOther" @click="checkedCity(item)" v-for="(item,index) in recentlyCity" :key="index">{{item.name}}</div>
        </div>
      </section>
      <!-- 热门城市 -->
      <section class="zxCityContainer">
        <div class="zxCityTitle">
          热门城市
        </div>
        <div class="zxCityItemCon clearfix">
          <div class="zxCityItem" @click="checkedCity(hotCity)" v-for="(hotCity,index) in hotCitys" :key="index">{{hotCity.name}}</div>
        </div>
      </section>
      <!-- 列表 -->
      <section class="zxCityContainer" v-for="(citys,index) in cityList" :key="index">
        <div class="zxCityTitle">
          {{citys.initial}}
        </div>
        <div class="zxCityUl" v-for="(city,index) in citys.list" :key="index">
          <div class="zxCityli" @click="checkedCity(city)">{{city.name}}</div>
        </div>
      </section>
      
    </div>
    <!-- 导航 -->
    <div class="zxNav">
        <div class="zxNavItem" @click="changeCity(-3)">定位</div>
        <div class="zxNavItem" @click="changeCity(-2)">最近</div>
        <div class="zxNavItem" @click="changeCity(-1)">热门</div>
        <div class="zxNavItem" @click="changeCity(index)" v-for="(citys,index) in cityList" :key="index">{{citys.initial}}</div>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
 import BScroll from 'better-scroll'
import {mapState} from 'vuex'
  export default {
    data(){
      return{
        tops:[], 
        // hotCitys:['上海','北京','广州','深圳','武汉','天津','西安','南京','杭州','成都','重庆'],
        hotCitys:[
          {
            "code": "021", 
            "name": "上海", 
            "pinyin": "Shanghai", 
            "label": "Shanghai021"
          },
          {
            "code": "010", 
            "name": "北京", 
            "pinyin": "Beijing", 
            "label": "Beijing010"
          },
          {
            "code": "020", 
            "name": "广州", 
            "pinyin": "Guangzhou", 
            "label": "Guangzhou020"
          },
          {
            "code": "0755", 
            "name": "深圳", 
            "pinyin": "Shenzhen", 
            "label": "Shenzhen0755"
          },
          {
            "code": "027", 
            "name": "武汉", 
            "pinyin": "Wuhan", 
            "label": "Wuhan027"
          },
          {
            "code": "022", 
            "name": "天津", 
            "pinyin": "Tianjin", 
            "label": "Tianjin022"
          }, 
          {
            "code": "029", 
            "name": "西安", 
            "pinyin": "Xian", 
            "label": "Xian029"
          }, 
          {
            "code": "025", 
            "name": "南京", 
            "pinyin": "Nanjing", 
            "label": "Nanjing025"
          },
          {
            "code": "0571", 
            "name": "杭州", 
            "pinyin": "Hangzhou", 
            "label": "Hangzhou0571"
          }, 
          {
            "code": "028", 
            "name": "成都", 
            "pinyin": "Chengdu", 
            "label": "Chengdu028"
          },
          {
            "code": "023", 
            "name": "重庆", 
            "pinyin": "Chongqing", 
            "label": "Chongqing023"
          },

        ] //热门城市
      }
    },
    async mounted(){
      //获取城市列表
      this.$store.dispatch("getCityList")
    },
    computed:{
      ...mapState({
        cityList: state => state.city.cityList || [], 
        recentlyCity: state => state.city.recentlyCity || []
      })
    },
    methods:{
      //初始化tops
      initTops(){
        const tops = []
        let top = 0
        tops.push(top)
        const lis = Array.prototype.slice.call(this.$refs.zxCityList.children)
        lis.forEach(li => {
          top += li.clientHeight
          tops.push(top)
        })

        // 更新tops数据
        this.tops = tops
        // console.log('tops', tops)
      },
      //点击右侧导航,使城市列表滑动到对应位置
      changeCity(index){
        // console.log(index);
        const top = this.tops[index+3]
        this.scrollY = top
        this.scroll.scrollTo(0, -top, 300)
      },
      //点击城市,添加到最近访问
      checkedCity(item){
        this.$store.dispatch("saveRecentlyCity",item)
        this.$router.back()
      }
    },
    watch:{ // 使用BScroll添加滑动
      cityList(){
        this.$nextTick(()=>{ 
          this.scroll = new BScroll(this.$refs.zxScroll, {
            click: true,
          })
          this.initTops()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #zxCity
    background-color #ebebeb
    width 100%
    height 667px
    .zxAllInner
      width 100%
      .zxCityContainer
        width 358px
        font-size 14px
        .zxCityTitle
          width 100%
          height 30px
          line-height 30px
          padding-left 10px
        .clearfix::after
            content ""
            display table
            clear both
        .zxCityItemCon
          width 100%
          background-color #f5f5f5
          padding-bottom 8px
          .zxCityItem
            height 33px
            min-width 27%
            padding 0 20px
            float left
            background-color #fff
            margin-top 15px
            margin-left 4%
            border 1px solid #e6e6e6
            border-radius 3px
            line-height 33px
            text-align center
            box-sizing border-box
            &.zxCityOther
              white-space:nowrap
              overflow hidden
        .zxCityUl
          width 100%
          background-color #f5f5f5
          padding-bottom 8px
          .zxCityli
            height 44px
            line-height 44px
            margin-left 15px
            margin-right 20px
            border-bottom 1px solid #c8c7cc
    .zxNav
      position fixed
      top 75px
      right 0
      width 35px
      text-align center
      font-size 12px
      z-index 9
      .zxNavItem
        height 20px
        line-height 20px
        color #333

</style>
