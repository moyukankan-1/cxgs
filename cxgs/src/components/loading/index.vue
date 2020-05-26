<template>
  <div class="loading" v-show="isLoading">
    <div class="ring"></div>
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
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background: rgba(255,255,255,.5);
  .ring {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
    height: 50px;
    border: 2px solid #999;
    border-left: 2px solid transparent;
    border-radius: 50%;
    animation: animateCircle 1s ease-in-out infinite;
  }
}
@keyframes animateCircle {
  0%{
    transform: rotate(0deg);
  }
  100%{
    transform: rotate(360deg);
  }
}
</style>