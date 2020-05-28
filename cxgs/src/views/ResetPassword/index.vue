<template>
  <div class="reset-password">
    <header-top title='密码修改' :show='true'/>
    <form>
      <div class="form-item">
        <label>原密码</label>
        <input type="password" v-model="forms.newPassword">
      </div>
      <div class="form-item">
        <label>新密码</label>
        <input type="password" v-model="forms.oldPassword">
      </div>
      <div class="form-item">
        <label>确认密码</label>
        <input type="password" v-model="forms.againPassword">
      </div>
    </form>
    <button class="btn" @click="submit">保存</button>
    <dia-log :text='text' v-if='dia'/>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetResetPassword } from '@/api/home'
import diaLog from '@/components/dialog/index.vue'
export default {
  components: {
    headerTop,
    diaLog
  },
  data () {
    return {
      text: '',
      dia: false,
      forms: {
        newPassword: '',
        oldPassword: '',
        againPassword: ''
      }
    }
  },
  methods: {
    getResetPassword() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken,
        oldPassword: this.forms.oldPassword,
        newPassword: this.forms.newPassword,
        againPassword: this.forms.againPassword
      }
      GetResetPassword(requestData).then(res => {
        console.log(this.forms.oldPassword)
        console.log(this.forms.againPassword)
        if(this.forms.newPassword == '') {
          this.dias('原密码不能为空!')
        }else if(this.forms.oldPassword == '') {
          this.dias('新密码不能为空!')
        }else if(this.forms.againPassword == '') {
          this.dias('确认密码不能为空!')
        }else if(this.forms.againPassword != this.forms.oldPassword) {
          this.dias('两次密码不一致!')
        }else {
          this.dias(res.data.info)
        }
      }).catch(err => {})
    },
    dias(params) {
      this.dia = true
      setTimeout(() => {
        this.dia = false
      },1000)
      this.text = params
      return 
    },
    submit() {
      this.getResetPassword()
    }
  }
}
</script>
<style lang="scss" scoped>
form {
  margin: 20px 0;
  padding: 30px;
  width: calc(100% - 60px);
  .form-item {
    position: relative;
    border-bottom: 1px solid #F4F4F5;
    margin-bottom: 10px;
    label {
      display: block;
      color: #A2A2A5;
    }
    input {
      border: none;
      background:none;  
      outline:none;
      margin: 7px 0;
      &::-webkit-input-placeholder {
        color: #F4F4F5;
        font-size: 14px;
      }
    }
  }
}
.btn {
  margin-left: 30px;
  width: calc(100% - 60px);
  height: 40px;
  line-height: 40px;
  border-radius: 25px;
  color: #fff;
  background: deepskyblue;
}
</style>