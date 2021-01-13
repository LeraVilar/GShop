<template>
    <div class="v-cart-item">
        <div class="v-cart-item__img"><img :src="require('../assets/img/' + cart_item_data.image)"></div>
        <div class="v-cart-item__name">{{cart_item_data.name}}</div>
        <div class="v-cart-item__price">
            <div class="v-cart-item__price-new">{{cart_item_data.price}}₽</div>
        </div>
        <div class="v-cart-item__quantity">{{cart_item_data.quantity}}</div>
        <button @click="deleteFromCart"><i class="material-icons">remove_circle</i></button>
    </div>
</template>
<script>
export default {
    name: 'v-Cart-Item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    },
    
    data() {
        return {}
    }
}
</script>
<style lang="scss">
    .v-cart-item {
        display: flex;
        width: 1440px;
        justify-content: space-between;
        flex-direction: row;
        align-items: center;
        margin: 40px auto;
        &:nth-child(1) {
            margin-top: 100px;
        }
        &__img img {
            width: 200px;
        }
    }
</style>