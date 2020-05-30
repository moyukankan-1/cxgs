<template>
  <div class="error-book">
    <header-top title="错题本" :show="show"/>
    <ul>
      <li v-for="item in errorList" :key="item.id" @click="detail(item.itemId)">
        <h3>{{item.itemTitle}}</h3>
        <p><span>{{item.number}}</span>题</p>
      </li>
    </ul>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetError } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      errorList: [],
      show: true
    }
  },
  methods: {
    getError() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken()
      }
      GetError(requestData).then(res => {
        this.errorList = res.data.data.items
      }).catch(err => {})
    },
    detail(id) {
      this.$router.push({
        path: '/errorBookDetail',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    this.getError()
  }
}
</script>
<style lang="scss" scoped>
.error-book {
  ul {
    padding: 20px;
    
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      box-shadow: 0 0 5px #dddddd;
      padding: 10px;
      border-radius: 5px;
      p {
        span {
          color: #2E9DFE;
        }
      }
    }
  }
}
</style>