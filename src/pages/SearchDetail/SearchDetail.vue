<template>
  <div class="zxSearchDetailWarp" ref="zxDetailScroll">
    <div v-if="$route.query.code == 1">
      <MovieItem :MovieList="movieList"></MovieItem>
    </div>
    <div v-else>
      <CinemaItem v-for="(cinema,index) in cinemaSearchList" :key="index" :cinema="cinema"></CinemaItem>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import CinemaItem from '@/components/CinemaItem/CinemaItem';
import MovieItem from '@/components/MovieItem';
  export default {
    data(){
      return{
        cinemaSearchList:[]
      }
    },
    mounted(){
      this.$store.dispatch('getCinemaListOrigin');
      // console.log(this.$route.query.keyword);
      // console.log(this.$route.query.code);
      this.$store.dispatch('getMovieList',this.$route.query.keyword);
      if(!this.scroll){
        this.scroll = new BScroll(this.$refs.zxDetailScroll, {
          click: true,
          // bounce: false
        })
      }else{
        this.scroll.refresh()
      }
    },
    computed:{
      ...mapState({
        cinemaListOrigin: state => state.cinema.cinemaListOrigin || [],
        movieList: state => state.search.movieList || [],
      })
    },
    watch:{
      cinemaListOrigin(){
        if(this.cinemaListOrigin.length>0){
          this.cinemaSearchList = this.cinemaListOrigin.filter((item,index)=> item.nm.includes(this.$route.query.keyword))
          // console.log(this.cinemaSearchList);
        }
      }
    },
    components:{
      CinemaItem,
      MovieItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.zxSearchDetailWarp
  width 100%
  height 617px
 
</style>
