<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>
<script>
import { computed } from '@vue/composition-api'
export default {
  props: ['link'],
  setup(props, { root }) {
    const isActive = computed(() => {
      return root.$route.path.indexOf(props.link) !== -1
    })
    const activeStyle = computed(() => {
      return root.isActive ? {color: root.activeColor} : {}
    })
    const itemClick = () => {
      root.$router.push(props.link)
    }

    return {
      isActive,
      activeStyle,
      itemClick
    }
  }
}
</script>
<style lang="scss" scoped>
</style>