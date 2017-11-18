import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import calling from '@/components/calling'
import sending from '@/components/sending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
