<template>
    <div class="v-catalog-item">
        <router-link 
                :to="linkOpen"
        >
        <div class="v-catalog-item__img"><img :src="require('../assets/img/' + product_data.image[1])">
            <div class="v-catalog-item__labels">
                <div class="v-catalog-item__label" v-show="product_data.shild.sale === true">Sale</div>
                <div class="v-catalog-item__label" v-show="product_data.shild.new === true">New</div>
                <div class="v-catalog-item__label" v-show="product_data.shild.hot === true">Hot</div>
            </div>
        </div>
        <div class="v-catalog-item__name">{{product_data.name}} 
        </div>

        <div class="v-catalog-item__price">
            <div class="v-catalog-item__price-new">{{product_data.price}}₽</div>
            <div class="v-catalog-item__price-old" v-if="product_data.sale > 1">{{product_data.sale + '₽'}}</div>
        </div>
        </router-link>
        <button class="v-catalog-item__addcart" @click="addToCart"><i class="material-icons" id="add-to-cart-btn">add_shopping_cart</i>Добавить в корзину</button>

    </div>
</template>
<script>

export default {
    name: 'v-catalog-item',
    components: {},
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    computed: {
        linkOpen () {
            return `/products/${this.product_data.id}`;
        }
    },
    methods: {
        addToCart () {
            this.$emit('addToCart', this.product_data)
        },
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
    a {
        color: #064717;
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
        border-radius: 5px;
        width: 285px;
        height: 400px;
        flex-basis: 21%;
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
    &__labels {
        position: absolute;
        top: 10px;
        left: 10px;
    }
    &__label {
        border-radius: 30px;
        color: #FFF;
        padding: 10px;
        width: 50px;
        text-align: center;
        &:nth-child(1) {
            background: blue;
        }
        &:nth-child(2) {
            background: coral;
        }
        &:nth-child(3) {
            background: crimson;
        }
    }
	&__img {
        position: relative;
        margin-bottom: 35px;
        & img {
            max-width: 100%;
            height: 200px;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
     }
	&__name {
        font-size: 32px;
        margin-left: 15px;
        margin-bottom: 24px;
     }
	&__price {
        display: flex;
        justify-content: flex-start;
        margin-left: 30px;
     }
	&__price-new {
        color: #064717;
        font-size: 30px;
        margin-right: 20px;
     }
	&__price-old {
        text-decoration: line-through;
     }
	&__addcart {
        display: flex;
        background:#064717;
        color: #FFF;
        border: none;
        width: 90%;
        height: 45px;
        align-self: center;
        margin-bottom: 10px;
        font-weight: 700;
        cursor: pointer;
        &:hover {
            background: #FFF;
            color:#064717;
            border: 1px solid#064717;
            transition: all .5s;
        &:hover #add-to-cart-btn {
            color: #064717;
            transition: all .5s;
        }
        }
    }
}
</style>