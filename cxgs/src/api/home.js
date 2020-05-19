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
/**
 * 练习模式 -- 栏目页面进入
 */
export function GetPractice(data) {
  return service.request({
    method: "post",
    url: "Practice/index.html",
    data
  })
}
/**
 * 练习模式 -- 点击开始练习进入考试
 */
export function GetJoin(data) {
  return service.request({
    method: "post",
    url: "Practice/join.html",
    data
  })
}
/**
 * 练习模式 -- 点击下一题
 */
export function GetAnswer(data) {
  return service.request({
    method: "post",
    url: "Practice/answer.html",
    data
  })
}
/**
 * 历史考试--栏目页面进入
 */
export function GetHistory(data) {
  return service.request({
    method: "post",
    url: "History/index.html",
    data
  })
}