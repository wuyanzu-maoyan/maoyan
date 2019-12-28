import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import store from '@/vuex/store.js'
import Header from '@/components/Header/Header.vue'


Vue.component('Header',Header)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
