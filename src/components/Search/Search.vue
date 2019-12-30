<template>
  <div id="zxSearchContainer">
    <Header :title="'猫眼电影'"></Header>
    <div class="zxSearchHeader">
      <div class="zxInputWrapper"> 
        <div class="zxIco"><i class="iconfont icon-search"></i></div>
        <input type="text" placeholder="搜影院" v-model="zxInput">
        <div class="zxIco"><i class="iconfont icon-guanbi" v-show="zxInput" @click="clear"></i></div>
      </div>
      <div class="zxCancel" @click="cancel">取消</div>
    </div>
    <div class="zxSearchHistory">
      <div class="zxSearchIco"><i class="iconfont icon-search"></i></div>
      <span class="zxSearchContent">111</span>
      <div class="zxSearchIco"><i class="iconfont icon-guanbi"></i></div>
    </div>
    <div class="zxSearchResult">
      <div class="zxResultWrapper">
        <div class="zxResult">
          <h3>电影/电视剧/综艺</h3>
          <div class="zxList">
            <div class="zxMovie">
              <img src="../../static/images/wjMovie.png" alt="">
              <div class="zxMovieInfo">
                <div class="zxNameScore">
                  <p class="zxName">1111111111111111111111111111111111111</p>
                  <p class="zxWish">222</p>
                </div>
                <div class="zxDetailSection">
                  <div class="zxDetailItems">
                    <p>111</p>
                    <p>3333333333333333333333333333333333333333333</p>
                    <p>555</p>
                  </div>
                  <div class="zxBuy">ddd</div>
                </div>
              </div>
            </div>
            <div class="zxMovie">
              <img src="../../static/images/wjMovie.png" alt="">
              <div class="zxMovieInfo">
                <div class="zxNameScore"> 
                  <p class="zxName">1111111</p>
                  <p class="zxWish">2222222</p>
                </div>
                <div class="zxDetailSection">
                  <div class="zxDetailItems">
                    <p>111</p>
                    <p>333</p>
                    <p>555</p>
                  </div>
                  <div class="zxBuy">ddd</div>
                </div>
              </div>
            </div>
          </div>
          <div class="zxMoreResult">查看全部6520部影视剧</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data(){
      return {
        zxInput:''
      }
    },
    methods:{
      //清除输入
      clear(){
        this.zxInput = ''
      },
      //取消,返回
      cancel(){

      }
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
    background-color #fff
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
    display none
    width 100%
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

          .zxMovie
            padding 12px 0
            min-height 90px
            border-bottom 1px solid #e6e6e6
            img 
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
                .zxName
                  max-height 24px
                  width 215px
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  font-weight bold
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

</style>
