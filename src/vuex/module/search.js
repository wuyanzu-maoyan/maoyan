import {SAVE_MOVIE_LIST} from '@/vuex/mutation-types.js'
import {reqSearchMovie} from '@/api'
export default {
  state:{
    movieList: [], //匹配电影列表
  },
  mutations:{
    [SAVE_MOVIE_LIST](state,movieList){
      state.movieList = movieList
    }
  },
  actions:{
    //获取所有电影列表
    async getMovieList({commit},value){
      // console.log(value)
      const result = await reqSearchMovie()
      if(result.code === 0){
        const movieList = result.data.movies.filter((item,index)=> item.nm.includes(value))
        commit(SAVE_MOVIE_LIST,movieList)
      }
    },
  },
  getters:{

  }
}