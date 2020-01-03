
<template>
 <div>
   <open></open>
  <div class="lyhNav">
    <div class="lyhNavigation">
      <span class="BJ">北京</span>
      <div class="lyhSj"></div>
      <span class="lyhRb abs"  @click="$router.push('/home/Now')">正在热播</span>
      <span class="lyhSy" @click="$router.push('/home/Will')">即将上映</span>
      <div class="lyHiconfont"><i class="iconfont icon-search"></i></div>
     </div>
  </div>
  <router-view></router-view>
 
  
  
 </div>
</template>

<script type="text/ecmascript-6">
 import open from '../../components/Openapp/OpenApp'
  export default {
    data() {
      return {
        
      }
    },
    components:{
      open
    }
  }
</script>

<style scoped>
     
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
     .lyhNav .lyhRb{
       position: absolute;
       right: 180px;
       font-weight: 700;
     }
     .lyhNav .abs{
        border-bottom: 1px solid red;
        color: red;
     }
     /* 导航下的内容区 */
     
</style>
