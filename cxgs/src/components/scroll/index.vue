<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
  export default {
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        pullUpLoad: true
      })
      this.scroll.on('pullingUp',() => {
        this.$emit('pullUp')
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
