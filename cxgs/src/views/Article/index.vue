<template>
  <div class="article">
    <header-top title='文章' :show='true'/>
    <scroll class="scroll" ref="scroll" @pullUp='loadMore' :pull-up-load='pullUpLoad'>
      <ul class="article-ul">
        <li v-for="item in articleList" :key="item.id" @click="detail(item.articleId)">
          <img :src="'https://demo201.jiudianlianxian.com' + item.images" alt="暂不显示">
          <div>
            <h3>{{item.title}}</h3>
            <p>{{item.desc}}</p>
          </div>
        </li>
      </ul>
    </scroll>
    <loading :isLoading='isLoading' />
  </div>
</template>
<script>
import headerTop from '@/components/header/index.vue'
import { GetArticle } from '@/api/home'
import Scroll from '@/components/scroll/index.vue'
import Loading from '@/components/loading/index.vue'
import { getUserId, getSessionId, getToken } from '@/utils/app'
export default {
  components: {
    headerTop,
    Scroll,
    Loading
  },
  data () {
    return {
      page: 1,
      articleList: [],
      pullUpLoad: true,
      isLoading: true
    }
  },
  methods: {
    getArticle() {
      let requestData = {
        userId: getUserId(),
        sessionId: getSessionId(),
        token: getToken(),
        currentPage: this.page,
        number: 10
      }
      GetArticle(requestData).then(res => {
        this.isLoading = false
        this.articleList.push(...res.data.data.articleList)
      }).catch(err => {})
    },
    loadMore() {
      //上拉加载打开loading
      this.isLoading = true
      //页码加一
      this.page++
      this.getArticle()
      this.$refs.scroll.scroll.finishPullUp()
      this.$refs.scroll.scroll.refresh()
    },
    detail(id) {
      this.$router.push({
        path: '/articleDetail',
        query: {
          id: id
        }
      })
    }
  },
  mounted() {
    this.getArticle()
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
.article-ul {
  padding: 20px;
  li {
    display: flex;
    margin-bottom: 15px;
    img {
      width: 150px;
      height: 90px;
    }
    div {
      flex: 1;
      margin-left: 10px;
      h3 {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        color: #0A0E2E;
        line-height: 22px;
        font-size: 15px;
      }
      p {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        color: #73747F;
        font-size: 13px;
        line-height: 15px;
      }
    }
  }
}
</style>