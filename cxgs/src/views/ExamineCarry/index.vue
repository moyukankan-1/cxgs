<template>
  <div class="examine-carry">
    <toolcip />
    <header-top title='考试' :show='true'/>
    <scroll class="scroll">
      <clickMove :titles='titles.item' @already1='already1' @already2='already2'/>
      <div class="carry-list">
        <examine-list :list='examineList.item' :kao='false' v-if='hidden'/>
        <div v-else class="not">暂无数据</div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Toolcip from '@/components/toolcip/index.vue'
import headerTop from '@/components/header/index.vue'
import clickMove from '@/components/clickMove/index.vue'
import examineList from '@/components/examine/index.vue'
import Scroll from '@/components/scroll/index.vue'
import { reactive, ref } from '@vue/composition-api'
export default {
  components: {
    Toolcip,
    headerTop,
    clickMove,
    examineList,
    Scroll
  },
  setup(props) {
    const titles = reactive({
      item: [
        {
          id: 0,
          title: "可考试"
        },
        {
          id: 1,
          title: "已考试"
        }
      ]
    })
    const examineList = reactive({
      item: [
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '新城分校区学年高二年级上学期',
          num: 18,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020高二年级上学期',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
      ]
    })
    const hidden = ref(true)
    const already1 = () => {
      hidden.value = true
    }
    const already2 = () => {
      hidden.value = false
    }
    return {
      titles,
      examineList,
      hidden,
      already1,
      already2
    }
  }
}
</script>
<style lang="scss" scoped>
.scroll {
  overflow: hidden;
  position: absolute;
  top: 45px;
  bottom: 0;
  left: 0;
  right: 0;
}
.carry-list {
  padding: 0 20px;
}
.not {
  text-align: center;
  margin: 50px;
  font-size: 20px;
}
</style>