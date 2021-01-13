<template>
    <div>
        <v-cart-item
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
        />
    </div>
</template>
<script>
import {mapActions} from 'vuex'
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
    methods: {
        ...mapActions([
            'DELETE_FROM_CART'
        ]),
        deleteFromCart(index) {
            this.DELETE_FROM_CART(index)
        }
    },
    data () { 
        return{}
    }
}
</script>
<style lang="scss">
    
</style>