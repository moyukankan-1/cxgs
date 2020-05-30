<template>
  <div class="question">
    <header-top title='试题' :show='true'/>
    <div class="question-list">
      <examine-list :list="examineList" :kao='false' :time='false'/>
    </div>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import examineList from '@/components/examine/index.vue'
import { GetQuestion } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    examineList
  },
  data () {
    return {
      examineList: []
    }
  },
  methods: {
    getQuestion() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken()
      }
      GetQuestion(requestData).then(res => {
        this.examineList = res.data.data.items
      }).catch(err => {})
    }
  },
  mounted() {
    this.getQuestion()
  }
}
</script>
<style lang="scss" scoped>
.question-list {
  padding: 20px;
}
</style>