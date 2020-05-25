<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <tabbar-bottom v-show="$route.meta.showFooter" /> 
  </div>
</template>
<script>
  import tabbarBottom from '@/components/tabbar/index.vue'
  export default {
    components: {
      tabbarBottom
    }
  }
  
</script>

<style lang="scss">
@import './styles/normalize.scss'
</style>
