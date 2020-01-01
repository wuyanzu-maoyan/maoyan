
import {reqCinemaDetail} from '@/api'
import {RECEIVE_CINEMA_DETAIL} from '../mutation-types'

export default {
  state:{
    cinemaDetail: {} //影院详情的对象
  },
  mutations:{
    [RECEIVE_CINEMA_DETAIL] (state, cinemaDetail){
      state.cinemaDetail = cinemaDetail
    }
  },
  actions:{
    async getCinemaDetail({commit}){
      
      let result = await reqCinemaDetail()
      console.log(result);
      if(result.code === 0){
        const cinemaDetail = result.data
        commit(RECEIVE_CINEMA_DETAIL, cinemaDetail)
      }
    }
  },
  getters:{

  }
}