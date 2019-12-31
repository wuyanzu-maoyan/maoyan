import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions.js';
import mutations from './mutations.js';
import getters from './getters.js';
import cinema from '@/vuex/module/cinema.js'
import cinemaDetail from '@/vuex/module/cinemaDetail.js'
import user from '@/vuex/module/user.js'


Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  mutations,
  getters,
  modules:{
    cinema,
    cinemaDetail,
    user
  }

})
