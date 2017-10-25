import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import fastclick from 'fastclick'

import 'common/stylus/index.styl' // 全局引入stylus

fastclick.attach(document.body) // 解决移动端点击延迟

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
