<template>
  <div class="header">
    <svg-icon icon-class="back" v-show="show"></svg-icon>
    <h3>{{title}}</h3> 
  </div>
</template>
<script>
export default {
  props: ['title','show'],
  setup(props) {

  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  height: 45px;
  svg {
    width: 40px;
    height: 30px;
    margin-top: 7px;
    color: #2c2c2c;
  }
  h3 {
    flex: 1;
    text-align: center;
    margin-left: -40px;
    line-height: 45px;
    color: #000;
    font-weight: bold;
    font-size: 22px;
  }
}
</style>