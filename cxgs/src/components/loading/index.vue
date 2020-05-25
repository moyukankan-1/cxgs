<template>
  <div class="loading" v-show="isLoading">
    <div class="bar bar1"></div>
    <div class="bar bar2"></div>
    <div class="bar bar3"></div>
    <div class="bar bar4"></div>
    <div class="bar bar5"></div>
    <div class="font">正在加载...</div>
  </div>
</template>
<script>
export default {
  props: ['isLoading'],
  data () {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
.loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  font-weight: bold;
  .bar {
    width: 6px;
    height: 25px;
    background: #fff;
    display: inline-block;
    transform-origin: bottom center;
    animation: loading 1.5s ease-in-out infinite;
  }
  .bar1 {
    animation-delay: 0.1s;
  }
  .bar2 {
    animation-delay: 0.2s;
  }
  .bar3 {
    animation-delay: 0.3s;
  }
  .bar4 {
    animation-delay: 0.4s;
  }
  .bar5 {
    animation-delay: 0.5s;
  }
}
@keyframes loading {
  0%{
    transform: scaleY(0.1);
    background: #fff;
  }
  50%{
    transform: scaleY(1);
    background: #2ecc71;
  }
  100%{
    transform: scaleY(0.1);
    background: transparent;
  }
}
</style>