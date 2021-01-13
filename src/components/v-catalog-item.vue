<template>
    <div class="v-catalog-item">
        <div class="v-catalog-item__img"><img :src="require('../assets/img/' + product_data.image)"></div>
        <div class="v-catalog-item__name">{{product_data.name}}</div>
        <hr>
        <div class="v-catalog-item__price">
            <div class="v-catalog-item__price-new">{{product_data.price}}₽</div>
            <div class="v-catalog-item__price-old" v-if="product_data.sale > 1">{{product_data.sale + '₽'}}</div>
        </div>
        <button class="v-catalog-item__addcart" @click="addToCart"><i class="material-icons" id="add-to-cart-btn">add_shopping_cart</i>Добавить в корзину</button>
    </div>
</template>
<script>
export default {
    name: 'v-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        addToCart () {
            this.$emit('addToCart', this.product_data)
        }
    },
    mounted() {
        this.$set(this.product_data, 'quantity', 1)
    },
    data() {
        return {}
    }
}
</script>
<style lang="scss">
    hr {
        background: #000000;
        width: 100%;
        height: 1px;
    }
    #add-to-cart-btn {
        width: 15px;
        height: 15px;
        font-size: 20px;
        color: #FFFFFF;
        align-items: center;
        margin-right: 15px;
        margin-left: 15px;
    }
    .v-catalog-item {
        display: flex;
        flex-direction: column;
        border: 1px solid gray;
        border-radius: 15px;
        width: 285px;
        height: 400px;
        flex-basis: 20%;
        justify-content: space-between;
        margin-bottom: 70px;
        -webkit-box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.3);
        -moz-box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.3);
        box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.3);
        transition: all .5s;
        cursor: pointer;
    &:hover {
        -webkit-box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.7);
        -moz-box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.7);
        box-shadow: 5px 15px 25px 0px rgba(0,0,0,0.7);
        transition: .5s;
    }
	&__img {
        & img {
            max-width: 100%;
            height: 200px;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
        }
     }
	&__name {
        font-size: 22px;
        margin-left: 15px;
     }
	&__price {
        display: flex;
        justify-content: flex-start;
        margin-left: 30px;
     }
	&__price-new {
        color: green;
        font-size: 30px;
        margin-right: 20px;
     }
	&__price-old {
        text-decoration: line-through;
     }
	&__addcart {
        display: flex;
        background:red;
        color: #FFF;
        border: none;
        width: 70%;
        height: 35px;
        margin: 10px auto;
        align-self: center;
        border-radius: 15px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background: #FFF;
            color: red;
            border: 1px solid red;
            transition: all .5s;
        &:hover #add-to-cart-btn {
            color: red;
            transition: all .5s;
        }
        }
    }
}
</style>