<template>
  <div id="app">
    <v-app>
      <app-header/>
      <v-content>
        <v-container>
           <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
           
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Header from './components/Header.vue'

export default {
  name: 'app',
  components:{
    'app-header': Header
  },
  computed: mapGetters([
    'evenodd'
  ]),
  methods: mapActions([
    'increment',
    'decrement'
  ])  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
