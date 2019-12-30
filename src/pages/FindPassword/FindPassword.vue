<template>
  <div class='zssFindPasswordContainer'>
    <div class="zssFindPwdHeader">
      找回登录密码
    </div>
    <div class="zssFindPwdContent">
      <div class='zssFindPwdTitle'>
        请填写你要找回密码的美团账号
      </div>
      <input type="text" placeholder="手机号/用户名/邮箱">
      <mint-button class='zssNextStep zssDisabled'>下一步</mint-button>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .zssFindPasswordContainer
    width 100vw
    height 100vh
    .zssFindPwdHeader
      width 100%
      height 45px
      line-height 45px
      text-align center
      font-size 20px
      background linear-gradient(135deg, #FFD000 0%, #FFBD00 100%) 
      color #222
    .zssFindPwdContent
      padding 0 28px
      box-sizing border-box
      width 100%
      height 160px
      .zssFindPwdTitle
        font-size 20px
        width 100%
        height 65px
        line-height 65px
        color #222
        margin-bottom 10px
      input 
        outline none
        font-size 20px
        width 100%
        height 35px
        line-height 50px
        border-bottom 1px solid #eee
      .zssNextStep
        width 100%
        height 43px
        margin-top 28px
        background linear-gradient(135deg, #FFD000 0%, #FFBD00 100%)
        color rgba(34,34,34,.5)
        outline none 
        border none 
        border-radius 5px
        padding none 
        &.zssDisabled
          background linear-gradient(135deg,#FFF5CA 0,#FFF2CC 100%)
 
</style>
