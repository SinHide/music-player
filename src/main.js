import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import router from './router'
import fastclick from 'fastclick'
import vueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl' // 全局引入stylus

fastclick.attach(document.body) // 解决移动端点击延迟

Vue.use(vueLazyLoad, {
  loading: require('common/image/default.png')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
