<template>
  <div class="login">
    <img src="@/assets/images/login.png">
    <h3>欢迎登录</h3>
    <h5>川西高速考试平台</h5>
    <form>
      <div class="form-item">
        <label>用户名</label>
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="form-item">
        <label>密码</label>
        <input type="password" placeholder="请输入密码">
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';
.login {
  position: relative;
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
    }
  }
}
</style>