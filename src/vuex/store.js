import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
// import _ from 'lodash';


Vue.use(Vuex);

const store = new Vuex.Store ({
    state: {
        products: [],
        cart: []
    },
    mutations: {
        SET_PRODUCTS: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            if(state.cart.length) {
                let isProductExists = false;
                state.cart.map(function (item) {
                    if (item.id === product.id) {
                        isProductExists = true;
                        item.quantity++
                    }
                })
                if (!isProductExists) {
                    state.cart.push(product)
                }
            }else {
                state.cart.push(product)
            }
            
        },
        INCREM: (state, index) => {
            state.cart[index].quantity++
        },
        DECREM: (state, index) => {
            if (state.cart[index].quantity > 1) {
                state.cart[index].quantity--
            }
        },
        REMOVE_FROM_CART: (state, index) => {
                state.cart.splice(index, 1)
        }
    },
    actions: {
        GET_PRODUCTS_FROM_API({commit}) {
            return Axios('http://localhost:3000/products', {
             method: "GET"
            })  
            .then((products) => {
                commit('SET_PRODUCTS', products.data);
                return products.data;
            })
            .catch((error) => {
                console.log(error)
                return error;
            })
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        },
        INCREM_ITEM({commit}, index) {
            commit('INCREM', index)
        },
        DECREM_ITEM({commit}, index) {
            commit('DECREM', index)
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        },
        PROD_BY_ID: state => id => {
            return state.products.find(products => products.id == id);
            
    },
}
});

export default store;