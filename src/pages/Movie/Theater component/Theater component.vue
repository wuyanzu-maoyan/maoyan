<template>
  <div>
    <div class="lHitem ">
	    <div class="lHtitle-block">
        <div class="lHtitle">
            <span>中影星美国际影城（温都水城店）</span>
            <span class="lHprice-block">
                <span class="lHprice">38</span><span class="q">元起</span>
            </span>        
        </div>
        <div class="lHlocation-block">
            <div class="flex lHline-ellipsis">昌平区北七家镇温都水城广场4-5层</div>   
            <div class="lHdistance">1.3km</div>
        </div>
        <div class="flex"></div>		
		    <div class="label-block">                                    
            <div class="endorse">改签</div>                                  
            <div class="snack">小吃</div>                                          
            <div class="vipTag">折扣卡</div>                                      
        </div>                           
        <div class="discount-block">        
          <div>
              <div class="discount-label">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAeCAYAAABNChwpAAAAAXNSR0IArs4c6QAAAgFJREFUSA3Nlz1LA0EQhmf3kouFEQwi+FEYQ+xEsImFoCDoL/CLaKd/QbC0sbCzFVuxsRS1jEVAsUqrIILRQAhaBGKMuawzwpGAm83mNhddCHfZnd3n3Z2ZuxsG2JI3YtQpVw6AiTkhYJj6/GqMwSsIdm312DsnMyzLCF79rGRAiIhfUOm6jL0FQvZU4Gfn0GU4KcINE5vjsc9LFXajE9kcfT7UDZaMQWwuG9Dpi/YyiIWZjqnSxrOAtWgANsYDysV1Bj0L0Flcx8ZoC1F0wf50UMo5fqjCY1FIxxo7jQSUHWgK+ag2YprfGwnIlQTQTk3a/46B2UEOIUu+v0gIIMgZLLTIZHJTOl+TL4K9ShckMc36Q+pc356QB6FLLJQFCqi4f39d2WoKLTy03ckg2OjAvcyXh9n1KX8eA0YC4n0MtuLoJru+o3bvjAS8o2vpfXCYsGEzZkFYHQ5SbcoglM5o6KQAoxhIDHBYiVqYERZcZB04f3aghNGv04wEuIDbQg3u8Lc4YsHymAVLeD17cuDypbWKjgggIZTpVwhM5x1YxzdlpaaXXB0T4J5GEbPy6F7/8WwUhC7U5OpZgIPfU5qnrNTn+UmoXLWNQc8n0AZDacqxUskpLXwcJDbHMinlI0O9NLI51WiAZZLa0odRZBKbU4FINRoDdtoNdxCDWMQk9jePWpE8hVOLbwAAAABJRU5ErkJggg==" alt="">
              </div>
              <div class="discount-label-text">开卡特惠，首单2张最高立减6元</div>
          </div>  
        </div>
	    </div>
  <div class="min-show-block">
    <span>近期场次：</span>
    <span class="time-line">16:15 </span>	
    <span class="time-line">17:35 </span>	
    <span class="time-line">18:20</span>		
  </div>
</div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .lHitem
    border-top 1px solid #999
    padding: 13px 15px 13px 0;
    margin-left: 15px;
    background-color: #fff;
    overflow: hidden;
    .lHtitle-block
      display block
      .lHtitle
        height: 23px;
        line-height: 23px;
        font-size: 16px;
        color: #000;
        .lHprice-block
          padding-top 9px
          padding-left 3px
          line-height 1.5
          .lHprice
            font-size 18px
            color #f03d37
          .q
            font-size 11px
            color #f03d37
            margin-left: 3px
    .lHlocation-block   
      margin-top: 6px;
      font-size: 13px;
      color: #666;
      line-height 1.5  
      .lHline-ellipsis
        width 300px
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap; 
      .lHdistance
        float right
        margin-right  5px
        margin-top -20px
    .flex
      -webkit-box-flex: 1;
      flex: 1;    
    .label-block
      height: 17px;
      line-height: 17px;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: hidden;
      font-size: 0;
      flex-shrink: 0;
      >div
        position: relative;
        display: inline-block;
        padding: 0 3px;
        height: 15px;
        line-height: 15px;
        border-radius: 2px;
        font-size: 12px;
        margin-right 4px
      .endorse
        color: #589daf;
        border: 1px solid #589daf;
      .snack
        color: #f90;
        border: 1px solid #f90;
      .vipTag
        color: #f90;
        border: 1px solid #f90;
    .discount-block
      color: #999;
      position: relative;
      margin-bottom: 4px;
     >div
       
      .discount-label
        width: 15px;
        height: 14px;
        
        top: 3px;
        img 
          width 100%
      .discount-label-text       
        position absolute
        left 20px
        top 0px
        display: inline-block;
    .min-show-block
      padding: 0 15px 0 0;
      margin-right: -15px;
      line-height: 1.5;
      font-size: 0;
      span 
        font-size: 12px;
        color: #999;
</style>
