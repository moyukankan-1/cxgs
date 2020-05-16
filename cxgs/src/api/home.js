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
 /**
  * 视频学习--栏目主页进入
  */
 export function GetVideoStudyMain(data) {
  return service.request({
    method: "post",
    url: "Video/learn.html",
    data
  })
}
/**
 * 视频学习--点击视频播放进入播放页
 */
export function GetPlayVideo(data) {
  return service.request({
    method: "post",
    url: "Video/detail.html",
    data
  })
}