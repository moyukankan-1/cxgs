<template>
  <div class="examine-carry">
    <div class="tooltip">
      <div class="tooltip-log">
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
.examine-carry {
  .tooltip {
    background: #666;
    width: 100vw;
    height: 100vh;
    .tooltip-log {
      @include center();
      width: 200px;
      height: 200px;
      background: #fff;
    }
  }
}
</style>