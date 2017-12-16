// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'zepto'
import '../assets/js/zepto/fx'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import App from '../App'
import router from '../router'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
