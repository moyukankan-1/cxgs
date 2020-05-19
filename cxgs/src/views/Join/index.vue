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
import { ref, onMounted, reactive } from '@vue/composition-api'
import TextList from '@/components/text/index.vue'
export default {
  components: {
    TextList,
    headerTop,
    Toolcip
  },
  setup(props,{ root }) {
    const shitiId = ref(0)
    const joinList = reactive({
      item: {}
    })

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
        joinList.item = res.data.data
      }).catch(err => {})
    }
    onMounted(() => {
      getJoin()
    })

    return {
      getJoin,
      joinList
    }
  }
}
</script>
<style lang="scss" scoped>
</style>