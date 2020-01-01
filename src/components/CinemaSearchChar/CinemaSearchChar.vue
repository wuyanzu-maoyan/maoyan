<template>
  <div class="kjcAllContainer">
    <div class="kjcCharContainer">
    <div class="kjcCharWrap">
      <div class="kjcCharTitle1">特色功能</div>
      <ul class="kjcCharFeaturesBtn">
        <li :class="{active:currentIndexF == index1}" v-if="service.subItems" v-for="(serve,index1) in service.subItems" :key="index1" @click="checkF(index1,serve)">{{serve.name}}</li>
      </ul>
      <div class="kjcCharTitle2">特殊厅</div>
      <ul class="kjcCharSpecialBtn">
        <li :class="{active:currentIndexS == index2}" v-if="hallType.subItems" v-for="(hall,index2) in hallType.subItems" :key="index2" @click="checkS(index2,hall)">{{hall.name}}</li>
      </ul>
    </div>
  </div>
  <div class="kjcBtn">
    <span class="kjcReset" @click="kjcReset">重置</span>
    <span class="kjcOK" @click="kjcConfirm">确认</span>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
import BScroll from "better-scroll";
  export default {
    data(){
      return{
        currentIndexF:0, //正在点击的index feature特色
        currentIndexS:0, //正在点击的index special特殊
        itemF:'', //feature特色厅的搜索条件
        itemS:'', //special特殊厅的搜索条件
      }
    },
    computed:{
      ...mapState({
         hallType: state => state.cinema.filterCinemas.hallType || [],
         service: state => state.cinema.filterCinemas.service || []
      })
    },
    methods:{
      initScroll(){
        if(!this.scroll){
          this.scroll = new BScroll('.kjcCharContainer',{
            click:true,
            bounce: {
              top: false,
              bottom: false
            }
          })
        }else{
          this.scroll.refresh()
        }
      },
      checkF(index,item){
        this.currentIndexF = index
        this.itemF = item.name
      },
      checkS(index,item){
        this.currentIndexS = index
        this.itemS = item.name
      },
      kjcConfirm(){
        this.$globalEventBus.$emit('changeIsShowType',-1);
        if(this.itemF){
          this.$globalEventBus.$emit('getSearchCondition',{key:'tag',value:this.itemF})
        }
        if(this.itemS){
          this.$globalEventBus.$emit('getSearchCondition',{key:'hallType',value:this.itemS})
        }
      },
      kjcReset(){
        this.currentIndexF = 0, //正在点击的index feature特色
        this.currentIndexS = 0 //正在点击的index special特殊
      }
    },
    async mounted(){
     await this.$store.dispatch('getFilterCinemas')
      this.initScroll()
    },
    watch:{
      filterCinemas(){
        this.$nextTick(()=>{
          this.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kjcAllContainer
      width 100%
      background-color white
    .kjcCharContainer
      padding-top 10px
      width 95%
      height 270px
      background-color white
      overflow hidden
      .kjcCharWrap
        .kjcCharTitle1
          margin-left 12px
          margin-top 11px
          font-size 15px
          color #777777
          width 100%
          height 20px
          line-height 20px
          text-align left
        .kjcCharFeaturesBtn
          display flex
          width 100%
          flex-wrap wrap
          margin 0 12px 12px
          li
            width 69px
            height 30px
            border 1px solid #cccccc
            border-radius 5px 
            margin-right 3%
            margin-top 10px
            padding 3px 0
            line-height 30px
            overflow hidden
            white-space nowrap 
            text-overflow ellipsis
            font-size 12px
            text-align center
            color #777
            &.active
              background-color #fcf0f0
              color #f03d37
              border 1px solid #f03d37
        .kjcCharTitle2
          margin-left 12px
          margin-top 11px
          font-size 15px
          color #777777
          width 100%
          height 20px
          line-height 20px
          text-align left
        .kjcCharSpecialBtn
          display flex
          width 100%
          flex-wrap wrap
          margin 0 12px 12px
          li
            width 69px
            height 30px
            border 1px solid #cccccc
            border-radius 5px 
            margin-right 3%
            margin-top 10px
            padding 3px 0
            line-height 30px
            overflow hidden
            white-space nowrap 
            text-overflow ellipsis
            font-size 12px
            text-align center
            color #777
            &.active
              background-color #fcf0f0
              color #f03d37
              border 1px solid #f03d37
    .kjcBtn
      height 60px
      width 95%
      display flex
      align-items center
      border-top 1px solid #e5e5e5
      background-color #fafafa
      margin-top 10px
      .kjcReset
        width 77px
        height 34px
        border 1px solid #e5e5e5
        border-radius 6px
        color #777
        text-align center
        line-height 34px
        font-size 14px
        margin 13px 11px
        background-color white
      .kjcOK
        margin 13px 11px 13px 170px
        width 77px
        height 34px
        border 1px solid black #f03d37
        border-radius 6px
        color white
        text-align center
        line-height 34px
        font-size 14px
        background-color #f03d37



</style>
