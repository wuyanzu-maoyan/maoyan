import axios from 'axios';
import { MessageBox } from 'mint-ui';
import qs from 'query-string';
import store from '../vuex/store';
let instance = axios.create({
  baseURL:'/api',
  timeout:20000
})


//请求拦截器
instance.interceptors.request.use((config)=>{
  config.data = qs.stringify(config.data);
  const token = store.state.user.token;
  // console.log(token);
  config.headers['Authorization']=token;
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
    if(error.response){
      const status = error.response.status;
      console.log(status,error.response);
      if(status === 401){
        MessageBox('提示',error.response.message);
        console.log(error.response.message);
      }else if(status=== 404){
        MessageBox('提示','请求资源不存在');
      }
    }else{
      MessageBox('提示','请求失败');
    }
    
    
    return new Promise(()=>{})
  }
)

export default instance