<template>
 <div>
   <open v-show="!isClose"></open>
  <div class="lyhNav" v-if="recentlyCity.length">
    <div class="lyhNavigation" >
      <span class="BJ"  @click="$router.push('/city')">{{recentlyCity[0].name}}</span>
      <div class="lyhSj"></div>
      <span class="lyhRb " :class="{active:$route.path==='/home/now'}" @click="toNow">正在热播</span>
      <span class="lyhSy"  :class="{active:$route.path==='/home/will'}" @click="toWill">即将上映</span>
      <div class="lyHiconfont" @click="$router.push(`/search/${false}`)"><i class="iconfont icon-search"></i></div>
     </div>
  </div>
  <router-view></router-view>
  <OpenApp v-show="isClose"></OpenApp>
  
 </div>
</template>

<script type="text/ecmascript-6">
 import {mapState} from 'vuex'
 import open from '../../components/Openapp/OpenApp'
 import OpenApp from '../../components/Open/Open'
  export default {
    mounted() {
      console.log(this.$route.path);
      this.$globalEventBus.$on('close',(type)=>{
        this.isClose = type
      })
    },
    data() {
      return {
        isClose:false
      }
    },
    computed: {
      ...mapState({
        recentlyCity: state => state.city.recentlyCity || []
      })
    },
    components:{
      open,
      OpenApp
    },
    methods: {
      toNow(){
        if(this.$route.path!=='/home/now'){
          this.$router.replace('/home/now');
        }
        
      },
      toWill(){
        if(this.$route.path!=='/home/will'){
          this.$router.push('/home/will')
        }
        
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
      /* 导航 */
      .lyhNav{
        position: relative;
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #e6e6e6;
        background-color: #fff;
        z-index: 9
      }
      .lyhNav .lyhSj{
        position: absolute;
        float: left;
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        display: inline-block;
        left: 55px;
        top: 20px
      }

     .lyhNav .lyHiconfont{
       float:right;
       width: 20px;
       height: 20px;
       padding: 10px 15px 10px 10px;
     }
     .lyhNav .lyHiconfont .iconfont{
       font-size: 20px;
       color: #ef4238;
     }
     .lyhNav span{
       font-size: 15px;
       color: #666;
       margin: 0 12px;
       line-height: 44px;
      }
     .lyhNav .lyhSy{
       position: absolute;
       right: 80px;
       font-weight: 700;
       
     }
     .lyhNav .lyhSy.active{
       border-bottom: 1px solid red;
       color: red;
     }
     .lyhNav .lyhRb{
       position: absolute;
       right: 180px;
       font-weight: 700;
     }
     .lyhNav .lyhRb.active{
       border-bottom: 1px solid red;
       color: red;
     }
     /* 导航下的内容区 */
     
</style>
