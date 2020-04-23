//用户模块
import Cookies from 'js-cookie'
import {SAVE_TOKENZSS,SAVE_PHONEZSS,REMOVE_USER_INFO} from '../mutation-types';
export default {
  state:{
    token:document.cookie.split('=')[1] || '',
    phone:'',
  },
  mutations:{
    [SAVE_TOKENZSS](state,token){
      state.token = token
    },
    [SAVE_PHONEZSS](state,phone){
      state.phone = phone
    },
    [REMOVE_USER_INFO](state){
      state.token = '',
      state.phone = ''
    }
  },
  actions:{
    async getTokenZss({commit},user){
      let token = Cookies.get('zss_token')
      commit(SAVE_TOKENZSS,token);
      commit(SAVE_PHONEZSS,user.phone);
    },
    removeUserInfo({commit}){
      Cookies.remove('zss_token')
      commit(REMOVE_USER_INFO)
    }
  },
  getters:{

  }
}