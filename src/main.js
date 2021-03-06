import Vue from 'vue'
import Router from 'vue-router'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueMatchHeights from 'vue-match-heights'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(VueMatchHeights, {
  disabled: [768], // Optional: default viewports widths to disabled resizing on. Can be overridden per usage
});

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

