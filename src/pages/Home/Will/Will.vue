<template>
<div  class="nowContainer" ref="nowContainer">
  <div>
    <div class="lyhBanner">
      <span class="lyhLabel">近期最受期待</span>
      <div class="nowContainer1" ref="nowContainer1">
        <div class="lyhHopeful" >
          <router-link class="lyhBox" v-for="(coming,index) in comingList" :key="index" :to="{name:'movie',params:{id: coming.id}}">
              <img :src="coming.img">
              <h3 class="lyhTitle">{{coming.nm}}</h3>
              <p class="lyhTime">{{coming.rt}}</p>
          </router-link>
        </div>
      </div>
    </div>
    <will/>
  </div>
  <!-- <div class="lyhHeight"></div> -->
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
import { reqWillMovies } from "../../../api/index";
import will from './will1/will1'
export default {
  data() {
    return {
      comingList: []
    };
  },
  components:{
   will
  },
  async mounted() {
    const result = await reqWillMovies();
    console.log(result);
    if (result.code === 0) {
      this.comingList = result.data.coming;
    }
    // const wrap = this.$refs.nowContainer1;
     new BScroll('.nowContainer1', {
        startX: 0, 
        click: true,
        scrollX: true,
        scrollY: false,
    });
    this.$refs.nowContainer
   this.scroll = new BScroll('.nowContainer', {
        click: true,
        probeType:2
    });
    this.scroll.on('scroll',(event)=>{
      let y = event.y
      if(y <= -100){
        this.$globalEventBus.$emit('close',true)
      }else{
        this.$globalEventBus.$emit('close',false)
      }
    })
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.nowContainer
  width 100%
  height calc(100vh - 200px)
  .lyhBanner 
    padding: 12px 0 12px 15px;
    position: relative;
    .lyhLabel 
      font-size: 14px;
      color: #333;
      position: absolute;
      top: 10px;
    

    .nowContainer1 
      width 96%
      overflow hidden
      margin-top: 15px;
      display: flex;
      height 160px
      .lyhHopeful 
        display: flex;

        .lyhBox 
          width: 85px;
          height: 157px;
          margin-right: 10px;

          img 
            width: 85px;
            height: 115px;
          

          .lyhTitle 
            width: 85px;
            height 13px
            font-size: 13px;
            color: #222;
            margin-top: 4px;
            overflow: hidden;
          

          .lyhTime 
            font-size: 12px;
            color: #999;
            margin-top: 8px;


</style>
