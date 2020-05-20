<template>
  <div class="join">
    <toolcip />
    <header-top title='正在考试' :show='true'/>
    <text-list :textList='joinList.item' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import Toolcip from '@/components/toolcip/index.vue'
import { GetJoin } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import TextList from '@/components/text/index.vue'
export default {
  components: {
    TextList,
    headerTop,
    Toolcip
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