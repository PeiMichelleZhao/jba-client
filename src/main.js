// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VModal from 'vue-js-modal'
import VueLodash from 'vue-lodash'

// eslint-disable-next-line
import "bootstrap/dist/css/bootstrap.min.css"
// eslint-disable-next-line
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(VueLodash, { name: 'lodash' })
Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(VModal)

require('./utils/Events')
require('./utils/Variables')
require('./utils/Functions')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
