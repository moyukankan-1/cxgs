<template>
  <div class="home">
    <header-top title="首页" :show="show"/>
    <scroll class="scroll">
      <div class="home-container">
        <img :src="'https://demo201.jiudianlianxian.com' + homeList.item.banner">
        <ul>
          <li v-for="item in tabList.item" :key="item.id" @click="push(item.id)">
            <svg-icon :icon-class="item.svg"></svg-icon>
            <div>{{item.test}}</div>
            <span v-if="item.type == 0">{{homeList.item.examNumber}}</span>
            <span v-if="item.type == 1">{{homeList.item.videoNumber}}</span>
          </li>
        </ul>
        <div class="home-list">
          <div class="home-list-title">
            <h3>待考试列表</h3>
            <span>全部></span>
          </div>
          <examine-list :list="examineList.item" :kao='true'/>
        </div>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { ref, onMounted, reactive } from '@vue/composition-api'
import { GetHome } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import examineList from '@/components/examine/index.vue'
import Scroll from '@/components/scroll/index.vue'
export default {
  components: {
    headerTop,
    examineList,
    Scroll
  },
  setup(props, { root }) {
    const show = ref(false)
    //首页数据
    const homeList = reactive({
      item: {}
    })
    //tab选项栏目数据
    const tabList = reactive({
      item: [
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
      ]
    })
    //待考试列表数据
    const examineList = reactive({
      item: [
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
        },
      ]
    })
    //首页数据
    const getHome = () => {
      const data = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
      }
      GetHome(data).then(res => {
        homeList.item = res.data.data
        console.log(homeList.item)
      }).catch(err => {})
    }
    //点击tab栏目跳转
    const push = (id) => {
      if(id == 0) {
        root.$router.push('/examineCarry')
      }else if(id == 1) {
        root.$router.push('/videoStudy')
      }else if(id == 3) {
        root.$router.push('/practice')
      }
    }
    /**
     * 挂载完成生命周期
     */
    onMounted(() => {
      getHome()
    })
    return {
      show,
      homeList,
      tabList,
      examineList,
      push
    }
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