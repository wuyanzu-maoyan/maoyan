import axios from 'axios';
import qs from 'query-string';

let instance = axios.create({
  baseURL:'/api',
  timeout:20000
})


//请求拦截器
instance.interceptors.request.use((config)=>{
  config.data = qs.stringify(config.data);
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
    console.log('请求失败')
    return new Promise(()=>{})
  }
)

export default instance