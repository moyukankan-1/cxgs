<template>
  <div class="examine">
    <ul>
      <li v-for="item in list" :key="item.id">
        <span v-if="kao">考</span>
        <h3 :class="kao? 'left':''">{{item.title || item.itemName}}</h3>
        <div class="examine-num">共计{{item.num || item.number}}题</div>
        <div class="examine-title" v-if="time">考试时间：{{item.time}}</div>
        <div class="examine-button" @click="answer">答题</div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: ['list','kao','time'],
  data() {
    return {
    }
  },
  methods: {
    answer() {
      this.$router.push('/answer')
    }
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
    .left {
      margin-left: 25px;
    }
  }
}
</style>