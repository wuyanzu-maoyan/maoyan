<template>
  <div class='zssRegisterContainer'>
    <!-- <Header title="猫眼电影"></Header> -->
    <div class='zssTip' v-if="errorMsg">{{errorMsg}}</div>
    <div class="zssRegisterHeader">
      <span :class="{ active: active===1 }">输入手机号</span> >
      <span :class="{ active: active===2 }">输入验证码</span> >
      <span :class="{ active: active===3 }">设置密码</span> 
    </div>
    <div class='zssPhoneInput'>
      <input type="text" v-if="active===1" placeholder="请输入您的手机号" v-model="phone"> 
      <input type="text" v-if="active===2" placeholder="请输入验证码" v-model="code"> 
      <input type="password" v-if="active===3" placeholder="请输入密码" v-model="pwd">
      <div class="line" v-if="active===3"></div>
      <input type="password" v-if="active===3" placeholder="请确认密码" v-model="rePwd"> 
    </div>
    <div class='zssArgument' v-if="active===1">
      <input type="checkbox" class='zssArgee' v-model="agreement"></input>
      <span >我已阅读并同意<a href="">《美团网用户协议》</a></span>
    </div>

    <mint-button v-if="active===1" class='zssRegisterGetCode active' @click="getCode">获取验证码</mint-button>
    <mint-button v-if="active===2" class='zssRegisterGetCode active' @click="setPassword">设置密码</mint-button>
    <mint-button v-if="active===3" class='zssRegisterGetCode active' @click="register">注册</mint-button>
    
    <div class='zssHotLine'>© 猫眼电影 客服电话：<a href="" >400-670-5335</a></div>
    
  </div>
</template>

<script type="text/ecmascript-6">
  import { MessageBox } from 'mint-ui';
  import {reqRegister,reqCheckCode,setPassword} from '../../api/index';
  export default {
    data() {
      return {
        errorMsg:'',
        phone:'',
        active:1,
        agreement:true,
        code:'',
        pwd:'',
        rePwd:''
      }
    },
    methods: {
      async getCode(){
        if(this.phone.length!==11){
          if(this.phone){
            this.errorMsg = '手机号不正确'
          }else{
            this.errorMsg = '手机号不能为空'
          } 
        }else{
          if(!this.agreement){
            this.errorMsg = '请勾选同意协议'
            return 
          }
          const result = await reqRegister(this.phone);
          let {code,data,msg} = result;
          if(code===0){
            this.active = 2;
          }else{
            this.errorMsg = msg;
          }
        }
      },
      async setPassword(){
        if(this.code){
          const result = await reqCheckCode(this.phone,this.code);
          let {code,msg,data} = result;
          if(code==0){
            this.active = 3;
          }else{
            this.errorMsg = msg;
          }
        }else{
          this.errorMsg = '验证码不能为空'
        }
      },
      async register(){
        if(!this.pwd){
          this.errorMsg = '密码不能为空'
          return 
        }
        if(this.pwd===this.rePwd){
          const result = await setPassword(this.phone,this.pwd);
          let {code,msg} = result;
          if(code===0){
            this.$router.replace('/login');
          }else{
            MessageBox.alert('提示','您的网络不好，请稍好重试'); 
          }
        }
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .zssRegisterContainer
    background-color #eee
    width 100vw
    height 100vh
    .zssTip
      width 100%
      height 38px
      line-height 38px
      text-align center
      background-color #FFF6E0
      color #D78900
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
      line-height 30px
      background-color #fff
      padding 6px 2vw
      margin 10px 0
      font-size 15px
      .line
        width 100%
        height 1px
        background-color #eee
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
        font-weight bold
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
