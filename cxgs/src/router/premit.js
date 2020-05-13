import router from "./index";
import { getUsername } from '@/utils/app'

const whiteRouter = ['/login']
//路由守卫
router.beforeEach((to, from, next) => {
  if(getUsername()) {
    next()
  }else {
    if(whiteRouter.indexOf(to.path) !== -1) {
      next()
    }else {
      next('./login')
    }
  }
})