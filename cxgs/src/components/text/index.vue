<template>
  <div class="text">
    <span>[{{textList.type}}]</span>
    <h4>{{textList.title}}</h4>
    <ul>
      <li v-for="(item,index) in textList.items" :key="item.id" @click="tabItem(index)">
        <div :class="tabIndex == index? 'active':''">{{item.chooseItem}}</div>
        <div>{{item.chooseDesc}}</div>
      </li>
    </ul>
    <div class="submit">
      <button>提交</button>
      <div>{{time}}s</div>
      <button @click="next" :disabled='end.vaue'>下一题</button>
    </div>
    <dia-log :text="message" v-show="dialogShow" />
  </div>
</template>
<script>
import { GetAnswer, GetJoin } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import diaLog from '@/components/dialog/index.vue'
export default {
  props: ['textList'],
  components: {
    diaLog
  },
  data() {
    return {
      tabIndex: -1,
      shitiId: 0,
      chooseItem: '',
      dialogShow: false,
      message: '',
      time: 30,
      timer: '',
      end: false
    }
  },
  methods: {
    tabItem(index) {
      this.tabIndex = index
      this.chooseItem = this.textList.items[index].chooseItem
      this.shitiId = this.textList.shitiId
    },
    next() {
      if(!this.chooseItem) {
        return 
      }
      clearInterval(this.timer)
      this.shitiId++
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        shitiId: this.shitiId,
        answer: this.chooseItem
      }
      GetAnswer(requestData).then(res => {
        this.dialogShow = true
        if(res.data.data.isTrue) {
          this.message = '正确！'
        }else {
          this.message = '错误！'
        }
        setTimeout(() => {
          this.dialogShow = false
          this.getJoin()
        },1000)
      }).catch(err => {})
    },
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
        if(res.data.data.isEnd) {
          this.message = '当前为最后一题'
          this.end = true
          return 
        }
        this.textList = res.data.data
        //清空选项
        this.tabIndex = -1
        this.message = '',
        this.time = 60
        this.age()
      }).catch(err => {})
    },
    age() {
      this.timer = setInterval(() => {
        this.time--
        if(this.time == 0) {
          this.message = '超时！'
          clearInterval(this.timer)
          this.dialogShow = true
          setTimeout(() => {
            this.dialogShow = false
            this.getJoin()
          },1000)
        }
      },1000)
    }
  },
  mounted () {
    this.end = false
    this.age()
  },
  //页面退出清空定时器
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.text {
  padding: 20px;
  span {
    color: #2998FF;
  }
  h4 {
    display: inline;
    line-height: 30px;
  }
  ul {
    margin-top: 20px;
    li {
      position: relative;
      height: 50px;
      padding: 10px;
      border: 1px solid #DFDFDF;
      display: flex;
      margin-bottom: 20px;
      & div:first-child {
        position: absolute;
        left: 20px;
        top: 50%;
        transform: translateY(-50%);
        width: 30px;
        height: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 50%;
        background: #DCDCDC;
        color: #fff;
        font-weight: bold;
      }
      & div:last-child {
        position: absolute;
        left: 60px;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 14px;
      }
    }
    .active {
      background: #2E9DFE !important;
    }
  }
  .submit {
    display: flex;
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
    justify-content: space-between;
    button:first-child {
      padding: 7px 15px;
      border: 1px solid #DFDFDF;
      border-radius: 20px;
      color: #A7A7A7;
    }
    div {
      line-height: 35px;
      border: none;
      color: #000;
    }
    button:last-child  {
      padding: 7px 15px;
      border-radius: 20px;
      color: #fff;
      background: #3FB3FD;
      border: none;
    }
  }
}
</style>