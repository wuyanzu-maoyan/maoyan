
import {reqCinemaDetail} from '@/api'
import {RECEIVE_CINEMA_DETAIL} from '../mutation-types'

export default {
  state:{
    cinemaDetail: {} //影院详情的对象
  },
  mutations:{
    [RECEIVE_CINEMA_DETAIL] (state, obj){
      state.cinemaDetail = obj
    }
  },
  actions:{
    async getCinemaDetail({commit}, id){
      
      let result = await reqCinemaDetail()
      console.log(result);
      if(result.code === 0){
        const cinemaDetail = result.data
        let obj = cinemaDetail.find(item => item.cinemaId == id)
        commit(RECEIVE_CINEMA_DETAIL, obj)
      }
    }
  },
  getters:{

  }
}