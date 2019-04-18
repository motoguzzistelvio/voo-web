import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue'
import App from './App.vue'

import { store } from './store/store'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import VueYoutube from 'vue-youtube'

import routes from './routes'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueYoutube)

Vue.use(Vuetify, {
  iconfont: 'mdi'
})

const router = new VueRouter({
  mode: 'history',
  routes: routes
}) 

new Vue({
  router: router,
  store,
  render: h => h(App),
}).$mount('#app')
