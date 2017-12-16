import Vue from 'vue'
import Router from 'vue-router'
import AllShop from '@views/allShop'
import Shop from '@views/shop'

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
    }
  ]
})
