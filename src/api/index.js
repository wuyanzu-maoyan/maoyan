import ajax from './ajax.js';

//请求北京市电影院列表信息(简要)
export const reqCinemaList = ()=>ajax.get('/getCinemaList')