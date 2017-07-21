import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page from '@/components/Page'
import AnotherPage from '@/components/AnotherPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    { path: '/page', component: Page },
    { path: '/another-page', component: AnotherPage }
  ]
})
