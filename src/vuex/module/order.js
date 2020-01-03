//用户模块
import {reqLoginByPhone} from '../../api/index';
import {SAVE_SEATSNUM,SAVE_PHONEZSS,REMOVE_USER_INFO} from '../mutation-types';
import router from '../../router/index';
export default {
  state:{
    seatsNumList:{},
  },
  mutations:{
    [SAVE_SEATSNUM](state,{hall,seatsNum}){
      state.seatsNumList[hall] = seatsNum
    },
    
  },
  actions:{
    
  },
  getters:{

  }
}