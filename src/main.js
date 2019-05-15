import Vue from 'vue'
import router from './router'
import store from './store'
import render from '@modules/routerView'
// import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render
}).$mount('#app')
