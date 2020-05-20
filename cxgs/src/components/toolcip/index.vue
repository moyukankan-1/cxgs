<template>
  <div class="toolcip" v-if="show">
    <div class="toolcip-log">
        <img src="@/assets/images/ecc-1.png" alt="">
        <div class="log">
          <div class="log-content">
            <span>01</span>
            <p>答题过程中禁止刷屏，否则失效</p>
          </div>
          <div class="log-content">
            <span>02</span>
            <p>请规定时间内完成答题</p>
          </div>
        </div>
        <div class="log-true" @click="action">开始答题</div>
        <div class="log-close" @click="black">
          <svg-icon icon-class="close"/>
        </div>
      </div>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true
    }
  },
  methods: {
    //进入
    action() {
      this.show = false
    },
    //退出
    black() {
      this.$router.back()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';
.toolcip {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #B2B2B2;
  z-index: 999;
  .toolcip-log {
    @include center();
    padding: 0 20px;
    width: 200px;
    height: 250px;
    background: #fff;
    border-radius: 10px;
    img {
      position: absolute;
      top: -50px;
      left: 50%;
      transform: translateX(-50%);
    }
    .log {
      position: absolute;
      top: 90px;
    }
    .log-content {
      display: flex;
      margin-bottom: 10px;
      span {
        width: 30px;
        color: #FFAE00;
      }
      p {
        flex: 1;
        padding-right: 20px;
      }
    }
    .log-true {
      position: absolute;
      bottom: 15px;
      background: #41B4FD;
      width: calc(100% - 40px);
      height: 35px;
      line-height: 35px;
      text-align: center;
      border-radius: 25px;
      color: #fff;
    }
    .log-close {
      position: absolute;
      left: 50%;
      bottom: -40px;
      transform: translateX(-50%);
      svg {
        color: #fff;
        font-size: 20px;
        padding: 3px;
        border: 2px solid #fff;
        border-radius: 50%;
      }
    }
  }
}
</style>