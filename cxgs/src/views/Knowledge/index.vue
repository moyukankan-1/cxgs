<template>
  <div class="knowledge">
    <header-top title='知识库' :show='true'/>
    <div class="knowledge-img">
      <img src="@/assets/images/knowledge-1.png" alt="" @click="$router.push('/videoStudy')">
      <img src="@/assets/images/knowledge-2.png" alt="" @click="$router.push('/question')">
      <img src="@/assets/images/knowledge-3.png" alt="" @click="$router.push('/article')">
    </div>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import Loading from '@/components/loading/index.vue'
export default {
  components: {
    headerTop,
    Loading
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    //加载
    load() {
      setTimeout(() => {
        this.isLoading = false
      }, 500);
    }
  },
  mounted() {
    this.load()
  }
}
</script>
<style lang="scss" scoped>
.knowledge-img {
  padding: 20px;
  img {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
  }
}
</style>