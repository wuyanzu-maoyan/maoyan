<template>
  <div id="zxSearchContainer">
    <!-- <Header :title="'猫眼电影'"></Header> /128.180 -->
    <div class="zxSearchHeader">
      <!-- 搜索框 -->
      <div class="zxInputWrapper"> 
        <div class="zxIco"><i class="iconfont icon-search"></i></div>
        <input type="text" placeholder="搜影院" v-model="zxInput" @blur="saveInput">
        <div class="zxIco"><i class="iconfont icon-guanbi" v-show="zxInput" @click="clear"></i></div>
      </div>
      <div class="zxCancel" @click="cancel">取消</div>
    </div>
    <!-- 搜索历史 -->
    <div class="zxSearchHistory" v-for="(input,index) in inputList" :key="input.id" v-if="!isShoeSearch">
      <div class="zxSearchIco"><i class="iconfont icon-shijianzhongbiao"></i></div>
      <span class="zxSearchContent" @click="addInput(input.value)">{{input.value}}</span>
      <div class="zxSearchIco" @click="deleteInput(input.id)"><i class="iconfont icon-guanbi"></i></div>
    </div>
    <!-- 搜索成功结果 -->
    <div class="zxSearchResult clearfix" v-if="isShoeSearch">
      <!-- 电影列表 -->
      <div class="zxResultWrapper" v-if="movieList.length>0">
        <div class="zxResult">
          <h3>电影/电视剧/综艺</h3>
          <div class="zxList clearfix" >
            <div class="zxMovie" v-for="(movie,index) in cutMovieList" :key="index">
              <img class="zxMovieImg" :src="movie.img" alt="" >
              <div class="zxMovieInfo">
                <div class="zxNameScore">
                  <p class="zxName">{{movie.nm}}</p>
                  <p class="zxWish">{{movie.sc? movie.sc+'分':movie.wish+'人想看'}}</p>
                </div>
                <div class="zxDetailSection">
                  <div class="zxDetailItems">
                    <p>{{movie.enm}}</p>
                    <p>{{movie.cat}}</p>
                    <p>{{movie.rt}}</p>
                  </div>
                  <div class="zxBuy">ddd</div>
                </div>
              </div>
            </div>
          </div>
          <div class="zxMoreResult" @click="">查看全部{{movieList.length}}部影视剧</div>
        </div>
        
      </div>
      <!-- 影院列表 -->
      <div class="zxResultWrapper">
        <div class="zxResult">
          <h3>影院</h3>
          <CinemaItem v-for="(cinema,index) in cutCinemaSearchList" :key="index" :cinema="cinema"></CinemaItem>
          <div class="zxMoreResult" @click="">查看全部{{cinemaSearchList.length}}部影视剧</div>
        </div>
        
      </div>
    </div>
    <!-- 搜索失败结果 -->
    <div class="zxNoResult" style="display:none">
      <div>没有找到相关内容</div>
      <p>大家都在搜</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CinemaItem from '../../components/CinemaItem/CinemaItem';
import {reqSearchMovie} from '../../api'
import {mapState} from 'vuex'
  export default {
    data(){
      return {
        zxInput:'', //输入内容
        inputList: JSON.parse(localStorage.getItem('inputList')) || [], //输入历史
        movieList: [], //匹配电影列表
        cutMovieList: [], //匹配电影前三
        isShoeSearch: false,//是否显示搜索结果
        cinemaSearchList: [], //匹配影院信息
        cutCinemaSearchList: [], 
      }
    },
    methods:{
      //清除输入
      clear(){
        this.zxInput = ''
        this.isShoeSearch = false
      },
      //取消,返回
      cancel(){

      },
      //失去焦点保存输入
      saveInput(){
        const input = {id:Date.now(),value:this.zxInput}
        if(this.zxInput.trim()) {
          this.inputList.unshift(input)
          if(this.inputList.length>3){
            this.inputList.splice(this.inputList.length-1)
          }
          //保存到localStorage中
          localStorage.setItem('inputList', JSON.stringify(this.inputList))
        }
      },
      //点击输入历史列表的X,删除信息
      deleteInput(id){
        this.inputList.splice(this.inputList.findIndex(item=>item.id === id),1)
        localStorage.setItem('inputList', JSON.stringify(this.inputList))
        // localStorage.removeItem()
      },
      //点击输入历史.搜索
      addInput(value){
        this.zxInput = value
        console.log(this.zxInput);
        
      }
    },
    computed:{
      ...mapState({
        cinemaListOrigin: state => state.cinema.cinemaListOrigin || [],
      })
    },
    watch:{
      async zxInput(){
        if(this.zxInput.trim()){
          //请求得到影院信息
          console.log('11111');
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
          if(false){
            const result = await reqSearchMovie()
            if(result.code === 0){
              this.movieList = result.data.movies.filter((item,index)=> item.nm.includes(this.zxInput))
              this.cutMovieList = this.movieList.slice(0,3)
              console.log(this.cutMovieList);
              this.isShoeSearch = true
            }
          }
        }

      },
      //筛选得到的影院信息
      cinemaListOrigin(){
        if(this.cinemaListOrigin.length>0){
          this.cinemaSearchList = this.cinemaListOrigin.filter((item,index)=> item.nm.includes(this.zxInput))
          this.cutCinemaSearchList = this.cinemaSearchList.slice(0,3)
          console.log(this.cutCinemaSearchList);
          this.isShoeSearch = true
        }
      }
    },
    components:{
      CinemaItem
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
#zxSearchContainer
  background-color #f5f5f5
  width 100%
  height 667px
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
        .zxList
          padding-left 15px
          box-sizing border-box
          .zxMovie
            padding 12px 0
            min-height 90px
            border-bottom 1px solid #e6e6e6
            .zxMovieImg 
              background-color #eee
              width 64px
              height 90px
              float left
              margin-right 10px
            .zxMovieInfo
              float right
              width 270px
              padding-right 15px
              margin-top 1px
              .zxNameScore
                display flex
                justify-content space-between
                font-size 16px
                color #222
                margin-bottom 2px
                margin-top 5px
                .zxName
                  max-height 24px
                  min-width 170px
                  max-width 180px
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  font-weight 700
                  font-size 17px
                  
                .zxWish
                  font-size 14px
                  // color #666
                  color #fa0
              .zxDetailSection
                margin-top 5px
                display flex
                .zxDetailItems
                  overflow hidden
                  padding-right 10px
                  min-height 27px
                  width 213px
                  p
                    height 18px
                    font-size 13px
                    color #666
                    margin-top 2px
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden
                .zxBuy
                  background-color #3c9fe6
                  color #fff
                  border-radius 4px
                  font-size 12px
                  line-height 13px
                  margin-bottom 7px
                  margin-top 15px
                  width 48px
                  text-align center
                  height 27px
                  line-height 27px
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
</style>
