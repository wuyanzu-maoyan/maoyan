<template>
    <div class="kjcContent">
      <div class="kjcContentLeft" v-if="!isSubway">
        <ul class="kjcContentLeftWrap"  v-if="district.subItems" >
          <li :class="{active:currentIndex1 == index}"v-for="(subItem,index) in district.subItems" @click="checkSubItem(subItem.id,index,1,subItem.name)" :key="subItem.id">{{subItem.name}}({{subItem.count}})</li>
        </ul>
      </div>
      <div class="kjcContentLeft" v-else>
        <ul class="kjcContentLeftWrap"  v-if="subway.subItems">
          <li :class="{active:currentIndex2 == index}"  v-for="(subItem,index) in subway.subItems" @click="checkSubItem(subItem.id,index,2,subItem.name)" :key="subItem.id">{{subItem.name}}({{subItem.count}})</li>
        </ul>
      </div>
      <div class="kjcContentRight" v-if="!isSubway">
        <ul class="kjcContentRightWrap">
          <li v-for="(item,index1) in getSubItems1"  :class="{active:(currentIndexRight1 == index1) && (itemId1 == item.id)}" @click="checkRightSubItem(index1,1,item,getSubItems1)" :key="item.id">
            <span class="kjcTrue" :class="{show:(currentIndexRight1 == index1) && (itemId1 == item.id)}"></span>
            <span class="kjcItemName">{{item.name}}</span>
            <span class="kjcItemCount">{{item.count}}</span>
          </li>
        </ul>
      </div>
      <div class="kjcContentRight" v-else>
        <ul class="kjcContentRightWrap">
          <li v-for="(item,index2) in getSubItems2"  :class="{active:(currentIndexRight2 == index2)&&(itemId2 == item.id) }" @click="checkRightSubItem(index2,2,item,getSubItems2)" :key="item.id">
            <span class="kjcTrue" :class="{show:(currentIndexRight2 == index2)&&(itemId2 == item.id)}"></span>
            <span class="kjcItemName">{{item.name}}</span>
            <span class="kjcItemCount">{{item.count}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  import {mapState, mapGetters} from 'vuex'
  export default {
    props:{
      district:{
        default:[]
      },
      subway:{
        default:[]
      }
    },
    data(){
      return{
        //1是行政区  2是地铁
        subItemId1:-1, //每个行政区下标id
        subItemId2:-1, //每个地铁下标id
        currentIndex1:0, //当前的左侧li下标
        currentIndex2:0, //当前的左侧li下标
        currentIndexRight1:0,//右侧的li下标
        currentIndexRight2:0,//右侧的li下标
        getSubItems1:[], //获取每个行政区的具体subItem
        getSubItems2:[], //获取每个地铁的具体subItem
        itemId1:'', //每个subitem的id  行政区
        itemId2:'', //每个subitem的id 地铁站
        locationName:'' //每个地区的名字
        
      }
    },
    computed:{
      ...mapState({
        isSubway:state => state.cinema.isSubway
      }),
    },
    watch:{
      isSubway(value){
          if(value === false){this.initScroll() }
            if(value === true){this.initScroll() }

      },
      district(value){
        if(value.name){
         this.$nextTick(()=>{

          this.initScroll()
       })
        }

        

      },
      subway(value){
        if(value.name){
          this.$nextTick(()=>{

          this.initScroll()
        })
        }

      },
        
      
      subItemId1(value){
        let subItemId1 = value 
        this.$nextTick(()=>{
        if(this.district){

          this.getSubItems1 = this.district.subItems.find((item,index)=>item.id == subItemId1).subItems

         
            this.initScroll()
        
        }
          })

        
      },
      subItemId2(value){
        let subItemId2 = value
        this.$nextTick(()=>{
        if(this.subway){
 
          this.getSubItems2 = this.subway.subItems.find((item,index)=>item.id == subItemId2).subItems
   
          
            this.initScroll()
         

        }
         })
      }
    },
    methods:{
      initScroll(type=false){
      if(type == false){
        if(!this.leftScroll){
       this.leftScroll = new BScroll('.kjcContentLeft',{
          click:true,
          bounce: {
            top: false,
            bottom: false
          }
        })
      }else{
        this.leftScroll.refresh()
      }

      if(!this.rightScroll){
        this.rightScroll = new BScroll('.kjcContentRight',{
          click:true,
          bounce: {
            top: false,
            bottom: false
          }
          })
        }else{
          this.rightScroll.refresh()
       }
      }else{
        this.leftScroll = {};
        this.rightScroll = {};
      }
      },
      checkSubItem(id,index,num,name){
        if(num == 1){
          this.subItemId1 = id;
        
          this.currentIndex1 = index
          sessionStorage.setItem('currentIndex1',index)
        }else{
          this.subItemId2 = id;
          this.currentIndex2 = index
          sessionStorage.setItem('currentIndex2',index)
        }
        if(index === 0){
          this.$globalEventBus.$emit('getSearchCondition',{key:'addr',value:'全部'});

        }else{
          this.locationName = name
        }
        
      },
      checkRightSubItem(index,num,item,getSubItems){
        if(num == 1){
          this.itemId1 = item.id
          this.currentIndexRight1 = index;
          sessionStorage.setItem('currentIndexRight1',index)
        }else{
          this.itemId2 = item.id
          this.currentIndexRight2 = index;
          sessionStorage.setItem('currentIndexRight2',index)
        }

        this.$globalEventBus.$emit('getSearchCondition',{key:'addr',value:item.name})
        if(index==0){
          this.$globalEventBus.$emit('getLocation',this.locationName || '全部')
        }

      
      }
    },
   updated(){
     this.initScroll()
   },
   mounted(){
     this.currentIndexRight1 = sessionStorage.getItem('currentIndexRight1')*1 || 0
     this.currentIndexRight2 = sessionStorage.getItem('currentIndexRight2')*1 || 0
     this.currentIndex1 = sessionStorage.getItem('currentIndex1')*1 || 0
     this.currentIndex2 = sessionStorage.getItem('currentIndex2')*1 || 0
    //  this.$nextTick(()=>{
    //   if(this.district.length || this.subway.length){
    //    this.initScroll()
    //  }
    //  })
   }
   

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .kjcContent
    width 95%
    height 400px
    display flex
    .kjcContentLeft
      width 113px
      height 400px
      background-color white
      overflow hidden
      .kjcContentLeftWrap
        li
          width 113px
          height 44px
          font-size 14px
          line-height 44px
          text-align left
          padding 0 15px 0 10px
          color #777
          &.active
            color #f03d37
            background-color #f5f5f5
    .kjcContentRight
      width calc(100% - 113px)
      height 400px
      overflow hidden
      background-color #f5f5f5
      .kjcContentRightWrap
        background-color #f5f5f5
        padding 0 0 0 15px
        li
          height 45px
          width 100%
          font-size 14px
          color #333
          display flex
          padding 0 0 0 25px
          position relative
          box-sizing border-box 
          line-height 45px
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
          .kjcItemName
            width 80%
            height 100%
            text-align left
            line-height 45px
          .kjcItemCount
            text-align center
            line-height 45px
            font-size 12px
            

    
 
</style>
