import Vue from 'vue'
import Router from 'vue-router'
import calling from '@/components/calling'
import summary from '@/components/summary'
import sending from '@/components/sending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/summary',
      name: 'summary',
      component: summary
    },
    {
      path: '/calling',
      name: 'calling',
      component: calling
    },
    {
      path: '/sending',
      name: 'sending',
      component: sending
    }
  ]
})
