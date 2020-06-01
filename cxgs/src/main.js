import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icons'
import './router/premit'
import md5 from 'js-md5'
import fastClick from 'fastclick'

Vue.prototype.$md5 = md5

Vue.config.productionTip = false
//解决移动端300ms延迟
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
