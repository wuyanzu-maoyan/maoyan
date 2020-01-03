
import { reqDetail } from "../../api";
import {RECEIVE_DETAIL} from '../mutation-types'

export default {
  state:{
    detail: {}  //电影详情对象
  },
  mutations:{
    [RECEIVE_DETAIL] (state, obj){
      state.detail = obj
    }
  },
  actions:{
    async getDetail({commit}, id){
      let result = await reqDetail()
      console.log(result);
      if(result.code===0){
        let detail = result.data
        let obj = detail.find(item => item.id == id)
        commit(RECEIVE_DETAIL, obj)
      }
      
    }
  },
  getters:{

  }
}