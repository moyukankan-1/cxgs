import service from '@/utils/request'

/**
 * 获取验证码
 */

 export function GetLogin(data) {
   return service.request({
     method: "post",
     url: "/Login/login.html",
     data
   })
 }