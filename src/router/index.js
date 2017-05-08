import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Classification from '@/components/Classification'
import ShoppingCart from '@/components/ShoppingCart'
import User from '@/components/User'
import Goods from '@/components/Goods/Goods'
import GoodsIndex from '@/components/Goods/GoodsIndex'
import GoodsDetail from '@/components/Goods/GoodsDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      children:[
          { 
            path: 'home', 
            name: 'Home',
            component: Home
          },
          { 
            path: 'classification', 
            name: 'Classification',
            component: Classification
          },{ 
            path: 'shoppingcart', 
            name: 'ShoppingCart',
            component: ShoppingCart
          }  
      ]
    }
    ,{
      path: '/goods/:id',
      name: 'Goods',
      component: Goods,
      children:[
          { 
            path: '', 
            component: GoodsIndex
          },{ 
            path: 'detail', 
            component: GoodsDetail
          }  
      ]
    },{
        path: '/*',
        redirect: '/home'
    }
  ]
})
