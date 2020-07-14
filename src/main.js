import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//import Banner from '@/pages/Home/Banner'
/////全局///////
Vue.config.productionTip = false
// Vue.component('Banner',Banner)
new Vue({
  el:'#app',
  render: h => h(App),
  router,
  store
})

