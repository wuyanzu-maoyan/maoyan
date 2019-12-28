import Vue from 'vue'
import { Button } from 'mint-ui';

import App from './App.vue'
import store from '@/vuex/store.js'

import Header from '@/components/Header/Header.vue'
import 'lib-flexible' // flexible会自动根据设备情况动态设置rem的值的大小
import router from '@/router'

Vue.component('mint-button', Button);
Vue.component('Header',Header)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
