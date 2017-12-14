import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import calling from '@/components/calling'
import summary from '@/components/summary'
import sending from '@/components/sending'
import driving from '@/components/driving'
import start from '@/components/start'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/driving',
      name: 'driving',
      component: driving
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
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
