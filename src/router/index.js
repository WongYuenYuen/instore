import Vue from 'vue'
import Router from 'vue-router'
import AllShop from '@views/allShop'
import Shop from '@views/shop'
import Car from '@views/car'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Shop
    },
    {// 主页
      path: '/allShop',
      name: 'allShop',
      component: AllShop
    },
    {// 店面
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {// 店面
      path: '/car',
      name: 'car',
      component: Car
    }
  ]
})
