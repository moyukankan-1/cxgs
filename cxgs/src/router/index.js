import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/Login/index.vue')
    },
    {
      path: '/home',
      component: () => import('../views/Home/index.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/history',
      component: () => import('../views/History/index.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/knowledge',
      component: () => import('../views/Knowledge/index.vue'),
      meta: {
        showFooter: true
      }
    },
    {
      path: '/mine',
      component: () => import('../views/Mine/index.vue'),
    },
    {
      path: '/examineCarry',
      component: () => import('../views/ExamineCarry/index.vue')
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
