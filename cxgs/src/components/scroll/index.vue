<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll"
import { onMounted } from '@vue/composition-api'
  export default {
    setup(props, { root, refs, emit }) {
      scroll: null

      onMounted(() => {
        root.scroll = new BScroll(refs.wrapper,{
          click: true,
          pullUpLoad: true
        })

        root.scroll.on('pullingUp',() => {
          emit('pullUp')
        })
      })

      return {
        scroll
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
