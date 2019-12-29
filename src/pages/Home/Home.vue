<template>
 <div>
  <div class="lyhLogo_app">
       <div class="lyhLogo">
         <img src="./img/4.png">
       </div>
       <div class="lyhText">
         <h2>猫眼</h2>
         <span>在线选座,热门影讯,爱上看电影</span>
       </div>
       <button>立即打开</button>
  </div>
  <div class="lyhNav">
    <div class="lyhNavigation">
      <span class="BJ">北京</span>
      <div class="lyhSj"></div>
      <span class="lyhRb"  @click="$router.push('/home/Now')">正在热播</span>
      <span class="lyhSy" @click="$router.push('/home/Will')">即将上映</span>
      <div class="lyHiconfont"><i class="iconfont icon-search"></i></div>
     </div>
  </div>
  <router-view></router-view>
 
  
  
 </div>
</template>

<script type="text/ecmascript-6">
 
  export default {
    data() {
      return {
       
      }
    },
  }
</script>

<style scoped>
     .lyhLogo_app{
       width: 100%;
       height: 64px;
       position: relative;
       display: flex;
       border-bottom: 1px solid #e6e6e6;
     }
     .lyhLogo_app .lyhLogo{
       width: 44px;
       height: 44px;
       border-radius:50%; 
       overflow: hidden
     }
     .lyhLogo_app .lyhLogo img{
       position: absolute;
        width: 44px;
        height: 44px;
        border-radius:50%;
        line-height: 64px;
        top:11px;
        left: 15px;
     }
     .lyhLogo_app button{
       width:68px;
       height: 30px;
       background: #ef4238;
       color: #fff;
       font-size: 13px;
       border-radius: 8px;
       border: 0px;
       position: absolute;
       right:15px ;
       top: 18px;
       text-align: center
     }
     .lyhLogo_app .lyhText{
       position: absolute;
       height:40px;
       top: 17px;
       left: 63px;
     }
     .lyhLogo_app .lyhText h2{
       font-size: 17px;
       color: #222;
       margin-bottom: 5px;
     }
     .lyhLogo_app .lyhText span{
       font-size: 12px;
       color: #999;
      }
      /* 导航 */
      .lyhNav{
        position: relative;
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #e6e6e6;
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
     .lyhNav .lyhSy:hover{
       border-bottom: 1px solid red;
       color: red;
     }
     .lyhNav .lyhRb{
       position: absolute;
       right: 180px;
       font-weight: 700;
       border-bottom: 1px solid red;
       color: red;
     }
     .lyhNav .lyhRb:hover{
       border-bottom: 1px solid red;
       color: red;
     }
     /* 导航下的内容区 */
     
</style>
