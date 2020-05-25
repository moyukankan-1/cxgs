<template>
  <div class="history">
    <header-top title='历史考试' :show='true'/>
    <clickMove :titles='titles.item'  @already1='already1' @already2='already2'/>
    <scroll class="scroll" @pullUp='loadMore' :pull-up-load='pullUpLoad' ref="scroll">
      <ul>
        <li v-for="item in history.item" :key="item.id" class="lis" @click="result(item.id)">
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
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import clickMove from '@/components/clickMove/index.vue'
import Scroll from '@/components/scroll/index.vue'
import diaLog from '@/components/dialog/index.vue'
import Loading from '@/components/loading/index.vue'
import { GetHistory } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    clickMove,
    Scroll,
    diaLog,
    Loading
  },
  data() {
    return {
      titles: {
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
      },
      history: {
        item: []
      },
      type: 1,
      message: '',
      dialogShow: false,
      pullUpLoad: true,
      page: 1,
      //判断是否上拉
      isPull: false,
      //显示加载组件
      isLoading: false,
      //数据加载完成
      success: false
    }
  },
  methods: {
    getHistory() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        historyType: this.type,
        currentPage: this.page,
        examNumber: 10
      }
      GetHistory(requestData).then(res => {
        if(this.isPull) {
          if(res.data.data.examList == '') {
            this.success = true
          }
          this.history.item.push(...res.data.data.examList)
          //数据加载完成取消loading
          this.isLoading = false
        }else {
          this.history.item = res.data.data.examList
        }
      }).catch(err => {})
    },
    //练习考试
    already1() {
      //练习模式type
      this.type = 1
      //重置当前页码
      this.page = 1
      this.isPull = false
      this.$refs.scroll.scroll.scrollTo(0,0,0)
      this.getHistory()
    },
    //闯关模式
    already2() {
      //闯关模式type
      this.type = 2
      //重置当前页码
      this.page = 1
      this.isPull = false
      this.$refs.scroll.scroll.scrollTo(0,0,0)
      this.getHistory()
    },
    //上拉加载下一页
    loadMore() {
      //上拉加载打开loading
      this.isLoading = true
      //页码加一
      this.page++
      this.getHistory()
      this.isPull = true
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
    },
    //考试结果进入
    result(id) {
      this.$router.push({
        path: '/result',
        query: {
          id: id
        }
      })
    }
  },
  activated() {
    this.$refs.scroll.scroll.refresh()
  },
  mounted() {
    this.getHistory()
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
    padding-bottom: 0;
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