<template>
    <div class="v-catalog">
        <!-- <div class="v-catalog__sort">
          <button class="v-catalog__sort-name" @click="sort">Горячие товары</button>
          <button class="v-catalog__sort-name" @click="1">Новинка</button>
          <button class="v-catalog__sort-name" @click="1">Акции</button>
        </div> -->
        <div class="v-catalog__list">
        <v-catalog-item
            v-for="product in PRODUCTS.slice(0, 8)"
            :key="product.id"
            :product_data="product"
            @addToCart="addToCart"
        />
        
        </div>
    </div>
</template>
<script>


import vCatalogItem from './v-catalog-item.vue'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'v-catalog',
  components: {
     vCatalogItem 
  },
  data () {
        return {
          product: []
        }
  },
  computed: {
    ...mapGetters([
      'PRODUCTS',
    ]),
  },
  
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data){
      this.ADD_TO_CART(data)
    },
  }, 
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>
<style lang="scss">
    .v-catalog {
        &__list {
        max-width: 1440px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        }
        &__sort {
          margin: 0 auto;
          max-width: 700px;
          font-size: 36px;
          display: flex;
          justify-content: space-around;
        }
        &__show-more {
          margin: 0 auto;
          max-width: 1440px;
          & button {
            width: 150px;
            height: 50px;
            background: rgb(13, 148, 13);
            color: #FFF;
          }
        }
    }
</style>