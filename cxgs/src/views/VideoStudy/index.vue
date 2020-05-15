<template>
  <div class="video-study">
    <header-top title='视频学习' :show='true'/>
    <click-move :titles='titles.item'/>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import clickMove from '@/components/clickMove/index.vue'
import { reactive, onMounted } from '@vue/composition-api'
import { GetVideoStudyMain } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    clickMove
  },
  setup(props) {
    const titles = reactive({
      item: [
        {
          id: 0,
          title: '可学习'
        },
        {
          id: 1,
          title: '已学习'
        }
      ]
    })
    //获取视频列表
    const getVideoStudyMain = () => {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        currentPage: 1,
        videoNumber: 3
      }
      GetVideoStudyMain(requestData).then(res => {
        console.log(res)
      }).catch(err => {})
    }

    onMounted(() => {
      getVideoStudyMain()
    })


    return {
      titles,
      getVideoStudyMain
    }
  }
}
</script>
<style lang="scss" scoped>
</style>