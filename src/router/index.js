import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Classification from '@/components/Classification'
import ShoppingCart from '@/components/ShoppingCart'
import User from '@/components/User'
import Commodity from '@/components/commodity/Commodity'
import CommodityIndex from '@/components/Commodity/CommodityIndex'
import CommodityDetail from '@/components/Commodity/CommodityDetail'
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
      path: '/commodity/:id',
      name: 'Commodity',
      component: Commodity,
      children:[
          { 
            path: '', 
            component: CommodityIndex
          },{ 
            path: 'detail', 
            component: CommodityDetail
          }  
      ]
    },{
        path: '/*',
        redirect: '/home'
    }
  ]
})
