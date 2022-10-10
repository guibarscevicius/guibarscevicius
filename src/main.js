import Vue from 'vue'
import router from './router'
import render from '@modules/routerView'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  render
}).$mount('#app')
