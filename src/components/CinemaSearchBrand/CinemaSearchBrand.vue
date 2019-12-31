<template>
  <div class="kjcBrandContainer">
    <ul class="kjcBrandWrap">
      <li v-for="(item,index) in brand.subItems" v-if="brand.subItems" :key="index" @click="checkBrandItem(index,item)"> 
        <span class="kjcTrue" :class="{show:currentIndex == index}"></span>
        <span class="kjcTitle" :class="{active:currentIndex == index}">{{item.name}}</span>
        <span class="kjcCount" :class="{active:currentIndex == index}">{{item.count}}</span>
     </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currentIndex:0
      }
    },
    computed:{
      ...mapState({
        brand:state => state.cinema.filterCinemas.brand || []
      })
    },
    methods:{
      initScroll(){
        if(!this.scroll){
         this.scroll = new BScroll('.kjcBrandContainer',{
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
      checkBrandItem(index,item){
        this.currentIndex = index
        this.$globalEventBus.$emit('getSearchCondition',{key:'subway',value:item.name})
      }
      
    },
    async mounted(){
      await this.$store.dispatch('getFilterCinemas')
      this.initScroll()
    },
    watch:{
      brand(){
        this.$nextTick(()=>{
          this.initScroll()
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .kjcBrandContainer
    width 95%
    height 346px
    background-color white
    overflow hidden
    .kjcBrandWrap
      width 100%
      li
        padding 0 15px 0 26px
        height 44px
        line-height 44px
        display flex
        bottom-border-1px(#e5e5e5)
        position relative
        &.active
          color #f03d37
        .kjcTrue
          display none
          position absolute
          top 19px
          left 8px
          width 11.5px
          height 8px
          background-repeat no-repeat
          background-size 100% 100%
          background-image url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAaCAYAAAA9rOU8AAAABGdBTUEAALGPC/xhBQAABFlJREFUSA3dlltoXFUUhtda+8zMmUnStJPLSSdiUmwrSbAIuZEmNo3RQkFEX0pffBIEfVCkgvRmM7ShWk2q9FkQFF+ib1JNWyQXm5BOhpRACpKHIpZQTYg2t5k5c85erpM6YUhTY0aSgPtl7zP79s2/1/r3Rtimwh0dtDB0rTi1pPcoQhsocFdtEwu8nbhXwI7/ZUUQRdYtQHrS2A4Yrqw05wPhV1HjOwzwrEac15prtxzGA/mzwmryMb4PxFWaMaWBB9HlW7SVyngg98uXQU4SYhUDppC411HOxV2RiiHcKpip2kgoFKpoUuCeRMR2Zkxo5D4G/qTQqujHnh53S45pKhIJ7TD3NDPqqAJqchgcB3SvgHwctipHPBBPlE1XhkWRxeCTBxnhjEHQqgVEYmRcs/vmjsHRmABIDD8smxoz9w8cyJsLlh9i4rNE3GozpGXn8bSL3TvaXxrNBvFwNk0ZD6SgKNgKaYqi4rq05rSIcDsButMqG/0Oe2D5aP4WZbky+DAY09M1ZolppjAelwn/vUzu3RsI7vS3ug6d9gmIy5xGxjFHDM4aGP1+tSKZHWnebqg3wwVvzQaMtl+bmoKZjlxrD8TaXVxnsO+MIn0wzWzLAYylye3aZY30Pg7E248cws9Nwo8MhV/lk3tsqrY2lCvIXfGRJ8qK6iUQu8Q/miRSbQnP2BK55648H/tmraPJ3stAoBkHICWNEo3UnRdELUDfRuLxpeyB67VZVF0wjAYXnKgibpSASBHSrSVXn7cGY9ehb70VRBki/brNfJUQbCII+4guBYP+4xtRaKKmJn/Op9skWa7I0SxnjePqIZedqHVz5Pr6GA9HUOHAyCRo9z0xon4UIIl4i1B3BoLGcS8j1luIxdCscH67wXTBR/BMmtEh5jtJggs7B2M/rjc/u38ltaeb6572KbxsomoTPzBR82/imGeXHqS+LhsfX8yelGl7sL5w3nMBB7qU4moxNMlgvpNAOFU6MHI1M+7f1iumV3Jz9Gc/5b2RdPUPPvIuMLQMNDr9heZraynEcjRG2HxRQLqRdLVkTVpi73bCyA3EA15RJkOfbGnZ76Dzmby+2uRfBlytp7Xic/bM0pelExML3rjfBSS/KHREszovj6Nql8F2NY8nyTltDcSvZdbaaP0IjNg1zTbXV8kV/2FQUbutwfOeWXHRD/JnE1/cm53V4ad2v+Bqo8tHvM/LGnkYxRJKR62+2I2NAmSPfwTG6xQgfHCooRJcvBgw8BUJ7gAB/mGDHVWsfgFQlwzU+1zEFLs8aiv1bnH/UCx74Vzaa8JkAyngT31oHBFLNyU658QCkgqh1HsYMUM8CXiqZHC4P5fNV895LEwGaKa5eb8P7E7TUEflfRiS9Ad5xSc16OF54I7IQGxg9aK5fv8jTAYocbixPJnmzoCiYy6yIZfeYMKPJ0pvDI/luvFa89aFyQAtNjaWOn44wYgRR/Plkp9G4mst+L/57S+eQuIEp8oPOAAAAABJRU5ErkJggg==")
          &.show
            display block
        .kjcTitle
          width 50%
          height 100%
          text-align left
          color #333
          font-size 15px
          &.active
            color #f03d37
        .kjcCount
          width 50%
          height 100%
          text-align right
          font-size 12px
          color #8f9296
          &.active
            color #f03d37
          
</style>
