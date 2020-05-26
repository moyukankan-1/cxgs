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
    {
      path: '/answer',
      component: () => import('../views/Answer/index.vue')
    },
    {
      path: '/videoStudy',
      component: () => import('../views/VideoStudy/index.vue')
    },
    {
      path: '/playVideo',
      component: () => import('../views/PlayVideo/index.vue')
    },
    {
      path: '/practice',
      component: () => import('../views/Practice/index.vue')
    },
    {
      path: '/join',
      component: () => import('../views/Join/index.vue')
    },
    {
      path: '/result',
      component: () => import('../views/Result/index.vue')
    },
    {
      path: '/rank',
      component: () => import('../views/Rank/index.vue')
    },
    {
      path: '/article',
      component: () => import('../views/Article/index.vue')
    },
    {
      path: '/articleDetail',
      component: () => import('../views/ArticleDetail/index.vue')
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
