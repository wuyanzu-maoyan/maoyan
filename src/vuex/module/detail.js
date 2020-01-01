
import { reqDetail } from "../../api";
import {RECEIVE_DETAIL} from '../mutation-types'

export default {
  state:{
    detail: {}  //电影详情的对象
  },
  mutations:{
    [RECEIVE_DETAIL] (state, detail){
      state.detail = detail
    }
  },
  actions:{
    async getDetail({commit}){
      let result = await reqDetail()
      console.log(result);
      if(result.code===0){
        let detail = result.data.detailMovie
        commit(RECEIVE_DETAIL, detail)
      }
      
    }
  },
  getters:{

  }
}