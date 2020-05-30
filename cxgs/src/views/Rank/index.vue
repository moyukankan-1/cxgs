<template>
  <div class="rank">
    <header-top title='排行榜' :show='true'/>
    <template v-if="!noText">
      <div class="rank-top">
        <div class="top">
          <img :src="rankList.image" alt="无法访问">
          <ul>
            <li>
              <span>{{rankList.beatrate}}</span>
              <span>击败率</span>
            </li>
            <li>
              <span>{{rankList.sortNumber}}</span>
              <span>排名</span>
            </li>
            <li>
              <span>{{rankList.accuracy}}</span>
              <span>正确率</span>
            </li>
          </ul>
        </div>
        <div class="rank-list">
          <ul>
            <template v-for="item in rankList.sortList">
              <li :key="item.id" v-if="rankList.sortList.length > 0">
                <template>
                  <img src="@/assets/images/one.png" alt="" class="item-rank-img" v-if="item.sortNumber == 1">
                  <img src="@/assets/images/two.png" alt="" class="item-rank-img" v-if="item.sortNumber == 2">
                  <img src="@/assets/images/three.png" alt="" class="item-rank-img" v-if="item.sortNumber == 3">
                  <p v-if="item.sortNumber > 3">{{item.sortNumber}}</p>
                </template>
                <img :src="'https://demo201.jiudianlianxian.com' + item.image" alt="无" class="item-tou-img">
                <h4>{{item.name}}</h4>
                <span>第{{item.sortNumber}}名</span>
              </li>
            </template>
            <div v-if="rankList.sortList.length == 0" class="data-sky">暂无数据</div>
          </ul>
        </div>
      </div>
    </template>
    <div v-if="noText" class="no-text">找不到这次考试</div>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetRank } from '@/api/home'
import Loading from '@/components/loading/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    Loading
  },
  data () {
    return {
      rankId: this.$route.query.id,
      rankList: {},
      noText: '',
      isLoading: true
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
        this.isLoading = false
        if(res.data.code == 0) {
          this.noText = false
          this.rankList = res.data.data
        }else {
          this.noText = true
        }
      }).catch(err => {})
    }
  },
  mounted() {
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
      ul {
        position: absolute;
        left: 30px;
        right: 30px;
        bottom: 20px;
        display: flex;
        justify-content: space-between;
        li {
          text-align: center;
          span {
            display: block;
            color: #B1B1B1;
            font-size: 14px;
          }
          & span:first-child {
            color: #FF8411;
            font-size: 18px;
          }
        }
      }
    }
    .rank-list {
      position: absolute;
      top: 200px;
      left: 20px;
      right: 20px;
      li {
        display: flex;
        line-height: 60px;
        margin-bottom: 20px;
        .item-rank-img {
          width: 40px;
          height: 50px;
          margin-top: 5px;
        }
        p {
          width: 40px;
          height: 50px;
          margin-top: 5px;
          text-align: center;
          font-size: 18px;
        }
        .item-tou-img {
          width: 60px;
          height: 60px;
          margin-left: 10px;
          font-size: 12px;
          border: 1px solid #999;
          border-radius: 50%;
        }
        h4 {
          display: block;
          margin-left: 10px;
        }
        span {
          flex: 1;
          text-align: right;
        }
      }
    }
    .data-sky {
      text-align: center;
      font-size: 20px;
    }
  }
  .no-text {
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
  }
}
</style>