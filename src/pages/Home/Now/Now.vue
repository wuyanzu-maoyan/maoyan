<template>
  <div>
    <div class='nowContainer' ref="nowContainer">
      <div>
        <div class="lyhContent" 
          @click="$router.push(`/movie/${movie.id}`)"
          v-for="movie in movieList" :key="movie.id"
        >
          <img :src="movie.img" alt="" >
          <div class="content">
            <h2>{{movie.nm}}</h2>
            <h3>观众评</h3>
            <h4>{{movie.sc}}</h4>
            <span>主演:{{movie.star}}</span>
            <p>{{movie.showInfo}}</p>
          </div>
          <div class="lyhButton">
            <div class="btn normal">
              <span class="fix">购票</span>
            </div>
          </div>
        </div>
      </div>
      <div class="lyhContent" 
        @click="$router.push('/Movie')"
        v-for="(movie,index) in movieList" :key="index"
      >
        <img :src="movie.img" alt="" >
        <div class="content">
          <h2>{{movie.nm}}</h2>
          <h3>观众评</h3>
          <h4>{{movie.sc}}</h4>
          <span>主演:{{movie.star}}</span>
          <p>{{movie.showInfo}}</p>
        </div>
        <div class="lyhButton">
          <div class="btn normal">
            <span class="fix">购票</span>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {reqNowMoives} from '../../../api/index';
  import BScroll from 'better-scroll'
  export default {
    async mounted() {
      const result = await reqNowMoives();
      console.log(result);
      if(result.code===0){
        this.movieList = result.data.movieList;
      };
      if(this.movieList.length>0){
        const wrap = this.$refs.nowContainer;
     this.scroll = new BScroll(wrap,{
          click:true,
          probeType:2
        })
    this.scroll.on('scroll',(event)=>{
      let y = event.y
      if(y <= -100){
        this.$globalEventBus.$emit('close',true)
      }else{
        this.$globalEventBus.$emit('close',false)
      }
    })
      }
        
      
    },
    data() {
      return {
        movieList:[]
      }
    },
  }
</script>

<style scoped>
  .nowContainer{
    width: 100vw;
    height: calc(100vh - 200px);
  }

  .lyhContent{
       width: 95%;
       position: relative;
       display: flex;
       height: 110px;
       border-bottom: 1px solid #e6e6e6;
     }
    .lyhContent img{
      position: absolute;
      top: 13px;
      left: 20px;
      width: 64px;
      height: 90px;
    }
    .lyhContent .content{
     position: relative;
     top: 15px;
     left: 100px;
    }
    .lyhContent .content h2{
      font-size: 17px;
      color: #333;
      font-weight: 700;
      flex-shrink: 1;
      margin-bottom: 6px;
      
    }
    .lyhContent .content h3{
      font-size: 13px;
      color: #666;
      margin-bottom: 6px;
      
    }
    .lyhContent .content h4{
      position: absolute;
      font-weight: 700;
      color: #faaf00;
      font-size: 15px;
      left: 53px;
      top: 21px;
      
      }
    .lyhContent .content span{
      width: 100px;
      overflow: hidden;
      font-size: 13px;
      color: #666;
    }
    .lyhContent .content p{
      font-size: 13px;
      color: #666;
      margin-top: 8px;
    }
    /* 购票按钮 */
    .lyhContent .lyhButton{
      position: absolute;
      right: 50px;
      height: 100%;
      line-height: 90px;
     }
     /* 购票按钮 */
    .lyhContent .lyhButton .btn{
      width: 47px;
      height: 27px;
      line-height: 28px;
      text-align: center;
      box-sizing: border-box;
      background-color: #f03d37;
      color: #fff;
      border-radius: 4px;
      white-space: nowrap;
      font-size: 12px;
      cursor: pointer;
      position:absolute;
      top: 40px;
      }
 
</style>

