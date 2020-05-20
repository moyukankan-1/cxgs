<template>
  <div class="tabbar">
    <li>
      <tabbar-item link="/home" activeColor="deeppink">
        <img src="@/assets/images/default-1.png" slot="item-icon">
        <img src="@/assets/images/active-1.png" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tabbar-item>
    </li>
    <li>
      <tabbar-item link="/history" activeColor="deeppink">
        <img src="@/assets/images/default-2.png" slot="item-icon">
        <img src="@/assets/images/active-2.png" slot="item-icon-active">
        <div slot="item-text">历史</div>
      </tabbar-item>
    </li>
    <li>
      <tabbar-item link="/knowledge" activeColor="deeppink">
        <img src="@/assets/images/default-3.png" slot="item-icon">
        <img src="@/assets/images/active-3.png" slot="item-icon-active">
        <div slot="item-text">知识库</div>
      </tabbar-item>
    </li>
    <li>
      <tabbar-item link="/mine" activeColor="deeppink">
        <img src="@/assets/images/default-4.png" slot="item-icon">
        <img src="@/assets/images/active-4.png" slot="item-icon-active">
        <div class="last" slot="item-text">我的</div>
      </tabbar-item>
    </li>
  </div>
</template>
<script>
import tabbarItem from './tabbarItem.vue'
export default {
  components: {
    tabbarItem
  },
  data() {
    return {

    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf() !== -1
    }
  }
}
</script>
<style lang="scss" scoped>
.tabbar {
  display: flex;
  position: absolute;
  bottom: 0;
  height: 50px;
  width: 100%;
  padding-top: 10px;
  border-top: 1px solid rgba(0,0,0,.1);
  background: #F7F7F7;
  li {
    flex: 1;
    img {
      width: 42px;
      height: 30px;
      margin: 0 auto;
    }
    div {
      text-align: center;
    }
    .last {
      margin-left: -10px;
    }
  }
}
</style>