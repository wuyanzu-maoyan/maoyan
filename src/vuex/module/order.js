//用户模块
import {reqLoginByPhone} from '../../api/index';
import {SAVE_SEATSNUM} from '../mutation-types';
import router from '../../router/index';
export default {
  state:{
    seatsNumList:JSON.parse(sessionStorage.getItem('seat')) || {},
  },
  mutations:{
    [SAVE_SEATSNUM](state,{hall,seatsNum}){
      state.seatsNumList[hall] = seatsNum;
      console.log(state.seatsNumList);
      sessionStorage.setItem('seat',JSON.stringify(state.seatsNumList));
    },
    
  },
  actions:{
    
  },
  getters:{

  }
}