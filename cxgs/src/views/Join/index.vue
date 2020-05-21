<template>
  <div class="join">
    <text-list :textList='joinList.item' />
  </div>
</template>
<script>
import { GetJoin } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import TextList from '@/components/text/index.vue'
export default {
  components: {
    TextList
  },
  data() {
    return {
      shitiId: 0,
      joinList: {
        item: {}
      }
    }
  },
  methods: {
    getJoin() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        itemId: this.$route.query.itemId,
        shitiType: this.$route.query.shitiType,
        shitiId: this.shitiId
      }
      GetJoin(requestData).then(res => {
        this.joinList.item = res.data.data
      }).catch(err => {})
    }
  },
  mounted() {
    this.getJoin()
  }
}
</script>
<style lang="scss" scoped>
</style>