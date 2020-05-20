<template>
  <div class="login">
    <img src="@/assets/images/login.png">
    <h3>欢迎登录</h3>
    <h5>川西高速考试平台</h5>
    <form>
      <div class="form-item">
        <label>用户名</label>
        <input type="text" v-model="loginList.username" placeholder="请输入用户名">
        <svg-icon icon-class="geren"></svg-icon>
      </div>
      <div class="form-item">
        <label>密码</label>
        <input type="password" v-model="loginList.password" placeholder="请输入密码">
        <svg-icon icon-class="suo"></svg-icon>
      </div>
    </form>
    <button class="btn" @click="submit">登录</button>
    <dia-log :text="message" v-show="dialogShow"/> 
    <div class="zhanghao">
      测试用户名：cs002<br />
      测试密码：123456
    </div>
  </div>
</template>
<script>
import { ref, reactive } from '@vue/composition-api'
import diaLog from '@/components/dialog/index.vue'
import { setUsername, setPassword } from '@/utils/app'
export default {
  components: {
    diaLog
  },
  data() {
    return {
      loginList: { usernam: '', password: ''},
      message: '',
      dialogShow: false
    }
  },
  methods: {
    /**
     * 点击登录
     */
    submit() {
      //显示提示框
      this.dialogShow = true
      setTimeout(() => {
        this.dialogShow =false
      },1000)
      this.login()
    },

    /**
     * 登录接口
     */
    login() {
      let data = {
        userId: 'x',
        sessionId: 'x',
        token: this.$md5(this.sessionId + this.userId + 'jiudianlianxian' + '20200513'),
        username: this.loginList.username,
        password: this.$md5(this.loginList.password)
      }
      this.$store.dispatch('getLogin', data).then(res => {
        //登录成功保存用户名和密码
        setUsername(data.username)
        setPassword(data.password)
        this.message = res.data.info
        //登录成功跳转home页面
        setTimeout(() => {
          if(this.message == '登录成功'){
            this.$router.push('/home')
          }
        },1000)
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';
.login {
  position: relative;
  height: 100vh;
  img {
    @include positions(100);
    width: 80px;
    height: 45px;
  }
  h3 {
    @include positions(155,#2c2c22);
    font-size: 24px;
  }
  h5 {
    @include positions(195,#A4A9B6);
    font-size: 18px;
  }
  form {
    @include positions(250);
    width: calc(100% - 60px);
    .form-item {
      position: relative;
      border-bottom: 1px solid #2c2c22;
      margin-bottom: 10px;
      label {
        display: block;
        color: #2c2c22;
      }
      input {
        border: none;
        background:none;  
        outline:none;
        margin: 7px 0;
        &::-webkit-input-placeholder {
          color: #A4A9B6;
          font-size: 14px;
        }
      }
      svg {
        position: absolute;
        top: 30px;
        right: 10px;
      }
    }
  }
  .btn {
    @include positions(450);
    width: calc(100% - 60px);
    height: 40px;
    line-height: 40px;
    border-radius: 25px;
    color: #fff;
    background: deepskyblue;
  }
  .zhanghao {
    @include positions(600,#2c2c2c);
  }
}
</style>