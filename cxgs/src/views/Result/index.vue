<template>
  <div class="result">
    <header-top title='考试结果' :show='true'/>
    <div class="result-top">
      <div class="top">
        <div class="top-true">
          <span>{{resultList.accuracy}}</span>
          <p>正确率</p>
        </div>
        <span class="top-span1">查看错题</span>
        <span class="top-span2" @click="rank(resultId)">排行榜</span>
      </div>
    </div>
    <div class="result-container">
      <div class="container-title">
        <h4>答题卡</h4>
        <p>用时{{resultList.time}}</p>
      </div>
      <ul>
        <li v-for="item in resultList.answerList" :key="item.id">
          <span>{{item.shitiTihao}}</span>
          <svg-icon :icon-class="item.result | accuracy"/>
        </li>
      </ul>
    </div>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetDetail } from '@/api/home'
import Loading from '@/components/loading/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    Loading
  },
  data () {
    return {
      resultId: this.$route.query.id,
      resultList: {},
      isLoading: true
    }
  },
  filters: {
    accuracy(item) {
      if(item == 0) {
        return 'error'
      }else if(item == 1) {
        return 'yes'
      }else {
        return 'yuan'
      }
    }
  },
  methods: {
    getDetail() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        id: this.resultId
      }
      GetDetail(requestData).then(res => {
        this.isLoading = false
        this.resultList = res.data.data
      }).catch(err => {})
    },
    rank(id) {
      this.$router.push({
        path: '/rank',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    this.getDetail()
  }
}
</script>
<style lang="scss" scoped>
.result {
  .result-top {
    position: relative;
    background: #2470FD;
    margin-top: 20px;
    height: 150px;
    .top {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 40px;
      height: 170px;
      border-radius: 10px;
      background: #fff;
      .top-true {
        position: absolute;
        left: 50%;
        top: 20px;
        transform: translateX(-50%);
        width: 70px;
        height: 70px;
        border: 10px solid #D8E5FE;
        border-radius: 50%;
        text-align: center;
        span {
          color: #009CFF;
          font-weight: bold;
        }
        p {
          color: #ACACAC;
        }
      }
      span {
        width: 80px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        font-size: 14px;
      }
      .top-span1 {
        position: absolute;
        left: 40px;
        bottom: 20px;
        border: 1px solid #D8D8D8;
        color: #D8D8D8;
      }
      .top-span2 {
        position: absolute;
        right: 40px;
        bottom: 20px;
        color: #fff;
        background: #3FB3FD;
      }
    }
  }
  .result-container {
    margin-top: 80px;
    padding: 20px;
    .container-title {
      display: flex;
      justify-content: space-between;
      h4 {
        font-weight: bold;
      }
      p {
        color: #ACACAC;
      }
    }
    ul {
      li {
        display: inline-block;
        margin-top: 20px;
        width: 65px;
        font-size: 18px;
        span {
          margin-right: 5px;
        }
      }
    }
  }
}
</style>