<template>
  <div class="error-book-detail"> 
    <header-top title="详情" :show="show"/>
    
  </div>
</template>
<script>
import { GetErrorDetail } from '@/api/home'
import headerTop from '@/components/header/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      show: true,
      itemId: this.$route.query.id,
      thitiId: 0,
      detailList: {}
    }
  },
  methods: {
    getErrorDetail() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        itemId: this.itemId,
        shitiId: this.thitiId
      }
      GetErrorDetail(requestData).then(res => {
        this.detailList = res.data.data
      }).catch(err => {})
    }
  },
  mounted() {
    this.getErrorDetail()
  }
}
</script>
<style lang="scss" scoped>
</style>