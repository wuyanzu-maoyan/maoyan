<template>
  
  <div class="zssLoginContainer">
    <!-- <Header title="猫眼电影"></Header> -->

    <!-- 登录内容 -->
    <div class="zssLoginInner">
      <!-- 登录的头部：登录方式切换 -->
      <div class="zssLoginHeader">
        <div class=' zssLoginMethod' :class="{zssActive:!isPhoneLoginzss}" @click="isPhoneLoginzss=false">
          <a href="javascript:;" >美团账号登录</a>
        </div>
        <div class='zssLoginMethod' :class="{zssActive:isPhoneLoginzss}" @click="isPhoneLoginzss=true">
          <a href="javascript:;" >手机验证登录</a>
        </div>    
      </div>
  
      <div class="line"></div>

      <!-- 登录内容区 -->
      <div class="zssLoginContent">
        <form>
          <!-- 用户名登录 -->
          <div class='zssByUsernameContainer' v-if="!isPhoneLoginzss">
            <div class='zssByUsername'>
              <div class='zssUsername'>
                <input  type="text" placeholder="账户名/手机号/Email">
              </div>
              <div class='zssPwd'>
                <input  type="text" placeholder="请输入您的密码">
              </div>
            </div>
            <mint-button class='zssLoginButton' >登录</mint-button>
          </div>
          <!-- 手机号登录 -->
          <div class='zssByPhoneContainer' v-if="isPhoneLoginzss">
            <div class='zssByPhone'>
              <div class='zssPhone'>
                <input  type="text" placeholder="请输入手机号">
                <button class="zssGetCode zssAbled" >获取验证码</button>
              </div>
              <div class='zssPhoneCode'>
                <input  type="text" placeholder="请输入短信验证码">
              </div>
            </div>
            <mint-button class='zssLoginButton enabled' >登录</mint-button>
          </div>
        </form>
      </div>

      <!-- 登录的footer -->
      <div class="zssLoginFooter">
        <div>
          <span class='zssRegister' @click="$router.push('/register')">立即注册</span>
          <span class='zssFindPwd' @click="$router.push('/findpassword')">找回密码</span>
        </div>
        <div class='zssHotLine'>© 猫眼电影 客服电话：<a href="" >400-670-5335</a></div>
        

      </div>

    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  
  export default {
    data() {
      return {
        isPhoneLoginzss:false,
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl';
  .zssLoginContainer
    width 100vw
    height 100vh
    background-color #eee
    .zssLoginInner
      .zssLoginHeader
        width 92vw
        padding 0 4vw
        display flex
        background-color #fff
        div
          width 100%
          height 36px
          line-height 36px
          text-align center
          position relative
          font-size 14px
          &>a
            color #333
          &.zssActive::after
            position absolute
            width 100%
            height 4px
            content ''
            display table
            background-color #FFC300
      .line
        width 100vw
        height 4px
        background-color #ddd
      .zssLoginContent
        width 100vw
        
        
        
        // 登录
        .zssByUsername,.zssByPhone
          width 100%
          height 100%
          padding 0 10px
          background-color #fff
          box-sizing border-box 
          .zssUsername,.zssPhone
            bottom-border-1px(#333)
            position relative       
          &>div
            display block
            width 100%
            box-sizing border-box
            font-size 15px
            padding 6px
            height 43px
            &>input 
              width 100%
              height 100%
              border-radius 5px
              padding-left 4px
              outline none
              &:focus
                background-color #eee

          .zssPhoneCode
            input 
              background-color rgb(235, 235, 228)
          .zssPhone
            display flex
            justify-content space-between
            &>input 
              width 65%
            &>.zssGetCode
              width 30%
              height 30px
              border-radius 4px
              border 0
              color #999
              font-size 14px
              &.zssAbled
                border 1px solid #e54847
                color #e54847
                background-color #fff  
        .zssLoginButton
          margin 14px 3vw
          width 94vw
          height 30px
          background-color  #e54847
          color #fff
          font-size 14px
          &.enabled
            background-color #999



      .zssLoginFooter
        &>div
          width 100vw
          box-sizing border-box
          height 28px
          padding 0 3vw 
          line-height 28px
          text-align center
          font-size 14px
          color #FE8C00
          &.zssHotLine
            color #333
            a
              color #e54847
          .zssRegister
            float left 
          .zssFindPwd
            float right
           


        


          
             
            
              

            
            
        

 
</style>
