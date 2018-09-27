import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/Homepage'
import PlayHistory from '@/components/PlayHistory'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/play-history',
      name: 'PlayHistory',
      component: PlayHistory
    }
  ]
})
