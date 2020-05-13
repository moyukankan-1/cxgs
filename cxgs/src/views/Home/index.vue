<template>
  <div class="home">
    <header-top title="首页" :show="show"/>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { ref } from '@vue/composition-api'
export default {
  components: {
    headerTop
  },
  setup(props) {
    const show = ref(false)
    return {
      show
    }
  }
}
</script>
<style lang="scss" scoped>
</style>