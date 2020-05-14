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
    props: ['pullUpLoad'],
    setup(props, { root, refs }) {
      scroll: null

      onMounted(() => {
        root.scroll = new BScroll(refs.wrapper,{
          click: true,
          pullUpLoad: root.pullUpLoad
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
