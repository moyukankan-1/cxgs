<template>
  <div class="mine">
    <div class="mine-top">
      <h3 class="mine-title">
        {{userList.username}}
        <svg-icon :icon-class="userList.sex | sex"/>
      </h3>
      <p class="mine-tel">{{userList.tel}}</p>
      <span class="mine-label">{{userList.department}}</span>
      <img :src="userList.image" alt="暂无图片">
    </div>
    <ul>
      <li v-for="(item,index) in list" :key="item.id" @click='child(index)'>
        <svg-icon :icon-class="item.icon"/>
        <span>{{item.name}}</span>
      </li>
    </ul>
    <dia-log text='退出成功' v-show="show"/>
  </div>
</template>
<script>
import { GetUser } from '@/api/home'
import diaLog from '@/components/dialog/index.vue'
export default {
  components: {
    diaLog
  },
  data() {
    return {
      userList: {},
      list: [
        {
          icon: 'mine-err',
          name: '错题本'
        },
        {
          icon: 'mine-pas',
          name: '密码修改'
        },
        {
          icon: 'mine-set',
          name: '设置'
        },
        {
          icon: 'mine-quit',
          name: '退出登录'
        },
      ],
      show: false
    }
  },
  filters:{
    sex(item) {
      if(item == 1) {
        return 'mine-boy'
      }else {
        return 'mine-girl'
      }
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
    },
    child(index) {
      if(index == 0) {
        this.$router.push('/errorBook')
      }else if(index == 1) {
        this.$router.push('/resetPassword')
      }else if(index == 2) {
        this.$router.push('/reset')
      }else {
        this.show = true
        setTimeout(() => {
          this.show = false
          this.$router.push('/login')
        },1000)
      }
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
      font-size: 20px;
      font-weight: 600;
    }
    .mine-tel {
      margin: 10px 0;
    }
    .mine-label {
      display: inline-block;
      padding: 6px 15px;
      background: #EDEDED;
      border-radius: 20px;
      font-size: 14px;
      color: #AAAAAA;
    }
    img {
      position: absolute;
      top: 0;
      right: 20px;
      border-radius: 50%;
      width: 80px;
      height: 80px;
      border: 1px solid #EDEDED;
    }
  }
  ul {
    margin-top: 30px;
    li {
      display: flex;
      padding: 25px 0;
      border-top: 1px solid #EFEFEF;
      font-size: 18px;
      span {
        display: inline-block;
        margin-left: 10px;
        margin-top: -1px;
      }
    }
    & li:last-child {
      border-bottom: 1px solid #EFEFEF;
    }
  }
}
</style>