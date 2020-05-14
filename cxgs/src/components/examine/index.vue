<template>
  <div class="examine">
    <ul>
      <li v-for="item in list" :key="item.id">
        <span>考</span>
        <h3>{{item.title}}</h3>
        <div class="examine-num">共计{{item.num}}题</div>
        <div class="examine-title">考试时间：{{item.time}}</div>
        <div class="examine-button">答题</div>
      </li>
    </ul>
  </div>
</template>
<script>
import { reactive } from '@vue/composition-api'
export default {
  props: ['list'],
  setup(props) {
    
  }
}
</script>
<style lang="scss" scoped>
.examine {
  ul {
    li {
      position: relative;
      padding: 10px;
      box-shadow: 0px 0px 5px rgb(230,230,230);
      margin: 10px 0;
      span {
        position: absolute;
        left: 10px;
        top: 10px;
        padding: 1px 2px;
        border-radius: 50%;
        border: 2px solid #FFAE00;
        color: #FFAE00;
        font-size: 12px;
      }
      h3 {
        margin-left: 25px;
        height: 19px;
        line-height: 19px;
        font-weight: 600;
        font-size: 15px;
      }
      .examine-num {
        margin: 10px 0;
        color: #A4A9B6;
        font-size: 13px;
      }
      .examine-title {
        color: #A4A9B6;
        font-size: 14px;
      }
      .examine-button {
        position: absolute;
        right: 10px;
        top: 50%;
        transform: translateY(-50%);
        padding: 5px 10px;
        background: #41B4FD;
        color: #fff;
        border-radius: 25px;
        font-size: 14px;
      }
    }
  }
}
</style>