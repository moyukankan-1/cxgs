<template>
  <div class="practice">
    <header-top title='练习模式' :show='true'/>
    <div class="title">试题分类</div>
    <ul>
      <li v-for="(item,index) in itemList.item" :key="item.id" :class="index == idx? 'active': ''" @click="activeIdx(index)">{{item.itemName}}</li>
    </ul>
    <div class="title">试题类型</div>
    <ul>
      <li v-for="item in type.item" :key="item.id" :class="item.id == typeIdx? 'active': ''" @click="activeTypeIdx(item.id)">{{item.name}}</li>
    </ul>
    <p @click="join">开始练习</p>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetPractice } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
  components: {
    headerTop
  },
  setup(props,{ root }){
    const itemList = reactive({
      item: []
    })
    const type = reactive({
      item: [
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
          id: 3,
          name: '判断题',
          type: 3
        },
      ]
    })
    const idx = ref(0)
    const typeIdx = ref(0)
    const itemId = ref(2010381)
    const shitiType = ref(1)

    const getPractice = () => {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken()
      }
      GetPractice(requestData).then(res => {
        itemList.item = res.data.data.itemList
      }).catch(err => {})
    }

    const activeIdx = (index) => {
      idx.value = index
      itemId.value = itemList.item[index].itemId
    }
    const activeTypeIdx = (index) => {
      typeIdx.value = index
      shitiType.value = type.item[index].type
    }
    onMounted(() => {
      getPractice()
    })

    const join = () => {
      root.$router.push({
        path: '/join',
        query: {
          itemId: itemId.value,
          shitiType: shitiType.value
        }
      })
    }

    return {
      idx,
      typeIdx,
      getPractice,
      itemList,
      type,
      activeIdx,
      activeTypeIdx,
      itemId,
      shitiType,
      join
    }
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