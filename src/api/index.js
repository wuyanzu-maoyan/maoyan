import ajax from './ajax.js';

//请求北京市电影院列表信息(简要)
export const reqCinemaList = ()=>ajax.get('/getCinemaList');

//请求过滤信息的影院信息
export const reqFilterCinemas = ()=>ajax.get('/getFilterCinemas');

//请求城市信息
export const reqCityList = ()=>ajax.get('/getCity') 
//请求获取即将上映的电影信息
export const reqComingList = ()=>ajax.get('/getComingList')
//请求获取正在上映的电影信息 
export const reqMovieonList = ()=>ajax.get('/getMovieOn') 
