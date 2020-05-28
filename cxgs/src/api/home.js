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
/**
 * 历史考试 -- 考试结果进入
 */
export function GetDetail(data) {
  return service.request({
    method: "post",
    url: "History/detail.html",
    data
  })
}
/**
 * 历史考试 -- 排行榜进入
 */
export function GetRank(data) {
  return service.request({
    method: "post",
    url: "History/rank.html",
    data
  })
}
/**
 * 知识库--栏目页面进入--文章栏目
 */
export function GetArticle(data) {
  return service.request({
    method: "post",
    url: "Article/list.html",
    data
  })
}
/**
 * 知识库--栏目页面进入--文章详情
 */
export function GetArticleDetail(data) {
  return service.request({
    method: "post",
    url: "Article/detail.html",
    data
  })
}
/**
 * 知识库--栏目页面进入--试题分类栏目
 */
export function GetQuestion(data) {
  return service.request({
    method: "post",
    url: "Questions/index.html",
    data
  })
}
/**
 * 我的--栏目进入
 */
export function GetUser(data) {
  return service.request({
    method: "post",
    url: "User/index.html",
    data
  })
}
/**
 * 我的--错题本-栏目主页进入
 */
export function GetError(data) {
  return service.request({
    method: "post",
    url: "WrongQuestions/index.html",
    data
  })
}
/**
 * 我的--错题本-详情页进入
 */
export function GetErrorDetail(data) {
  return service.request({
    method: "post",
    url: "WrongQuestions/join.html",
    data
  })
}
/**
 * 我的--修改密码
 */
export function GetResetPassword(data) {
  return service.request({
    method: "post",
    url: "User/resetPassword.html",
    data
  })
}