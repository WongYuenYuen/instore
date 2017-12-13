// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import $ from 'zepto'
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import App from '../App'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
