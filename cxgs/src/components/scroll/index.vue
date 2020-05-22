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
    props: {
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click: true,
        pullUpLoad: this.pullUpLoad
      })
      this.scroll.on('pullingUp',() => {
        this.$emit('pullUp')
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
