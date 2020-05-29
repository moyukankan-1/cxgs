import cookie from 'cookie_js'

export function setUserId(userId) {
  return cookie.set('userId',userId)
}
export function setSessionId(sessionId) {
  return cookie.set('sessionId',sessionId)
}
export function setToken(token) {
  return cookie.set('token',token)
}
export function setUsername(username) {
  return cookie.set('username',username)
}
export function setPassword(password) {
  return cookie.set('password',password)
}

export function getUserId() {
  return cookie.get('userId')
}
export function getSessionId() {
  return cookie.get('sessionId')
}
export function getToken() {
  return cookie.get('token')
}
export function getUsername() {
  return cookie.get('username')
}
export function getPassword() {
  return cookie.get('password')
}
