import Vue from 'vue'
import Router from 'vue-router'


import vCart from '../components/v-cart'
import vMainPage from '../components/v-main-page'
import ProductsCard from '../components/v-productsCard'
import filterCategory from '../components/v-filterCategory'
Vue.use(Router);

let router = new Router({
    routes: [{
        path: '/',
        name: 'mainpage',
        component: vMainPage
    },
    {
        path: '/cart',
        name: 'cart',
        component: vCart,
        props: true
    },
    {
        path: '/products/:id',
        name: 'productsCard',
        component: ProductsCard
    },
    { 
        path: '/categories/',name: 'cat', component: filterCategory,
        children: ''
    }
]
})

export default router;