import Vue from 'vue'
import App from './App.vue'
import store from '@/vuex/store.js'
import router from './router/index';
import Header from '@/components/Header/Header.vue'

Vue.component('Header',Header)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
