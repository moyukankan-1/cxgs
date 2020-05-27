<template>
  <div class="player-container">
    <video-player  class="video-player vjs-custom-skin"
     ref="videoPlayer"
     :playsinline="true"
     :options="playerOptions"
    ></video-player>
    <div class="font">
      <span>{{play.title}}</span>
      <a href="javascript:;">{{play.time | times}}</a>
    </div>
  </div>
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import 'video.js/dist/video-js.css'
import { GetPlayVideo } from '@/api/home'
import { format } from '@/utils/timeChange'
  export default {
    components: {
      videoPlayer
    },
    data () {
      return {
        play: {},
        playerOptions : {
          playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
          autoplay: false, //如果true,浏览器准备好时开始回放。
          muted: false, // 默认情况下将会消除任何音频。
          loop: false, // 导致视频一结束就重新开始。
          preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          language: 'zh-CN',
          aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          sources: [{
            src: '',  // 路径
            type: 'video/mp4'  // 类型
          }],
          notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          controlBar: {
            timeDivider: true,
            durationDisplay: true,
            remainingTimeDisplay: false,
            fullscreenToggle: true  //全屏按钮
          }
        }
      }
    },
    filters: {
      times(time) {
        return format(time)
      }
    },
    mounted() {
      let requestData = {
        userId: this.getUserId,
        sessionId: this.getSessionId,
        token: this.getToken,
        videoId: this.$route.query.videoId
      }
      GetPlayVideo(requestData).then(res => {
        this.play = res.data.data
        this.playerOptions.sources[0].src = "https://demo201.jiudianlianxian.com" + this.play.videoUrl
      }).catch(err => {})
    }  
  }
</script>

<style lang="scss" scoped>
  .font {
    padding: 10px;
    span {
      display: block;
    }
    a {
      display: block;
      color: #000;
      width: 80px;
      height: 25px;
      text-align: center;
      line-height: 25px;
      font-size: 14px;
      background: rgb(230,230,230);
      border-radius: 20px;
      margin-top: 10px;
    }
  }
</style>