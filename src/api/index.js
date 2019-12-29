import ajax from './ajax.js';

//请求北京市电影院列表信息(简要)
export const reqCinemaList = ()=>ajax.get('/getCinemaList')

//请求城市信息
export const reqCityList = ()=>ajax.get('/getCity') 