<template>
  
  <div class="zssLoginContainer">
    <!-- <Header title="猫眼电影"></Header> -->

    <!-- 登录内容 -->
    <div class="zssLoginInner">
      <!-- 错误提示 -->
      <div class='zssErrorTip' v-show="zssErrorTip">
        <span >{{zssErrorTip}}<a href="" @click.prevent="$router.push('/findpassword')">找回密码</a>？
        </span>
      </div>
      <!-- 登录的头部：登录方式切换 -->
      <div class="zssLoginHeader">
        <div class=' zssLoginMethod' :class="{zssActive:!isPhoneLoginZss}" @click="isPhoneLoginZss=false">
          <a href="javascript:;" >美团账号登录</a>
        </div>
        <div class='zssLoginMethod' :class="{zssActive:isPhoneLoginZss}" @click="isPhoneLoginZss=true">
          <a href="javascript:;" >手机验证登录</a>
        </div>    
      </div>
  
      <div class="line"></div>

      <!-- 登录内容区 -->
      <div class="zssLoginContent">
        
        <!-- 用户名登录 -->
        <div class='zssByUsernameContainer' v-if="!isPhoneLoginZss">
          <div class='zssByUsername'>
            <div class='zssUsername'>
              <input  type="text" 
                placeholder="账户名/手机号/Email" 
                v-model="usernameZss"
                name="usernameZss" v-validate="{required: true,regex:/^1\d{10}$/}"
              >
              
            </div>
            <div class='zssPwd'>
              <input  type="password" placeholder="请输入您的密码" 
                v-model="pwdZss"
                name="pwdZss" v-validate="{required: true,regex:/^[a-z0-9]+$/i}"
              >
              
            </div>
          </div>
          <mint-button class='zssLoginButton' @click.prevent="loginByUsernameZss">登录</mint-button>
        </div>
        <!-- 手机号登录 -->
        <div class='zssByPhoneContainer' v-if="isPhoneLoginZss">
          <div class='zssByPhone'>
            <div class='zssPhone'>
              <input  type="text" placeholder="请输入手机号" v-model="phoneZss"
                name="phoneZss" v-validate="{required: true,regex:/^1\d{10}$/}"
              >
              <button class="zssGetCode" :class="{zssAbled:isRightPhoneZss}" @click.prevent="sendCodeZss">发送验证码</button>
            </div>
            <div class='zssPhoneCode'>
              <input  type="text" placeholder="请输入短信验证码" v-model="codeZss"
                name="codeZss" v-validate="'required'"
              >
            </div>
          </div>
          <mint-button class='zssLoginButton ' @click.prevent="loginByPhone" :class="{enabled:!isRightPhoneZss}">登录</mint-button>
        </div>
        
      </div>

      <!-- 登录的footer -->
      <div class="zssLoginFooter">
        <div>
          <span class='zssRegister' @click="$router.push('/register')">立即注册</span>
          <span class='zssFindPwd' @click="$router.push('/findpassword')">找回密码</span>
        </div>
        <div class='zssHotLine'>© 猫眼电影 客服电话：<a href="" >400-670-5335</a></div>
        

      </div>

      <!-- 滑块 -->
      <div class="verifySliderZss" v-if="isShowSilderZss">
        <VerifySlider @success="successHandler" class='sliderBlockZss' />
      </div>
      
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { Toast } from 'mint-ui';
  import {reqPhoneCode,reqLoginByPhone,reqAutoLogin} from '../../api/index';
  import {mapState} from 'vuex';
  export default {
    async mounted() {
      //发送自动登录请求
      if(this.token){
        const result = await reqAutoLogin()
        console.log(result);
        if(result.code===0){
          //已经登录过则直接跳转个人中心
          this.$router.replace('/personal');
        }
      }
      
    },
    
    data() {
      return {
        isPhoneLoginZss:false,
        usernameZss:'',
        pwdZss:'',//登录密码为数字和英文组成
        phoneZss:'',
        codeZss:'',
        zssErrorTip:'',
        
        isShowSilderZss:false,//控制滑块的消失隐藏
      }
    },
    computed: {
      isRightPhoneZss(){
        return /^1\d{10}$/.test(this.phoneZss)
      },
      ...mapState({
        token:state => state.user.token
      }),
      
    },
    methods: {
      async successHandler () {
        setTimeout(() => {
          
          this.isShowSilderZss = false;
        }, 1000);  
        //发送登录请求
        const {usernameZss,pwdZss} = this;
        const result = await reqLogin({phone:usernameZss,password:pwdZss});
        console.log(result);
        const {code,msg,data} = result;
        
        if(code===0 ){
          //登录成功，跳转个人中心
          console.log('123');
          this.$router.replace('/personal');
          
        }
      },
      //用户名密码登录
      async loginByUsernameZss(){

        const {usernameZss,pwdZss,errorsZss} = this;
        
        if(!usernameZss){
          Toast({
            message: '账号不能为空',
            position: 'top',
            duration: 1000
          });
          return 
        }
        if(!pwdZss){
          Toast({
            message: '密码不能为空',
            position: 'top',
            duration: 1000
          });
          return
        }
        const success = await this.$validator.validateAll(['usernameZss','pwdZss']);
        
        if(!success){
          this.zssErrorTip = '账号或密码错误，是否';
          return
        }
        this.isShowSilderZss = true;
        
        
        
          
        
      },

      //手机号登录
      async loginByPhone(){
        const {phoneZss,codeZss} = this;
        if(!codeZss){
          Toast({
            message: '验证码不能为空',
            position: 'top',
            duration: 1000
          });
          return
        }
        const success = await this.$validator.validateAll(['phoneZss','codeZss']);
        
        if(!success){
          this.zssErrorTip = '账号或密码错误，是否';
        }else{
          //发登录的请求
          this.$store.dispatch('getTokenZss',{phone:phoneZss,code:codeZss})
          
         
        }
      },
      //发送验证码
      async sendCodeZss(){
        const result = await reqPhoneCode(this.phoneZss);
        const {code,msg} = result;
        console.log(result);
        if(code===0){
          //发送验证码成功
          console.log('验证码发送成功');
        }else{
          console.log('验证码发送失败');
        }
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
      .zssErrorTip
        width 100vw
        height 38px
        background-color #FFF6E0
        text-align center
        line-height 38px
        color #FE8C00
        font-size 12px
        a 
          color #222
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
      .verifySliderZss
        position fixed
        background-color rgba(0,0,0,.7)
        width 100vw
        height 100vh
        z-index 9
        top 0
        left 0
        .sliderBlockZss
          position absolute
          top 50%
          left 50%
          transform translate(-50%,-50%)



        


          
             
            
              

            
            
        

 
</style>
