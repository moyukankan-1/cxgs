<template>
  <div class="rank">
    <header-top title='排行榜' :show='true'/>
    <div class="rank-top">
      <div class="top">
        <img :src="rankList.image" alt="无法访问">
        <ul>
          <li>
            <span></span>
            <span>击败率</span>
          </li>
          <li>
            <span></span>
            <span>排名</span>
          </li>
          <li>
            <span></span>
            <span>正确率</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetRank } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop
  },
  data () {
    return {
      rankId: this.$route.query.id,
      rankList: {}
    }
  },
  methods: {
    getRank() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        id: this.rankId
      }
      GetRank(requestData).then(res => {
        this.rankList = res.data.data
        console.log(this.rankList)
      }).catch(err => {})
    }
  },
  activated() {
    this.getRank()
  }
}
</script>
<style lang="scss" scoped>
.rank {
  .rank-top {
    position: relative;
    background: #2470FD;
    margin-top: 20px;
    height: 150px;
    .top {
      position: absolute;
      left: 20px;
      right: 20px;
      top: 60px;
      height: 120px;
      border-radius: 10px;
      background: #fff;
      img {
        position: absolute;
        left: 50%;
        top: -35px;
        transform: translateX(-50%);
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 2px solid #999;
      }
    }
  }
}
</style>