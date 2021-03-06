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
        showFooter: true,
        keep: true
      }
    },
    {
      path: '/history',
      component: () => import('../views/History/index.vue'),
      meta: {
        showFooter: true,
        keep: true
      }
    },
    {
      path: '/knowledge',
      component: () => import('../views/Knowledge/index.vue'),
      meta: {
        showFooter: true,
        keep: true
      }
    },
    {
      path: '/mine',
      component: () => import('../views/Mine/index.vue'),
      meta: {
        showFooter: true,
        keep: true
      }
    },
    {
      path: '/examineCarry',
      component: () => import('../views/ExamineCarry/index.vue'),
      meta: {
        keep: true
      }
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
    {
      path: '/question',
      component: () => import('../views/Question/index.vue')
    },
    {
      path: '/errorBook',
      component: () => import('../views/ErrorBook/index.vue')
    },
    {
      path: '/errorBookDetail',
      component: () => import('../views/ErrorBookDetail/index.vue')
    },
    {
      path: '/resetPassword',
      component: () => import('../views/ResetPassword/index.vue')
    },
    {
      path: '/reset',
      component: () => import('../views/Reset/index.vue')
    },
    {
      path: '/examCheck',
      component: () => import('../views/ExamCheck/index.vue')
    }
  ]

const router = new VueRouter({
  routes
})

export default router
