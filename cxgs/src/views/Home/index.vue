<template>
  <div class="home">
    <header-top title="首页" :show="show"/>
    <scroll class="scroll" ref="scroll">
      <div class="home-container">
        <img src="@/assets/images/home-1.png">
        <ul>
          <li v-for="item in tabList" :key="item.id" @click="push(item.id)">
            <svg-icon :icon-class="item.svg"></svg-icon>
            <div>{{item.test}}</div>
            <span v-if="item.type == 0">{{homeList.examNumber}}</span>
            <span v-if="item.type == 1">{{homeList.videoNumber}}</span>
          </li>
        </ul>
        <div class="home-list">
          <div class="home-list-title">
            <h3>待考试列表</h3>
            <span>全部></span>
          </div>
          <examine-list :list="examineList" :kao='true' :time='true'/>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetHome } from '@/api/home'
import examineList from '@/components/examine/index.vue'
import Scroll from '@/components/scroll/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    examineList,
    Scroll
  },
  data() {
    return {
      show: false,
      //首页数据
      homeList: {},
      tabList: [
        {
          id: 0,
          svg: 'write',
          test: '考试',
          type: 0
        },
        {
          id: 1,
          svg: 'video',
          test: '视频学习',
          type: 1
        },
        {
          id: 2,
          svg: 'rise',
          test: '考试查看'
        },
        {
          id: 3,
          svg: 'exercise',
          test: '练习模式'
        },
        {
          id: 4,
          svg: 'run',
          test: '闯关模式'
        }
      ],
      examineList: [
        {
          title: '2019-2020学年行政职业能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年公共基础知识',
          num: 16,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020行政职业能力+交通基础知识',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '2019-2020学年综合学习能力',
          num: 12,
          time: '06/10 08:30 - 06/14 08:30'
        },
        {
          title: '新城分校区学年高二年级上学期',
          num: 18,
          time: '06/10 08:30 - 06/14 08:30'
        }
      ]
    }
  },
  methods: {
     //首页数据
    getHome() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken()
      }
      GetHome(requestData).then(res => {
        this.$refs.scroll.scroll.refresh()
        this.homeList = res.data.data
      }).catch(err => {})
    },
    //点击tab栏目跳转
    push(id) {
      if(id == 0) {
        this.$router.push('/examineCarry')
      }else if(id == 1) {
        this.$router.push('/videoStudy')
      }else if(id == 2) {
        this.$router.push('/examCheck')
      }else if(id == 3) {
        this.$router.push('/practice')
      }else if(id == 4) {
        this.$router.push('/join')
      }
    }
  },
  /**
  * 挂载完成生命周期
  */
  mounted() {
    //获取首页数据
    this.getHome()
  }
}
</script>
<style lang="scss" scoped>
.home {
  .scroll {
    overflow: hidden;
    position: absolute;
    top: 45px;
    bottom: 60px;
    left: 0;
    right: 0;
  }
  .home-container {
    padding: 10px 20px;
    img {
      width: 100%;
      height: 170px;
      border-radius: 8px;
    }
    ul {
      display: flex;
      margin-top: 20px;
      & li:last-child {
        margin-right: 0;
      }
      li {
        position: relative;
        flex: 1;
        text-align: center;
        margin-right: 10px;
        svg {
          width: 30px;
          height: 40px;
          color: #000;
        }
        div {
          font-size: 14px;
        }
        span {
          position: absolute;
          top: 0;
          right: 10px;
          padding: 3px 5px;
          border-radius: 50%;
          background: #FFAE00;
          color: #fff;
          font-size: 12px;
        }
      }
    }
    .home-list {
      margin-top: 20px;
      .home-list-title {
        display: flex;
        justify-content: space-between;
        h3 {
          font-weight: bold;
        }
        span {
          color: #41B4FD;
        }
      }
    }
  }
}
</style>