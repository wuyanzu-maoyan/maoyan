//影院模块 
import {SET_CINEMA_LIST,SET_FILTER_CINEMAS,SET_ISSUBWAY,SAVE_TYPE_OBJ} from '@/vuex/mutation-types.js'
import {reqCinemaList,reqFilterCinemas} from '@/api'

export default {
  state:{
    cinemaList:[],//北京电影院列表(简要)
    filterCinemas:[], //影院过滤信息
    isSubway:0, //是否是使用地铁类型检索
    typeObj:{} // 用于放检索条件的对象
  },
  mutations:{
    [SET_CINEMA_LIST](state,cinemaList){ //设置北京电影院列表(简要)
      state.cinemaList = cinemaList;
    },
    [SET_FILTER_CINEMAS](state,filterCinemas){ //设置影院过滤信息
        state.filterCinemas = filterCinemas;
    },
    [SET_ISSUBWAY](state,isSubway){
      state.isSubway = isSubway
    },
    [SAVE_TYPE_OBJ](state,{key,value}){
      state.typeObj[key] = value
    }
  },
  actions:{
   async getCinemaList({commit}){ //异步获取北京电影院列表(简要)
    let result = await reqCinemaList();
    const {code,data} = result;
    if(code === 0){
      commit(SET_CINEMA_LIST,data.cinemas)
    }
    },
   async getFilterCinemas({commit}){ //异步获取影院过滤信息
    let result = await reqFilterCinemas()
    const {code,data} = result;
    if(code === 0){
      commit(SET_FILTER_CINEMAS,data);
    }
    }
   
  },
  getters:{
    subway(state){ //地铁

        return state.filterCinemas.subway
  
    },
    district(state){ //行政区
      return state.filterCinemas.district
    }
    
  }
}