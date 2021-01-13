<template>
    <div>
        <v-carusel
        :carusel_data="sliderItems"
        />
        <v-catalog/>
    </div>
</template>
<script>
import vCarusel from './v-carusel.vue'
import VCatalog from './v-catalog.vue'
export default {
  components: {
    vCarusel,
    VCatalog
  
  },
    data() {
        return {
            sliderItems: [
        { id: 1, name: 'slide1', img: '4.jpg'},
        { id: 2, name: 'slide2', img: '5.jpg'},
        { id: 3, name: 'slide3', img: '6.jpg'},
      ]
        }
    }
}
</script>
<style lang="">
    
</style>