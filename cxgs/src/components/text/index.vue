<template>
  <div class="wrap-text">
    <toolcip />
    <header-top title='正在考试' :show='true'/>
    <div class="text">
      <span>[{{dataTextList.type | types}}]</span>
      <h4>{{dataTextList.title}}</h4>
      <ul v-if="dataTextList.type == 1 || dataTextList.type == 3">
        <li v-for="(item,index) in dataTextList.items" :key="item.id" @click="tabItem(index)">
          <div :class="tabIndex == index? 'active':''">{{item.chooseItem}}</div>
          <div>{{item.chooseDesc}}</div>
        </li>
      </ul>
      <ul v-if="dataTextList.type == 2">
        <li v-for="(item,index) in dataTextList.items" :key="item.id" @click="choice(index)">
          <div ref="div">{{item.chooseItem}}</div>
          <div>{{item.chooseDesc}}</div>
        </li>
      </ul>
      <div class="submit">
        <button>提交</button>
        <div>{{time}}s</div>
        <button @click="next" :disabled='this.end'>下一题</button>
      </div>
      <dia-log :text="message" v-show="dialogShow" />
    </div>
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import Toolcip from '@/components/toolcip/index.vue'
import { GetAnswer, GetJoin } from '@/api/home'
import { getUserId, getSessionId, getToken } from '@/utils/app'
import diaLog from '@/components/dialog/index.vue'
export default {
  props: ['textList'],
  components: {
    headerTop,
    Toolcip,
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
      end: false,
      chooseNumStr: [],
      dataTextList: {}
    }
  },
  filters: {
    types(type) {
      if(type == 1) {
        return '单选题'
      }else if(type == 2) {
        return '多选题'
      }else if(type == 3) {
        return '判断题'
      }
    }
  },
  methods: {
    //单选题
    tabItem(index) {
      this.tabIndex = index
      this.chooseItem = this.dataTextList.items[index].chooseItem
      this.shitiId = this.dataTextList.shitiId
    },
    //多选题
    choice(index) {
      if(this.$refs.div[index].className.length <= 0) {
        this.$refs.div[index].className = 'active'

        for (let i = index; i < this.$refs.div.length; i++) {
          if(this.$refs.div[i].className.length > 0){
            this.chooseItem += this.$refs.div[i].innerText.substring(0,1)
          }
        }
      }else {
        this.$refs.div[index].className = ''
      }
    },
    next() {
      if(!this.chooseItem) {
        return 
      }
      clearInterval(this.timer)
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        shitiId: this.shitiId,
        answer: this.chooseItem
      }
      GetAnswer(requestData).then(res => {
        this.shitiId = res.data.data.shitiId
        this.dialogShow = true
        if(res.data.data.isTrue) {
          this.message = '正确！'
        }else {
          this.message = '错误！'
        }
        setTimeout(() => {
          this.dialogShow = false
          this.getJoin()
          //点击下一题清空当前选项
          this.$refs.div.forEach(item => {
          item.className = ''
      });
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
        console.log(res.data)
        if(res.data.data.isEnd) {
          this.message = '当前为最后一题'
          this.end = true
          return 
        }
        this.dataTextList = res.data.data
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
  created() {
    this.dataTextList =this.textList
  },
  mounted () {
    this.end = false
    this.getJoin()
  },
  //页面退出清空定时器
  destroyed () {
    clearInterval(this.timer)
  }
}
</script>
<style lang="scss" scoped>
.wrap-text {
  height: 100vh;
  overflow: hidden;
}
.text {
  height: 100%;
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
    position: absolute;
    bottom: 10px;
    width: calc(100% - 40px);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
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