<template>
    <div class="v-cart">
        <div class="v-cart__empty-cart" v-if="CART.length === 0">
            <p>Your basket is empty!
Pick out something from the shop.</p>
            <img src="../assets/img/empty-cart.svg" alt="">
        </div>
        <div class="v-cart__items" v-else>
        <v-cart-item
        
            v-for="(item, index) in cart_data"
            :key="item.id"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @decrem="decrem(index)"
            @increm="increm(index)"
        />
        </div>
        <div class="v-cart__order" v-if="CART.length > 0">
        <div class="v-cart__order-total">ИТОГО: {{cartTotal}}</div>
        <button>Заказать</button>
        </div>
    </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'
import VCartItem from './v-cart-item'

export default {
    name: 'v-Cart',
    components: {
        VCartItem

    },
    props: {
        cart_data: {
            type: Array,
            default() {
                return []
            }
        }
    },
    
    computed:{
        ...mapGetters([
            'CART',
            'PROD_BY_ID'
        ]),
        cartTotal() {
            return this.cart_data.reduce((res, item) => res + item.price * item.quantity, 0)
        }
    },
    methods: {
        ...mapActions([
            'DELETE_FROM_CART',
            'INCREM_ITEM',
            'DECREM_ITEM'
        ]),
        increm(index) {
            this.INCREM_ITEM(index)
        },
        decrem(index) {
            this.DECREM_ITEM(index)
        },
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        },
    },
    data () { 
        return{
            cart_item_data: []
        }
    }
}
</script>
<style lang="scss">
    .v-cart {
        display: flex;
        justify-content: space-evenly;
        max-width: 1440px;
        margin: 0 auto;
    &__items {
        flex-basis: 70%;
    }
    &__empty-cart {
        display: flex;
        margin: 100px auto;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        & p {
            font-size: 46px;
            max-width: 500px;
            text-align: center;
        }
        & img {
            width: 300px;
            
        }
    }
    &__order {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-top: 100px;
        border: 1px solid green;
        height: 150px;
        flex-basis: 20%;
        text-align: center;
        &-total {
            font-size: 36px;
            margin-top: 15px;
        }
        & button {
            width: 100%;
            height: 40px;
        }
    }
    }
</style>