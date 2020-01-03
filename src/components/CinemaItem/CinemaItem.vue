<template>
  <div class="kjcCinemaItemContainer" @click="$router.push(`/cinemadetail/:${cinema.id}`)">
      <div class="kjcTitleAndSearch">
      <span class="title">{{cinema.nm}}</span>
      <span>{{cinema.sellPrice}}<i>元起</i></span>
    </div>
    <div class="kjcLocation">
      <span>{{cinema.addr}}</span>
      <span class="kjcKl">{{cinema.distance}}</span>
    </div>
    <div class="kjcIconCard">
      <div v-for="(value2,key2) in cinemaTag" class="endorse"  >{{value2}}</div>
      <div v-for="(value1,key1) in cineTag" class="snack"  >{{value1}}</div>
      <div class="endorse" v-if="cinema.tag.hallType.length" v-for="(item,index) in cinema.tag.hallType">{{item}}</div>
    </div>
    <div class="kjcDisCount">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
      <span>开卡特惠, 首单2张最高立减6元</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapState } from 'vuex';
  export default {
    props:['cinema'],
    computed:{
     
      
      cineTag(){
        let obj = {};
        let tag = this.cinema.tag;
        Object.keys(tag).forEach((item,index)=>{
          if(typeof tag[item] === 'number'){
            switch(item){
              case "snack":
                obj[item] = '小吃'
                break;      
            }
            
          }else if(typeof tag[item] === 'string'){
            obj[item] = '折扣卡'
          }
        })

      

          return obj;
      },
      cinemaTag(){
        let obj = {};
        let tag = this.cinema.tag;
        Object.keys(tag).forEach((item,index)=>{
          if(typeof tag[item] === 'number'){
            switch(item){
              case 'allowRefund':
                obj[item] = '退'
                break;
              case 'endorse':
                obj[item] = '改签'
                break;
            }
            
          }
        })

      

          return obj;
      }
 
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .kjcCinemaItemContainer
    width 100%
    padding 13px 15px 13px 0
    margin-left 15px
    background-color #fff
    bottom-border-1px(rgba(0,0,0,0.1))
    .kjcTitleAndSearch
      width 100%
      padding 5px 0 0
      span 
        font-size 18px
        line-height 23px
        color #f03d37
        i 
          font-size 11px
      .title
        margin-right 18px
        font-size 16px
        color #000
    .kjcLocation
      margin-top 6px
      color #666
      font-size 13px
      line-height 1.5
      display flex
      span 
        width 290px 
        white-space nowrap 
        overflow hidden
        text-overflow ellipsis
      .kjcKl
        width 40px
        font-size 13px
    .kjcIconCard
      height 17px
      line-height 17px
      margin-top 4px
      margin-bottom 4px
      div
        display inline-block
        height 15px
        padding 0 3px
        margin-right 5px
        line-height 15px
        font-size 10px
      .endorse
        color #589daf
        border 1px solid #589daf
      .snack
        color #f90
        border 1px solid #f90
    .kjcDisCount
      margin-bottom 4px
      color #999
      margin-top 8px
      line-height 1.5
      img 
        width 15px
        height 14px
        vertical-align middle
      span 
        font-size 11px
        color #999
        margin-left 5px

      




        
        


 
</style>
