<template>
  <div class="mine">
    <div class="mine-top">
      <h3 class="mine-title">
        {{userList.username}}
        <span>{{userList.sex}}</span>
      </h3>
      <p class="mine-tel">{{userList.tel}}</p>
      <span class="mine-label">{{userList.department}}</span>
      <img :src="userList.image" alt="暂无图片">
    </div>
  </div>
</template>
<script>
import { GetUser } from '@/api/home'
export default {
  data() {
    return {
      userList: {}
    }
  },
  methods: {
    getUser() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken
      }
      GetUser(requestData).then(res => {
        this.userList = res.data.data
      }).catch(err => {})
    }
  },
  mounted() {
    this.getUser()
  }
}
</script>
<style lang="scss" scoped>
.mine {
  padding: 20px;
  .mine-top {
    position: relative;
    margin-top: 20px;
    .mine-title {
      font-size: 18px;
      font-weight: 600;
    }
    .mine-tel {
      margin: 10px 0;
    }
    .mine-label {
      display: inline-block;
      padding: 6px 15px;
      background: #666;
      border-radius: 20px;
      font-size: 14px;
    }
    img {
      position: absolute;
      top: 0;
      right: 20px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      border: 1px solid #000;
    }
  }
}
</style>