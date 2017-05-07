import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Classification from '@/components/Classification'
import ShoppingCart from '@/components/ShoppingCart'
import User from '@/components/User'
import GoodsIndex from '@/components/Goods/GoodsIndex'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
    ,{
      path: '/index',
      name: 'Index',
      component: Index
    }
    ,{
      path: '/classification',
      name: 'Classification',
      component: Classification
    }
    ,{
      path: '/shoppingcart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },{
      path: '/goods/:id',
      name: 'GoodsIndex',
      component: GoodsIndex
    }
  ]
})
