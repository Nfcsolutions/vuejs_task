// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import ApiService from './services/api.service'
import { TokenService } from './services/storage.service'

// Set the base URL of the API
// console.log('API', process.env.API)
// ApiService.init(process.env.API)
//ApiService.init('http://127.0.0.1:8000/api/v1/')
ApiService.init('http://localhost:3000/api/')


// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

Vue.use(BootstrapVue)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
