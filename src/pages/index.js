// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'  // 兼容低端安卓机
import $ from 'zepto'
import '../assets/js/zepto/fx'
import FastClick from 'fastclick'

import Vue from 'vue'
import '../assets/js/filter/filters'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import App from '../App'
import router from '../router'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
FastClick.attach(document.body)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
