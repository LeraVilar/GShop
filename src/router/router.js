import Vue from 'vue'
import Router from 'vue-router'


import vCart from '../components/v-cart'
import vMainPage from '../components/v-main-page'

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
    }
]
})

export default router;