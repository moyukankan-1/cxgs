import axios from 'axios'

const BASEURL = 'http://examstar.com/interfaces'
const service = axios.create({
    baseURL: BASEURL,
    timeout: 10000,
})


// 添加一个请求拦截器
service.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

// 添加一个响应拦截器
service.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
})


export default service