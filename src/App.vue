<template>
  <div class="app">
    <Header title="猫眼电影" style="display:none"></Header>
    <router-view></router-view>
    <FooterNav style="display:none"></FooterNav>
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



<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
