<template>
  <div class="click-move">
    <ul>
      <li v-for="item in titles" :key="item.id" :class="item.id == idx? 'active':''" @click="activeClick(item.id)">
        {{item.title}}
        <hr v-show="item.id == idx"/>  
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['titles'],
  data() {
    return {
      idx: 0
    }
  },
  methods: {
    activeClick(id) {
      this.idx = id
      this.$emit('already',id)
    }
  }
}
</script>
<style lang="scss" scoped>
.click-move {
  padding: 20px;
  border-bottom: 3px solid #F5F5F5;
  ul {
    height: 25px;
    line-height: 25px;
    display: flex;
    li {
      margin-right: 30px;
      color: #A8A8A8;
      font-size: 15px;
    }
    & li:last-child {
      margin-right: 0;
    }
    hr {
      width: 40%;
      height: 2px;
      background: #41B4FD;
      border: none;
    }
  }
  .active {
    color: #000;
    font-size: 16px;
    font-weight: 550;
  }
}
</style>