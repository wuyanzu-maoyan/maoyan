<template>
  <div class='zssRegisterContainer'>
    <!-- <Header title="猫眼电影"></Header> -->
    <div class='zssTip'>该手机号已经注册，请直接登录或找回密码</div>
    <div class="zssRegisterHeader">
      <span class='active'>输入手机号</span> >
      <span>输入验证码</span> >
      <span>设置密码</span> 
    </div>
    <div class='zssPhoneInput'>
      
      <input type="text" placeholder="请输入您的手机号"> 
    </div>
    <div class='zssArgument'>
      <input type="checkbox" class='zssArgee'></input>
      <span>我已阅读并同意<a href="">《美团网用户协议》</a></span>
      
    </div>

    <mint-button  class='zssRegisterGetCode active'>获取验证码</mint-button>
    
    <div class='zssHotLine'>© 猫眼电影 客服电话：<a href="" >400-670-5335</a></div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .zssRegisterContainer
    background-color #eee
    width 100vw
    height 100vh
    .zssRegisterHeader
      width 100vw
      height 42px
      background-color #fff
      font-size 14px
      line-height 42px
      text-align center
      color #222
      span 
        margin 0 5px
      .active
        color #e54847
    .zssPhoneInput
      width 96vw
      height 30px
      line-height 30px
      background-color #fff
      padding 6px 2vw
      margin 10px 0
      font-size 15px
      input 
        outline none
        width 100%
        height  100%
        border-radius 4px
        &:focus
          background-color #eee
    .zssArgument
      height 40px
      padding-left 10px
      line-height 20px
      .zssArgee
        width 24px
        height 20px
        line-height 20px
        background-color #fff
        outline none
        text-shadow: none;
        -webkit-appearance: none;
        border-radius 4px
        text-align center
        color  #eee
        margin-right 8px
        vertical-align middle
        &:checked
          background-color #e54847
        &:after
          content: "✓";
          font-size: 16px;
          font-family: base_icon
      span 
        font-size 14px
        vertical-align middle
        color #333333
        a
          color #e54847
          font-size 14px 
          vertical-align middle      
    .zssRegisterGetCode
      height 47px
      width 96vw
      margin 0 2vw
      background-color #dcdcdc
      color #999999
      font-size  20px
      margin-bottom 10px
      color #fff
      &.active
        background-color #e54847
    .zssHotLine
      color #333
      text-align center
      
      a
        color #e54847
    

 
</style>
