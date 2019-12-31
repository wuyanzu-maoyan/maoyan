//用户模块
import {reqLoginByPhone} from '../../api/index';
import {SAVE_TOKENZSS,SAVE_PHONEZSS} from '../mutation-types';
import router from '../../router/index';
export default {
  state:{
    token:localStorage.getItem('token') || '',
    phone:'',

  },
  mutations:{
    [SAVE_TOKENZSS](state,token){
      state.token = token
    },
    [SAVE_PHONEZSS](state,phone){
      state.phone = phone
    }
  },
  actions:{
    async getTokenZss({commit},user){
      const result = await reqLoginByPhone(user);
      const {code,data,msg} = result;
      console.log(result);
      if(code===0){
        router.replace('/personal');
        localStorage.setItem('token',data.token);
        commit(SAVE_TOKENZSS,data.token);
        commit(SAVE_PHONEZSS,user.phone);
      }
    }
  },
  getters:{

  }
}