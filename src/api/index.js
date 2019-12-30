import ajax from './ajax.js';

//请求北京市电影院列表信息(简要)
export const reqCinemaList = ()=>ajax.get('/getCinemaList');

//请求过滤信息的影院信息
export const reqFilterCinemas = ()=>ajax.get('/getFilterCinemas');

//请求城市信息
export const reqCityList = ()=>ajax.get('/getCity') 


//获取验证码
export const reqPhoneCode = (phone) => ajax.get('/sendcode',{params:{phone}})

//用户名密码请求登录
export const reqLoginByUsername = (data) =>ajax.post('/login_maoyan',data)

//手机号验证码登录
export const reqLoginByPhone = (data) => ajax.post('/login_sms',data)