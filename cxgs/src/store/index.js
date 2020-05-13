import Vue from 'vue'
import Vuex from 'vuex'
import { GetLogin } from '@/api/login'
import { setUserId, setSessionId, setToken } from '@/utils/app'
import cookie from 'cookie_js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userId: cookie.get('userId'),
    sessionId: cookie.get('sessionId'),
    token: cookie.get('token')
  },
  mutations: {
   
  },
  actions: {
    getLogin({commit},data) {
      return new Promise((resolve,reject) => {
        GetLogin(data).then(res => {
          setUserId(res.data.userId)
          setSessionId(res.data.sessionId)
          setToken(res.data.token)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
})
