<template>
  <div class="answer">
    <header-top title="正在考试" :show="true"/>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { reactive } from '@vue/composition-api'
export default {
  components: {
    headerTop
  },
  setup(props) {
    
  }
}
</script>
<style lang="scss" scoped>
</style>