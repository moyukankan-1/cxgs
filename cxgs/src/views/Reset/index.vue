<template>
  <div class="reset">
    <header-top title='设置' :show='true'/>
    <div class="reset-img">
      <img :src="resetList.image" alt="暂不显示">
      <div class="add" @click="upload">
        <span></span>
        <span></span>
      </div>
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
    <button class="btn">保存</button>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetReset, GetUploadImage } from '@/api/home'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      forms: {
        tel: '',
        wechat: '',
        email: ''
      },
      resetList: {}
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
      }).catch(err => {})
    },
    //头像上传
    upload() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken,
        imageContent: ''
      }
      GetUploadImage(requestData).then(res => {
        console.log(res)
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