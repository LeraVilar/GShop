<template>
    <div class="v-wrapper">
    <div class="v-productsCard" v-if="prodById">
        <div style="display: flex; justify-content: space-between">
        <div style="display: flex; flex-direction: column;">
        <div class="v-card__name">{{prodById.name}}</div>
        <div class="v-card__img">
             <img :src="require('../assets/img/' + prodById.image[1])"/>
            <div class="v-card__labels">
                <div class="v-card__label" v-show="prodById.shild.sale === true">Sale</div>
                <div class="v-card__label" v-show="prodById.shild.new === true">New</div>
                <div class="v-card__label" v-show="prodById.shild.hot === true">Hot</div>
            </div>
        </div>
        </div>
         <div class="v-card__price">
            <div class="v-card__price-old" v-if="prodById.sale > 1">{{prodById.sale + '₽'}}</div>
            <div class="v-card__price-new">{{prodById.price}}₽</div>
            
            <button @click="addToCart(prodById)">Добавить</button>
        </div>
        
        </div>
        <div class="v-card__tabs">
         <ul class="nav nav-tabs nav-justified">
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('description')" :class="{ active: isActive('description') }" href="#description">Описание</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" @click.prevent="setActive('feature')" :class="{ active: isActive('feature') }" href="#feature">Характеристики</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="tab-pane fade" :class="{ 'active show': isActive('description') }" id="description">{{prodById.description}}</div>
      <div class="tab-pane fade" :class="{ 'active show': isActive('feature') }" id="feature">
        <b-table stacked     hover :items="items"></b-table>

      </div>
    </div>
    </div>
        
    </div>
    </div>
</template>
<script>

import {mapGetters, mapActions} from 'vuex';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
    name: 'productsCard',
  components: {},
    methods: {
         ...mapActions([
            'ADD_TO_CART',
            'GET_PRODUCTS_FROM_API'
         ]),
        addToCart(prodById){
            this.ADD_TO_CART(prodById)
        },
        isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
    },
    computed: {
            ...mapGetters ([
                'PROD_BY_ID'
            ]),
            
            productId () {
                return +this.$route.params.id;
            },
            prodById () {
                return this['PROD_BY_ID'](this.productId);
            },
            
            
    },
    data() {
        return {
            items: [
          { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' , somethinkelse: 'enother' },
        ],
            activeItem: 'description'
        }
    }
}
</script>
<style lang="scss" scoped>
    .v-wrapper {
        max-width: 1440px;
        margin: 0 auto;

    }
    .v-productsCard {
        display: flex;
        flex-direction: column;
    }
    .v-card__name {
        font-size: 46px;
    }
    .v-card__img {
        display: flex;
        & img {
            position: relative;
            width: 400px;
        }
    }
    .v-card__labels {
        position: absolute;
    }
    .v-card__label {
        border-radius: 15px;
        color: #FFF;
        padding: 10px;
        width: 100px;
        height: 35px;
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
    .v-card__price {
        &-old {
            text-decoration: line-through;
        }
        &-new {
            font-size: 36px;
        }
    }
</style>