import service from '@/utils/request'

/**
 * 首页
 */
 export function GetHome(data) {
   return service.request({
     method: "post",
     url: "Index/index.html",
     data
   })
 }