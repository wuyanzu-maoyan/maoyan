<template>
  <div id="zxSearchContainer" ref="zxSearchScroll">
    <div class="section">
      <div class="zxSearchHeader">
        <!-- 搜索框 -->
        <div class="zxInputWrapper"> 
          <div class="zxIco"><i class="iconfont icon-search"></i></div>
          <input type="text" :placeholder="isCinema?'搜影院':'搜电影、搜影院'" v-model="zxInput" @blur="saveInput">
          <div class="zxIco"><i class="iconfont icon-guanbi" v-show="zxInput" @click="clear"></i></div>
        </div>
        <div class="zxCancel" @click="cancel">取消</div>
      </div>
      <!-- 搜索历史 -->
      <div class="zxSearchHistory" v-for="(input,index) in getInputList" :key="input.id" v-if="!isShoeSearch && !isShowImg">
        <div class="zxSearchIco"><i class="iconfont icon-shijianzhongbiao"></i></div>
        <span class="zxSearchContent" @click="addInput(input.value)">{{input.value}}</span>
        <div class="zxSearchIco" @click="deleteInput(input.id)"><i class="iconfont icon-guanbi"></i></div>
      </div>
      <!-- 搜索成功结果 -->
      <div class="zxSearchResult clearfix" v-if="isShoeSearch">
        <!-- 电影列表 -->
        <div class="zxResultWrapper" v-if="movieList.length>0 && !isCinema">
          <div class="zxResult">
            <h3>电影/电视剧/综艺</h3>
            <MovieItem :MovieList="cutMovieList"></MovieItem>
            <div class="zxMoreResult" @click="toMovieDetail">查看全部{{movieList.length}}部影视剧</div>
          </div>
          
        </div>
        <!-- 影院列表 -->
        <div class="zxResultWrapper" v-if="cutCinemaSearchList.length>0">
          <div class="zxResult">
            <h3>影院</h3>
            <CinemaItem v-for="(cinema,index) in cutCinemaSearchList" :key="index" :cinema="cinema"></CinemaItem>
            <div class="zxMoreResult" @click="toCinemaDetail">查看全部{{cinemaSearchList.length}}家电影院</div>
          </div>
          
        </div>
      </div>
      <!-- 搜索失败结果 -->
      <div class="zxNoResult" v-if="!isCinema && isShowImg" >
        <div>没有找到相关内容</div>
        <p>大家都在搜</p>
      </div>
      <div v-if="isCinema && isShowImg" class="zxNothing">
        <img src="../../static/images/nothing.png" alt="">
        <p>没有找到相关影院</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import BScroll from 'better-scroll'
import CinemaItem from '../../components/CinemaItem/CinemaItem';
import MovieItem from '../../components/MovieItem';

  export default {
    data(){
      return {
        zxInput:'', //输入内容
        inputListCinema: JSON.parse(localStorage.getItem('inputListCinema')) || [], //输入历史
        inputListMovie: JSON.parse(localStorage.getItem('inputListMovie')) || [], //输入历史
        
        cutMovieList: [], //匹配电影前三
        isShoeSearch: false,//是否显示搜索结果
        cinemaSearchList: [], //匹配影院信息
        cutCinemaSearchList: [], 
        isCinema: this.$route.params.isCinema === 'true', //是否从影院进入
        isShowImg: false //是否显示图标
      }
    },
    mounted(){
      // console.log(this.$route.params.isCinema)
      console.log(this.isCinema)
    },
    methods:{
      //清除输入
      clear(){
        this.zxInput = ''
        this.isShoeSearch = false
        this.isShowImg = false
      },
      //取消,返回
      cancel(){
        this.$router.back()
      },
      //失去焦点保存输入
      saveInput(){
        const input = {id:Date.now(),value:this.zxInput}
        if(this.zxInput.trim()) {
          
          if(this.isCinema){
            this.inputListCinema.unshift(input)
            if(this.inputListCinema.length>3){

              this.inputListCinema.splice(this.inputListCinema.length-1)
            }
            //保存到localStorage中
            localStorage.setItem('inputListCinema', JSON.stringify(this.inputListCinema))
          }else{
            this.inputListMovie.unshift(input)
            if(this.inputListMovie.length>3){
              this.inputListMovie.splice(this.inputListMovie.length-1)
            }
            //保存到localStorage中
            localStorage.setItem('inputListMovie', JSON.stringify(this.inputListMovie))
          }
          
        }
      },
      //点击输入历史列表的X,删除信息
      deleteInput(id){
        if(this.isCinema){
          this.inputListCinema.splice(this.inputListCinema.findIndex(item=>item.id === id),1)
          localStorage.setItem('inputListCinema', JSON.stringify(this.inputListCinema))
          // localStorage.removeItem()
        }else{
          this.inputListMovie.splice(this.inputListMovie.findIndex(item=>item.id === id),1)
          localStorage.setItem('inputListMovie', JSON.stringify(this.inputListMovie))
        }
      },
      //点击输入历史.搜索
      addInput(value){
        this.zxInput = value
        // console.log(this.zxInput);
        
      },
      //跳转页面
      toCinemaDetail(){
        this.$router.push(`/SearchDetail?keyword=${this.zxInput}&code=0`)
      },
      toMovieDetail(){
        this.$router.push(`/SearchDetail?keyword=${this.zxInput}&code=1`)
      }
      
    },
    computed:{
      ...mapState({
        cinemaListOrigin: state => state.cinema.cinemaListOrigin || [],
        movieList: state => state.search.movieList || [],
      }),
      getInputList(){
        let inputList = []
        if(this.isCinema){
          inputList = this.inputListCinema
        }else{
          inputList = this.inputListMovie
        }
        return inputList
      }
    },
    watch:{
      async zxInput(){
        if(this.zxInput.trim()){
          //请求得到影院信息
          // console.log('11111');
          this.$store.dispatch('getCinemaListOrigin');
        
        /*
          const result = await reqCinemaList()
          if(result.code === 0){
            console.log(result.data.cinemas);
            this.cinemasList = result.data.cinemas.filter((item,index)=> item.nm.includes(this.zxInput))
          }else{
            console.log('111111');
            
          }
        */
       
          //请求得到电影信息
          if(!this.isCinema){
            this.$store.dispatch('getMovieList',this.zxInput);
            // const result = await reqSearchMovie()
            // if(result.code === 0){
            //   this.movieList = result.data.movies.filter((item,index)=> item.nm.includes(this.zxInput))
              
            // }
          }
        }

      },
      //筛选得到的影院信息
      cinemaListOrigin(){
        if(this.cinemaListOrigin.length>0){
          this.cinemaSearchList = this.cinemaListOrigin.filter((item,index)=> item.nm.includes(this.zxInput))
          this.cutCinemaSearchList = this.cinemaSearchList.slice(0,3)
          console.log(this.cutCinemaSearchList);
          if(this.cutCinemaSearchList.length>0){
            console.log('1111111111')
            this.isShoeSearch = true
            this.isShowImg = false
          }else{
            this.isShowImg = true
          }
          
        }
      },
      //筛选得到的电影信息
      movieList(){
        if(this.cinemaListOrigin.length>0){
          this.cutMovieList = this.movieList.slice(0,3)
          console.log(this.cutMovieList);
          this.isShoeSearch = true
          this.isShowImg = false
        }else{
          this.isShowImg = true
        }
      },
      cutMovieList(){
        this.$nextTick(()=>{ 
          if(!this.scroll){
            this.scroll = new BScroll(this.$refs.zxSearchScroll, {
              click: true,
              bounce: false
            })
          }else{
            this.scroll.refresh()
          }
        })
      },
    },
    components:{
      CinemaItem,
      MovieItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#zxSearchContainer
  background-color #f5f5f5
  width 100%
  height 617px
  .section 
    width 100%
    .zxSearchHeader
      width 100%
      display flex
      align-items center
      padding 8px 0 8px 10px
      background-color #f5f5f5
      border-bottom 1px solid #e5e5e5
      z-index 1
      .zxInputWrapper
        width 310px
        display flex
        justify-content space-around
        height 30px
        border 1px solid #e6e6e6
        border-radius 5px
        background-color #fff
        input 
          border none 
          outline none
          font-size 13px
          color #333
          line-height 20px
          padding 4px 0
          width 250px
        .zxIco
          width 30px
          height 30px
          line-height 30px
          text-align center
          .iconfont
            display inline-block
            width 100%
            height 100%
            color #aaa
            font-size 14px
      .zxCancel
        height 30px
        line-height 30px
        padding 0 10px
        font-size 16px
        color #f03d37  
    .zxSearchHistory
      display flex
      line-height 44px
      background-color #ffffff
      border-bottom 1px solid #eee
      .zxSearchIco
        text-align center
        width 44px
        height 44px
        font-size 12px
        color #aaa
      .zxSearchContent
        width 295px
        height 44px
        font-size 16px
    .zxSearchResult
      width 100%
      .clearfix::after
        content ""
        display table
        clear both
      .zxResultWrapper
        .zxResult
          margin-bottom 10px
          background-color #fff
          h3
            font-size 15px
            color #999
            padding 11px 15px
            font-weight 400
            border-bottom 1px solid #e6e6e6
          .zxMoreResult
            width 100%
            height 44px
            font-size 15px
            color #ef4238
            line-height 44px
            text-align center
    .zxNoResult
      width 100%
      height 84px
      div
        width 100%
        height 44px
        background-color #fff
        font-size 15px
        color #999
        line-height 44px
        text-align center
      p 
        display block
        width 100%
        height 29px
        line-height 29px
        color #999
        font-size 13px
        padding-left 15px
        background-color #f5f5f5
        border-bottom 1px solid #ddd
    .zxNothing
      position absolute
      left 50%
      top 50%
      transform translate(-50%,-50%)
      img 
        width 100px
        margin-left 12px
        margin-bottom 10px
      p
        font-size 16px
        color #999
</style>
