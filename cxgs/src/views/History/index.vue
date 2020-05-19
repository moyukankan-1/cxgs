<template>
  <div class="history">
    <header-top title='历史考试' :show='true'/>
    <clickMove :titles='titles.item'  @already1='already1' @already2='already2'/>
    <scroll class="scroll" @pullUp='pullUp'>
      <ul>
        <li v-for="item in history.item" :key="item.id" class="lis">
          <h3>{{item.title}}</h3>
          <div class="li-container">
            <li>
              <div>{{item.answerNumber}}</div>
              <p>答题数</p>
            </li>
            <li>
              <div>{{item.answerNumber}}</div>
              <p>答题数</p>
            </li>
            <li>
              <div>{{item.trueNumber}}</div>
              <p>答对数</p>
            </li>
            <li>
              <div>{{item.falseNumber}}</div>
              <p>答错数</p>
            </li>
          </div>
          <div class="li-bottom">
            <div>{{item.time}}</div>
            <div>正确率：<span>{{item.accuracy}}</span></div>
          </div>
        </li>
      </ul>
    </scroll>
    <dia-log :text="message" v-show="dialogShow"/> 
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import clickMove from '@/components/clickMove/index.vue'
import Scroll from '@/components/scroll/index.vue'
import diaLog from '@/components/dialog/index.vue'
import { GetHistory } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import { onMounted, reactive, ref } from '@vue/composition-api'
export default {
  components: {
    headerTop,
    clickMove,
    Scroll,
    diaLog
  },
  setup(props) {
    const titles = reactive({
      item: [
        {
          id: 0,
          title: '练习考试'
        },
        {
          id: 1,
          title: '闯关模式'
        },
      ]
    })
    const history = reactive({
      item: []
    })
    const type = ref(1)
    const message = ref('')
    const dialogShow = ref(false)
    const getHistory = () => {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        historyType: type.value,
        currentPage: 1,
        examNumber: 10
      }
      GetHistory(requestData).then(res => {
        history.item = res.data.data.examList
      }).catch(err => {})
    }
    //练习考试
    const already1 = () => {
      type.value = 1
      getHistory()
    }
    //闯关模式
    const already2 = () => {
      type.value = 2
      getHistory()
    }
    //上拉加载下一页
    const pullUp = () => {
      console.log(11)
    }

    onMounted(() => {
      getHistory()
    })

    return {
      titles,
      history,
      type,
      already1,
      already2,
      pullUp,
      message,
      dialogShow
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  position: absolute;
  top: 103px;
  bottom: 60px;
  left: 0;
  right: 0;
}
.history {
  ul {
    padding: 20px;
    .lis {
      box-shadow: 0px 0px 5px rgb(230,230,230);
      margin-bottom: 20px;
      h3 {
        padding: 10px;
        border-bottom: 1px solid rgb(230,230,230);
        font-weight: bold;
      }
      .li-container {
        display: flex;
        li {
          flex: 1;
          justify-content: space-between;
          text-align: center;
          border-bottom: 1px solid rgb(230,230,230);
          padding: 5px 0;
          div {
            font-size: 20px;
            margin-bottom: 5px;
          }
          p {
            font-size: 14px;
            color: #B3B3B3;
          }
        }
      }
      .li-bottom {
        display: flex;
        justify-content: space-between;
        padding: 10px 20px;
        font-size: 14px;
        div:first-child {
          color: #B3B3B3;
        }
        div:last-child {
          color: #B3B3B3;
          span {
            color: #427FFC;
          }
        }
      }
    }
  }
}
</style>