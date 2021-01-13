<template>
  <div id="app">
    <v-menu-upper
      
    />
    <v-menu-bottom

    />
    
    <keep-alive>
    <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'


import VMenuBottom from './components/v-menu-bottom.vue'
import VMenuUpper from './components/v-menu-upper.vue'


export default {
  name: 'App',
  components: {
    VMenuUpper,
    VMenuBottom,


  },
  computed: {
    ...mapGetters([
      
    ])
  },
  data() {
    return {
    }
  },
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {

  margin: 0;
  padding: 0;
  user-select: none;
}
a {
  text-decoration: none;
  color: #FFF;
}
</style>
