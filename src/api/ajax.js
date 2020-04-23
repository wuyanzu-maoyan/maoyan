import axios from 'axios';
import { MessageBox } from 'mint-ui';
import qs from 'query-string';
import store from '../vuex/store';
import router from '../router/index';
let instance = axios.create({
  baseURL:'/api',
  // baseURL:'http://kangjiachang.utools.club',
  timeout:60000
}) 


//请求拦截器
instance.interceptors.request.use((config)=>{
  config.data = qs.stringify(config.data);
  const token = store.state.user.token;
  const isNeedToken = config.headers.isNeedToken;
  if(token){
    config.headers['Authorization']=token;
  }else{
    if(isNeedToken){
      //没有token但又需要token的请求
      //此时就不会发请求
   
      throw new Error('请先登录,再执行后续操作')
    }
  }
  // console.log(token);
  
  return config
})

//响应拦截器
instance.interceptors.response.use(
  (response)=>{
    //console.log(response.data);
    return response.data
  },
  (error)=>{
    //统一处理异常 返回panding状态的promise 中断promise链
   
    //发了请求的错误
    if(error.response){
      const status = error.response.status;
      console.log(status,error.response);
      if(status === 401){
        MessageBox('提示',error.response.message);
        console.log(error.response.message);
      }else if(status=== 404){
        MessageBox('提示','请求资源不存在');
      }else{
        MessageBox('提示',error.message);
        console.log();
      }
    }else{
      router.replace('/login')
      MessageBox('提示',error.message);
    }
    
    
    return new Promise(()=>{})
  }
)

export default instance