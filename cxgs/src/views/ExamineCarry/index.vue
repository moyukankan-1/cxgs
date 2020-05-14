<template>
  <div class="examine-carry">
    <div class="toolcip">
      <div class="toolcip-log">
        <div class="log-content">
          <span>01</span>
          <p>答题过程中禁止刷屏，否则失效</p>
        </div>
        <div class="log-content">
          <span>02</span>
          <p>请在规定时间内完成答题</p>
        </div>
        <div class="log-true">开始答题</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  setup(props) {

    return {

    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/config.scss';
.toolcip {
  width: 100vw;
  height: 100vh;
  background: #666;
  .toolcip-log {
    @include center();
    padding: 0 20px;
    width: 200px;
    height: 250px;
    background: #fff;
    .log-content {
      display: flex;
      span {
        width: 30px;
        color: #FFAE00;
      }
      p {
        flex: 1;
      }
    }
  }
}
</style>