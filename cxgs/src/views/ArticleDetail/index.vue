<template>
  <div class="article-detail">
    <header-top title='文章详情' :show='true'/>
    <div class="detail-item" v-if="!noDetail">
      <h3>{{articleDetailList.title}}</h3>
      <span>{{articleDetailList.time}}</span>
      <img :src="'https://demo201.jiudianlianxian.com' + articleDetailList.images" alt="暂无显示图片">
      <p>{{articleDetailList.content}}</p>
    </div>
    <div v-if="noDetail" class="no-detail">没有找到这篇文章</div>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetArticleDetail } from '@/api/home'
import Loading from '@/components/loading/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    Loading
  },
  data () {
    return {
      articleId: this.$route.query.id,
      articleDetailList: {},
      noDetail: '',
      isLoading: true
    }
  },
  methods: {
    getArticleDetail() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        articleId: this.articleId
      }
      GetArticleDetail(requestData).then(res => {
        this.isLoading = false
        if(res.data.code == 0) {
          this.noDetail = false
          this.articleDetailList = res.data.data
        }else {
          this.noDetail = true
        }
      }).catch(err => {})
    }
  },
  activated() {
    this.isLoading = true
    this.articleId = this.$route.query.id
    this.getArticleDetail()
  },
  mounted() {
    this.getArticleDetail()
  }
}
</script>
<style lang="scss" scoped>
.detail-item {
  padding: 20px;
  h3 {
    font-size: 18px;
    font-weight: 600;
    line-height: 28px;
  }
  span {
    display: block;
    margin: 10px 0;
    color: #ADADAD;
    font-size: 14px;
  }
  img {
    width: 100%;
    height: 150px;
  }
  p {
    margin-top: 20px;
    color: #4E4E4E;
    font-size: 14px;
  }
}
.no-detail {
  text-align: center;
  margin-top: 50px;
  color: #666;
}
</style>