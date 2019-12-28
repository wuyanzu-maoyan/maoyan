import axios from 'axios';

let instance = axios.create({
  baseURL:'http://localhost:3000',
  timeout:20000
})


//请求拦截器
instance.interceptors.request.use((config)=>{
  return config
})

//响应拦截器
instance.interceptors.response.use(
  (response)=>{

    return response.data
  },
  (error)=>{
    //统一处理异常 返回panding状态的promise 中断promise链
    console.log('请求失败')
    return new Promise(()=>{})
  }
)

export default instance