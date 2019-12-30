//影院模块 
import {SET_CINEMA_LIST,SET_FILTER_CINEMAS} from '@/vuex/mutation-types.js'
import {reqCinemaList,reqFilterCinemas} from '@/api'

export default {
  state:{
    cinemaList:[],//北京电影院列表(简要)
  },
  mutations:{
    [SET_CINEMA_LIST](state,cinemaList){
      state.cinemaList = cinemaList;
    } 
  },
  actions:{
   async getCinemaList({commit}){
     let result = await reqCinemaList();
     const {code,data} = result;
     if(code === 0){
       commit(SET_CINEMA_LIST,data.cinemas)
     }
    }
  },
  getters:{

  }
}