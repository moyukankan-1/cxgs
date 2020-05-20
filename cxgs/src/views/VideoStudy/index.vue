<template>
  <div class="video-study">
    <header-top title='视频学习' :show='true'/>
    <div class="study-container">
      <ul>
        <li v-for="item in videoList.item" :key="item.id" @click="playVideo(item.videoId)">
          <img :src="'https://demo201.jiudianlianxian.com' + item.image">
          <p>{{item.title}}</p>
          <span>{{item.time | times}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetVideoStudyMain } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import { format } from '@/utils/timeChange'
export default {
  components: {
    headerTop
  },
  data() {
    return {
      //视频数据
      videoList: {
        item: []
      }
    }
  },
  filters: {
    times(time) {
      return format(time)
    }
  },
  methods: {
    //获取视频列表
    getVideoStudyMain() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        currentPage: 1,
        videoNumber: 3
      }
      GetVideoStudyMain(requestData).then(res => {
        this.videoList.item = res.data.data.videoList
      }).catch(err => {})
    },
    //点击视频进入播放页
    playVideo(id) {
      this.$router.push({
        path: '/playVideo',
        query: {
          videoId: id
        }
      })
    }
  },
  mounted() {
    this.getVideoStudyMain()
  }
}
</script>
<style lang="scss" scoped>
.study-container {
  padding: 20px;
  ul {
    li {
      margin-bottom: 20px;
      img {
        width: 100%;
        height: 200px;
        border-radius: 10px;
      }
      p {
        margin: 10px 0;
      }
      span {
        background: #EEEEEE;
        padding: 2px 7px;
        border-radius: 25px;
        font-size: 14px;
        color: #ABABAB;
      }
    }
  }
}
</style>