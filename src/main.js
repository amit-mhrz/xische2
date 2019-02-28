import Vue from 'vue'
import VueMatchHeights from 'vue-match-heights';
import Router from 'vue-router'
import router from './router'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
Vue.use(Router)
Vue.use(BootstrapVue)

Vue.use(VueMatchHeights)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
