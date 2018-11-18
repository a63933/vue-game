import Vue from 'vue'
import Element from 'element-ui'
import App from './App'
import router from './router'

Vue.config.productionTip = false

Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
