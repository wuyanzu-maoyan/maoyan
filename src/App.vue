<template>
  <div class="app">
    <Header :title="$route.meta.title || '猫眼电影'" v-if="!$route.meta.noHeader"></Header>
    <keep-alive include="CinemaDetail">
      <router-view></router-view>
    </keep-alive>
    
    <FooterNav></FooterNav>
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
