<template>
  <div class="app">
    <Header title="猫眼电影"></Header>
    <router-view></router-view>
    <!-- <FooterNav></FooterNav> -->
  </div>
</template>

<script type="text/ecmascript-6">
  import FooterNav from './components/FooterNav/FooterNav'
  export default {
    components:{
      FooterNav,
    }
  }
</script>



<style lang="stylus" rel="stylesheet/stylus">

 
</style>
