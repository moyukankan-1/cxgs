<template>
  <div class="text">
    <span>[{{textList.type}}]</span>
    <h4>{{textList.title}}</h4>
    <ul>
      <li v-for="(item,index) in textList.items" :key="item.id" @click="tabItem(index)">
        <div :class="tabIndex == index? 'active':''">{{item.chooseItem}}</div>
        <div>{{item.chooseDesc}}</div>
      </li>
    </ul>
    <div class="submit">
      <div>提交</div>
      <div>{{time}}s</div>
      <div @click="next">下一题</div>
    </div>
    <dia-log :text="message" v-show="dialogShow" />
  </div>
</template>
<script>
import { onMounted, onUnmounted, ref } from '@vue/composition-api'
import { GetAnswer, GetJoin } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import diaLog from '@/components/dialog/index.vue'
export default {
  props: ['textList'],
  components: {
    diaLog
  },
  setup(props, { root }) {
    const tabIndex = ref(-1)
    const shitiId = ref(0)
    const chooseItem = ref('')
    const dialogShow = ref(false)
    const message = ref('')
    const time = ref(30)
    const timer = ref('')

    const tabItem = (index) => {
      tabIndex.value = index
      chooseItem.value = props.textList.items[index].chooseItem
      shitiId.value = props.textList.shitiId
    }
    const next = () => {
      clearInterval(timer.value)
      shitiId.value++
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        shitiId: shitiId.value,
        answer: chooseItem.value
      }
      GetAnswer(requestData).then(res => {
        dialogShow.value = true
        if(res.data.data.isTrue) {
          message.value = '正确！'
        }else {
          message.value = '错误！'
        }
        setTimeout(() => {
          dialogShow.value = false
          getJoin()
        },1000)
      }).catch(err => {})
    }

    const getJoin = () => {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        itemId: root.$route.query.itemId,
        shitiType: root.$route.query.shitiType,
        shitiId: shitiId.value
      }
      GetJoin(requestData).then(res => {
        props.textList = res.data.data
        //清空选项
        tabIndex.value = -1
        message.value = '',
        time.value = 60
        age()
      }).catch(err => {})
    }

    const age = () => {
      timer.value = setInterval(() => {
        time.value--
        if(time.value == 0) {
          message.value = '超时！'
          clearInterval(timer.value)
          dialogShow.value = true
          setTimeout(() => {
            dialogShow.value = false
            getJoin()
          },1000)
        }
      },1000)
    }

    onMounted(() => {
      age()
    })
    //页面退出-清空定时器
    onUnmounted(() => {
      clearInterval(timer.value)
    })
    return {
      tabIndex,
      tabItem,
      chooseItem,
      dialogShow,
      message,
      time,
      timer,
      next
    }
  }
}
</script>
<style lang="scss" scoped>
.text {
  padding: 20px;
  span {
    color: #2998FF;
  }
  h4 {
    display: inline;
    line-height: 30px;
  }
  ul {
    margin-top: 20px;
    li {
      position: relative;
      height: 50px;
      padding: 10px;
      border: 1px solid #DFDFDF;
      display: flex;
      margin-bottom: 20px;
      & div:first-child {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        background: #DCDCDC;
        color: #fff;
        font-weight: bold;
      }
      & div:last-child {
        position: absolute;
        left: 60px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }
    .active {
      background: #2E9DFE !important;
    }
  }
  .submit {
    display: flex;
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
    justify-content: space-between;
    div {
      padding: 7px 15px;
      border: 1px solid #DFDFDF;
      border-radius: 20px;
      color: #A7A7A7;
    }
    div:nth-child(2) {
      border: none;
      color: #000;
    }
    div:last-child {
      color: #fff;
      background: #3FB3FD;
      border: none;
    }
  }
}
</style>