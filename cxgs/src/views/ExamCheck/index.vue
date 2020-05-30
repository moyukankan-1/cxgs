<template>
  <div class="exam-check">
    <header-top title="考核" :show="true"/>
    <click-move :titles='titles' @already="already" />
    <ul>
      <li v-for="item in checkList" :key="item.id">
        <h3>{{item.month}}月考核</h3>
        <div>
          <span>公司：</span>
          {{item.class}}
        </div>
        <div>
          <span>部门：</span>
          {{item.department}}
        </div>
        <img src="@/assets/images/check-yes.png" alt="" v-if="item.score != ''">
        <img src="@/assets/images/check-no.png" alt="" v-else>
      </li>
    </ul>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import clickMove from '@/components/clickMove/index.vue'
import { GetCheck } from '@/api/home'
import Loading from '@/components/loading/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    clickMove,
    Loading
  },
  data () {
    return {
      titles: [
        {
          id: 0,
          title: '第一季度'
        },
        {
          id: 1,
          title: '第二季度'
        },
        {
          id: 2,
          title: '第三季度'
        },
        {
          id: 3,
          title: '第四季度'
        }
      ],
      quarter: 1,
      checkList: [],
      isLoading: true
    }
  },
  methods: {
    getCheck() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        year: 0,
        quarter: this.quarter
      }
      GetCheck(requestData).then(res => {
        this.isLoading = false
        this.checkList = res.data.data.items
      }).catch(err => {})
    },
    already(id) {
      this.isLoading = true
      this.quarter = id + 1
      this.getCheck()
    }
  },
  mounted() {
    this.getCheck()
  }
}
</script>
<style lang="scss" scoped>
.exam-check {
  ul {
    padding: 20px;
    li {
      position: relative;
      padding: 10px;
      box-shadow: 0 0 10px #dedede;
      margin-bottom: 10px;
      h3 {
        font-weight: bold;
      }
      div {
        font-size: 14px;
        margin: 10px 0;
        span {
          color: #aeaeae;
        }
      }
      img {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 80px;
      }
    }
  }
}
</style>