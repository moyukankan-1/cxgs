<template>
  <div class="dialog">
    {{text}}
  </div>
</template>
<script>
export default {
  props: ['text'],
  data() {
    return {
      
    }
  }
}
</script>
<style lang="scss" scoped>
.dialog {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
  padding: 10px 20px;
  background: #999;
  border-radius: 5px;
}
</style>