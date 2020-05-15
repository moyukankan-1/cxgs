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
import { ref } from '@vue/composition-api'
export default {
  props: ['titles'],
  setup(props, { emit }) {
    const idx = ref(0)

    const activeClick = (id) => {
      idx.value = id
      if(id == 0) {
        emit('already1')
      }else if(id == 1) {
        emit('already2')
      }
      
    }

    return {
      idx,
      activeClick
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
    font-size: 20px;
    font-weight: 550;
  }
}
</style>