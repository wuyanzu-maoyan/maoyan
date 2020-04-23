import ajax from './ajax.js';

//请求北京市电影院列表信息(简要)
export const reqCinemaList = ()=>ajax.get('/getCinemaList');

//请求过滤信息的影院信息
export const reqFilterCinemas = ()=>ajax.get('/getFilterCinemas');

//请求城市信息
export const reqCityList = ()=>ajax.get('/getCity') 
//获取正在上映的电影
export const reqNowMoives = () => ajax.get('/getMovieOn');

//请求即将上映的电影
export const reqWillMovies = () => ajax.get('/getComingList'); 
//请求电影信息
export const reqSearchMovie = ()=>ajax.get('/getSearchMovie') 
//请求获取即将上映的电影信息
export const reqComingList = ()=>ajax.get('/getComingList')
//请求获取正在上映的电影信息 
export const reqMovieonList = ()=>ajax.get('/getMovieOn') 

//请求影院详情信息
export const reqCinemaDetail = ()=>ajax.get('/getCinemaDetail')

//请求电影详情信息
export const reqDetail = ()=>ajax.get('/getDetail')

//获取验证码
export const reqPhoneCode = (phone) => ajax.post('/send_code',{phone})

//用户名密码请求登录
export const reqLoginByUsername = (data) =>ajax.post('/login_pwd',data)

//手机号验证码登录
export const reqLoginByPhone = (data) => ajax.post('/login_code',data)

//注册发送验证码
export const reqRegister = (phone) => ajax.post('/register',{phone})

//校验验证码
export const reqCheckCode = (phone,code) => ajax.post('/checkout',{phone,code})

//注册设置密码
export const setPassword = (phone,password) => ajax.post("/set_password",{phone,password})

//自动登录
export const reqAutoLogin = () => ajax.get('/auto_login')

//请求座位信息
export const reqSeats = (data) => ajax.post('/getSeats',data,{
  headers:{isNeedToken:true}
})

//获取电影详情列表
export const reqmyOrder = () => ajax.get('/getMyOrderList',{
  headers:{isNeedToken:true}
});

//获取优惠券列表
export const reqDiscount = () => ajax.get('/getDiscount',{
  headers:{isNeedToken:true}
})
