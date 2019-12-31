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
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .lyhLogo_app
    width: 100%;
    height: 64px;
    position: relative;
    display: flex;
    border-bottom: 1px solid #e6e6e6;
     
    .lyhLogo
      width: 44px;
      height: 44px;
      border-radius:50%; 
      overflow: hidden
     
      img
        position: absolute;
        width: 44px;
        height: 44px;
        border-radius:50%;
        line-height: 64px;
        top:11px;
        left: 15px;
     
    button
      width:68px;
      height: 30px;
      background: #ef4238;
      color: #fff;
      font-size: 12px;
      border-radius: 8px;
      border: 0px;
      position: absolute;
      right:15px ;
      top: 18px;
      text-align: center
     
    .lyhText
       position: absolute;
       height:40px;
       top: 17px;
       left: 63px;
     
       h2
        font-size: 17px;
        color: #222;
        margin-bottom: 5px;
     
       span
        font-size: 12px;
        color: #999;
 
</style>
