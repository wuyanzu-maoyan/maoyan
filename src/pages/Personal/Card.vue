<template>
  <div class="wjCardContainer">
    <div class="wjCardList">
      <div class="wjNoCard">
        <img src="../../static/images/wjNoCard.png" alt="">
        <div class="wjNote">暂无影院会员卡</div>
        <div class="wjLook" @click="$router.push('/vipcard')">
          <div class="iconfont icon-jia wjText">查看本城市全部会员卡</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .wjCardContainer
    width 100%
    height calc(100vh - 50px)
    background-color #F4F4F4
    .wjCardList
      padding 0 13.5px 27px 13.5px
      .wjNoCard
        padding-top 115px
        text-align center
        img
          width 85px
          height 85px
        .wjNote
          text-align center
          color #999
          font-size 13px
          margin-top 5px
        .wjLook
          width 100%
          height 65px
          .wjText
            width 170px
            height 40px
            color #f34d41
            font-size 13px
            padding 12px
            border 1px #f34d41 solid
            box-sizing border-box
            border-radius 4px
            margin 30px auto 0
            background-color white
            
</style>
