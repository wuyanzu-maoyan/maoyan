import {SAVE_CITY_LIST,RECEIVE_RECENTLY_CITY} from '@/vuex/mutation-types.js'
import {reqCityList} from '@/api'
export default {
  state:{
    cityList: [], //a-z所有城市列表
    recentlyCity:JSON.parse(localStorage.getItem('recentlyCity'))[0] || [], //读取localStorage中存储的最近访问城市
  },
  mutations:{
    [SAVE_CITY_LIST](state,cityList){
      state.cityList = cityList
    },
    [RECEIVE_RECENTLY_CITY](state,recentlyCity){
      state.recentlyCity = recentlyCity
    }
  },
  actions:{
    //获取所有城市列表
    async getCityList({commit}){
      //请求a-z所有城市列表
      const result = await reqCityList()
       console.log(result)
      if(result.code===0){
        const cityList = result.data.city
        commit(SAVE_CITY_LIST,cityList)
      }
    },
    //保存最近访问城市
    saveRecentlyCity({commit},item){
      console.log(item)
      const code = item.code
      const name = item.name
      const city = {code,name} 
      let recentlyCity = JSON.parse(localStorage.getItem('recentlyCity')) || []
      recentlyCity.unshift(city)

      if(recentlyCity.length>3){
        // console.log('1111');
        recentlyCity.splice(recentlyCity.length-1)
      }
      //保存到localStorage中
      localStorage.setItem('recentlyCity', JSON.stringify(recentlyCity) || [] )
      commit(RECEIVE_RECENTLY_CITY,recentlyCity)
    }
  },
  getters:{

  }
}