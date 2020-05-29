<template>
  <div class="reset">
    <header-top title='设置' :show='true'/>
    <div class="reset-img">
      <img :src="resetList.image" alt="暂不显示">
      <div class="add" @click="upload">
        <span></span>
        <span></span>
      </div>
      <input type="file" accept="image/jpeg, image/jpg, image/png" @change.stop="handleFile" class="hiddenInput" style="display: none">
    </div>
    <form>
      <div class="form-item">
        <label>手机号</label>
        <input type="text" v-model="forms.tel">
      </div>
      <div class="form-item">
        <label>微信</label>
        <input type="text" v-model="forms.wechat">
      </div>
      <div class="form-item">
        <label>邮箱</label>
        <input type="text" v-model="forms.email">
      </div>
    </form>
    <button class="btn" @click="resets">保存</button>
    <dia-log :text='message' v-show="show"/>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import diaLog from '@/components/dialog/index.vue'
import { GetReset, GetUploadImage, GetSave } from '@/api/home'
export default {
  components: {
    headerTop,
    diaLog
  },
  data () {
    return {
      forms: {
        tel: '',
        wechat: '',
        email: ''
      },
      resetList: {},
      imageContent: '',
      imageUrl: '',
      message: '',
      show: false
    }
  },
  methods: {
    //初始化加载数据
    getReset() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken
      }
      GetReset(requestData).then(res => {
        this.resetList = res.data.data
        this.forms.tel = this.resetList.tel
        this.forms.wechat = this.resetList.wechat
        this.forms.email = this.resetList.email
      }).catch(err => {})
    },
    //头像上传
    upload() {
      this.$el.querySelector(".hiddenInput").click()  //事件转移
    },
    handleFile(e) {
      let file = e.target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (e) => {
        this.imageContent = e.target.result
        let requestData = {
          userId: this.getUserId,
          sessionId: this.getSessionId,
          token: this.getToken,
          imageContent: this.imageContent
        }
        GetUploadImage(requestData).then(res => {
          if(res.data.code == 0) {
            console.log('上传成功')
            this.imageUrl = "https://demo201.jiudianlianxian.com" + res.data.data.imageUrl
            this.resetList.image = this.imageUrl
            localStorage.setItem('imageUrl',this.imageUrl)
          }
        }).catch(err => {})
      }
    },
    resets() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken,
        image: localStorage.getItem('imageUrl'),
        tel: this.forms.tel,
        wechat: this.forms.wechat,
        email: this.forms.email
      }
      GetSave(requestData).then(res => {
        console.log(requestData.image)
        if(res.data.code == 0) {
          this.message = res.data.info
          this.getReset()
          this.show = true
          //修改成功跳转至我的
          setTimeout(() => {
            this.show = false
            this.$router.back()
          },1000)
        }else {
          this.message = res.data.info
        }
      }).catch(err => {})
    }
  },
  mounted() {
    this.getReset()
  }
}
</script>
<style lang="scss" scoped>
.reset-img {
  position: relative;
  height: 150px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #EDEDED;
    margin: 20px auto;
  }
  .add {
    position: absolute;
    left: 220px;
    top: 5px;
    width: 20px;
    height: 20px;
    background: #2E9DFE;
    border-radius: 50%;
    text-align: center;
    span {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%,-50%);
      width: 12px;
      height: 1px;
      background: #fff;
    }
    & span:first-child {
      transform: rotate(-90deg) translateY(-6px);
    }
  }
}
form {
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