//影院模块 
import {SET_CINEMA_LIST,SET_FILTER_CINEMAS,SET_ISSUBWAY,SAVE_TYPE_OBJ,SAVE_CINEMA_LIST_ORIGIN} from '@/vuex/mutation-types.js'
import {reqCinemaList,reqFilterCinemas} from '@/api'

export default {
  state:{
    cinemaList:[],//北京电影院列表(简要)
    cinemaListOrigin:[],//北京电影院列表(简要) 初始信息
    filterCinemas:[], //影院过滤信息
    isSubway:0, //是否是使用地铁类型检索
    typeObj:{}, // 用于放检索条件的对象
    isFirst:true //是否是初始化的北京电影院列表
  },
  mutations:{
    [SET_CINEMA_LIST](state,{cinemaArr,type=true}){ //设置北京电影院列表(简要)
      console.log(cinemaArr)
      state.cinemaList = cinemaArr;
      state.isFirst = type
    },
    [SET_FILTER_CINEMAS](state,filterCinemas){ //设置影院过滤信息
        state.filterCinemas = filterCinemas;
    },
    [SET_ISSUBWAY](state,isSubway){ //设置是否是选择地铁
      state.isSubway = isSubway
    },
    [SAVE_TYPE_OBJ](state,{key,value}){ //设置查找条件类型
      state.typeObj[key] = value
    },
    [SAVE_CINEMA_LIST_ORIGIN](state,{cinemaListOrigin}){
      state.cinemaListOrigin = cinemaListOrigin
    }
  },
  actions:{
   async getCinemaListOrigin({commit}){ //异步获取北京电影院列表(简要)
    let result = await reqCinemaList();
    const {code,data} = result;
    if(code === 0){
      let cinemaListOrigin = data.cinemas
      commit(SAVE_CINEMA_LIST_ORIGIN,{cinemaListOrigin})
    }
    },
   async getFilterCinemas({commit}){ //异步获取影院过滤信息
    let result = await reqFilterCinemas()
    const {code,data} = result;
    if(code === 0){
      commit(SET_FILTER_CINEMAS,data);
    }
    },
    getSearchContent({commit,state}){
      let cinemas  = []; //用来放 '全部类型的电影'
      let type = false
      let cinemaArr = []; //用来放搜索出来的电影列表数组
      //addr subway tag hallType
      //全城
      if(state.typeObj.addr && state.typeObj.addr !== '全部'){
        if(state.cinemaList.length && state.isFirst){
          cinemaArr = state.cinemaList.filter((item,value)=>{
            return item.addr.includes(state.typeObj.addr)  
         })
         console.log(cinemaArr,'全城cinemalist')
         if(cinemaArr.length){
           commit(SET_CINEMA_LIST,{cinemaArr,type})
           if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
             return
           }
         }else if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
          commit(SET_CINEMA_LIST,{cinemaArr:[],type})
          return
         }
        }else{
          cinemaArr = state.cinemaListOrigin.filter((item,value)=>{
            return item.addr.includes(state.typeObj.addr)  
         })
         console.log(cinemaArr,'全城没有cinemalist')
         if(cinemaArr.length){
           commit(SET_CINEMA_LIST,{cinemaArr,type})
           if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
             return
           }
          //return
         }else if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
          commit(SET_CINEMA_LIST,{cinemaArr:[],type})
          return
         }
        }
       
      }else if(state.typeObj.addr === '全部'){
        if(state.cinemaList.length){
          state.cinemaList.forEach((cinema,index1)=>{
            if(cinema.addr){
              cinemas.push(cinema)
            }
          })
          console.log(cinemas,'------------有length')
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
            //   return
            // }
            return
          }
        }else{
          state.cinemaListOrigin.forEach((cinema,index1)=>{
            if(cinema.addr){
              cinemas.push(cinema)
            }
          })
          console.log(cinemas,'------------没有length')
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.brand && !state.typeObj.tag && !state.typeObj.hallType){
            //   return
            // }
            return
          }
        }
      }
      //品牌
      if(state.typeObj.brand && state.typeObj.brand !== '全部'){
        if(state.cinemaList.length && state.isFirst){
          cinemaArr = state.cinemaList.filter((item,value)=>{
            return item.nm.includes(state.typeObj.brand)
          })
          console.log(cinemaArr,'品牌cinemaArr')
          if(cinemaArr.length){
            commit(SET_CINEMA_LIST,{cinemaArr,type})
            if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
              return
            }
          }else if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
          return
          }
        }else{
          cinemaArr = state.cinemaListOrigin.filter((item,value)=>{
            return item.nm.includes(state.typeObj.brand)
          })
          console.log(cinemaArr,'品牌没有cinemaList')
          if(cinemaArr.length){
            commit(SET_CINEMA_LIST,{cinemaArr,type})
            if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
              return
            }
            //return
          }else if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
          return
          }
        }
      }else if(state.typeObj.brand === '全部'){
       if(state.cinemaList.length){
        state.cinemaList.forEach((cinema,index1)=>{
          if(cinema.nm){
            cinemas.push(cinema)
          }
        })
        console.log(cinemas,'--------品牌')
        if(cinemas.length){
          commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
          // if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
          //   return
          // }
          return
        }
       }else{
        state.cinemaListOrigin.forEach((cinema,index1)=>{
          if(cinema.nm){
            cinemas.push(cinema)
          }
        })
        console.log(cinemas,'--------品牌')
        if(cinemas.length){
          commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
          // if(!state.typeObj.addr && !state.typeObj.tag && !state.typeObj.hallType){
          //   return
          // }
          return
        }
       }
      }
      //特色功能
      if(state.typeObj.tag && state.typeObj.tag !== '全部'){
       if(state.cinemaList.length && state.isFirst){
        if(state.typeObj.tag === '可改签'){
          cinemaArr = state.cinemaList.filter((item,index)=>{
            return item.tag.endorse === 1
           })
           if(cinemaArr.length){
             commit(SET_CINEMA_LIST,{cinemaArr,type})
             if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
               return
             }
             
           }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
            return
           }
         }
         if(state.typeObj.tag === '可退票'){
           cinemaArr = state.cinemaList.filter((item,index)=>{
             return item.tag.allowRefund === 1
            })
            if(cinemaArr.length){
              commit(SET_CINEMA_LIST,{cinemaArr,type})
              if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
               return
             }
            }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
              commit(SET_CINEMA_LIST,{cinemaArr:[],type})
              return
             }
          }
       }else{
        if(state.typeObj.tag === '可改签'){
          cinemaArr = state.cinemaListOrigin.filter((item,index)=>{
            return item.tag.endorse === 1
           })
           if(cinemaArr.length){
             commit(SET_CINEMA_LIST,{cinemaArr,type})
             if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
               return
             }
             //return
           }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
            return
           }
         }
         if(state.typeObj.tag === '可退票'){
           cinemaArr = state.cinemaListOrigin.filter((item,index)=>{
             return item.tag.allowRefund === 1
            })
            if(cinemaArr.length){
              commit(SET_CINEMA_LIST,{cinemaArr,type})
            //   if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
            //    return
            //  }
            return
            }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
              commit(SET_CINEMA_LIST,{cinemaArr:[],type})
              return
             }
          }
       }
      }else if(state.typeObj.tag === '全部'){
        if(state.cinemaList.length){
          state.cinemaList.forEach((cinema,index1)=>{
            if(cinema.tag.allowRefund || cinema.tag.endorse){
              cinemas.push(cinema)
            }
          })
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
            //   return
            // }
            return
          }
        }else{
          state.cinemaListOrigin.forEach((cinema,index1)=>{
            if(cinema.tag.allowRefund || cinema.tag.endorse){
              cinemas.push(cinema)
            }
          })
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.hallType){
            //   return
            // }
            return
          }
        }
      }
      //特殊厅
    if(state.typeObj.hallType && state.typeObj.hallType !== '全部'){
       if(state.cinemaList.length && state.isFirst){
        state.cinemaList.forEach((item,index)=>{
          if(item.tag.hallType.length){
            item.tag.hallType.forEach((hall,index)=>{
              if(hall == state.typeObj.hallType){
                cinemaArr.push(item)
              }
            })
          }
      })
      if(cinemaArr.length){
        commit(SET_CINEMA_LIST,{cinemaArr,type})
        if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
          return
        }
      }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
        commit(SET_CINEMA_LIST,{cinemaArr:[],type})
        return
      }
    }else{
        state.cinemaListOrigin.forEach((item,index)=>{
          if(item.tag.hallType.length){
            item.tag.hallType.forEach((hall,index)=>{
              if(hall == state.typeObj.hallType){
                cinemaArr.push(item)
              }
            })
          }
      })
      if(cinemaArr.length){
        commit(SET_CINEMA_LIST,{cinemaArr,type})
        if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
          return
        }
       // return
      }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
        commit(SET_CINEMA_LIST,{cinemaArr:[],type})
        return
      }
       }
      }else if(state.typeObj.hallType === '全部'){
        if(state.cinemaList.length){
          state.cinemaList.forEach((cinema,index1)=>{
            if(cinema.tag.hallType.length){
              cinemas.push(cinema)
            }
          })
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
            //   return
            // }
            return
          }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
            return
          }
        }else{
          state.cinemaListOrigin.forEach((cinema,index1)=>{
            if(cinema.tag.hallType.length){
              cinemas.push(cinema)
            }
          })
          if(cinemas.length){
            commit(SET_CINEMA_LIST,{cinemaArr:cinemas,type})
            // if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
            //   return
            // }
            return
          }else if(!state.typeObj.addr && !state.typeObj.brand && !state.typeObj.tag){
            commit(SET_CINEMA_LIST,{cinemaArr:[],type})
            return
          }
        }
      }

     
      //commit(SET_CINEMA_LIST,{cinemaArr:[],type})
      if(!cinemas.length && !cinemaArr){
        commit(SET_CINEMA_LIST,{cinemaArr:[],type})
      }
      
    }
   
  },
  getters:{
    subway(state){ //地铁

        return state.filterCinemas.subway
  
    },
    district(state){ //行政区
      return state.filterCinemas.district
    }
    
  }
}