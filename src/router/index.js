import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import Result from '@/components/Result'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    }
  ]
})
