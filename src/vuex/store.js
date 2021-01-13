
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

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
                    if (item.article === product.article) {
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
        }
    },
    getters: {
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    }
});

export default store;