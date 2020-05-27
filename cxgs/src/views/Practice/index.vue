<template>
  <div class="practice">
    <header-top title='练习模式' :show='true'/>
    <div class="title">试题分类</div>
    <ul>
      <li v-for="(item,index) in itemList" :key="item.id" :class="index == idx? 'active': ''" @click="activeIdx(index)">{{item.itemName}}</li>
    </ul>
    <div class="title">试题类型</div>
    <ul>
      <li v-for="item in type" :key="item.id" :class="item.id == typeIdx? 'active': ''" @click="activeTypeIdx(item.id)">{{item.name}}</li>
    </ul>
    <p @click="join">开始练习</p>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetPractice } from '@/api/home'
export default {
  components: {
    headerTop
  },
  data() {
    return {
      itemList: [],
      type: [
        {
          id: 0,
          name: '单选题',
          type: 1
        },
        {
          id: 1,
          name: '多选题',
          type: 2
        },
        {
          id: 2,
          name: '判断题',
          type: 3
        }
      ],
      idx: 0,
      typeIdx: 0,
      itemId: 2010381,
      shitiType: 1,
    }
  },
  methods: {
    getPractice() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken
      }
      GetPractice(requestData).then(res => {
        this.itemList = res.data.data.itemList
      }).catch(err => {})
    },
    activeIdx(index) {
      this.idx = index
      this.itemId = this.itemList[index].itemId
    },
    activeTypeIdx(index) {
      this.typeIdx = index
      this.shitiType = this.type[index].type
    },
    join() {
      this.$router.push({
        path: '/join',
        query: {
          itemId: this.itemId,
          shitiType: this.shitiType
        }
      })
    }
  },
  mounted() {
    this.getPractice()
  }
}
</script>
<style lang="scss" scoped>
.practice {
  .title {
    padding-left: 20px;
    padding-top: 20px;
    font-weight: 600;
  }
  ul {
    display: flex;
    padding: 20px;
    li {
      border: 1px solid #DFE4EB;
      margin-right: 10px;
      padding: 10px 20px;
      border-radius: 20px;
      font-size: 14px;
    }
  }
  p {
    position: absolute;
    bottom: 30px;
    width: calc(100% - 40px);
    margin-left: 20px;
    height: 40px;
    line-height: 40px;
    background: #2998FF;
    color: #fff;
    text-align: center;
    border-radius: 20px;
  }
  .active {
    border: 1px solid #2998FF;
    color: #2998FF;
  }
}
</style>