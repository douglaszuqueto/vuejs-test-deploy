import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Share from '@/components/Share'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        title: 'Home'
      }
    },
    {
      path: '/share',
      name: 'Share',
      component: Share,
      meta: {
        title: 'Share'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
