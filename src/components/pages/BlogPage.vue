<template>
  <div>
    <Navbar/>
    <div class="recentArticles">
      <p>Недавние статьи</p>
      <div class="recentArticlesList">
        <RecentArticleBanner v-for="(article, index) in recentArticles" :key="index" :header="article.header"
                       :date="article.date"
                       :time="article.time" :imageUrl="article.imageUrl"/>
      </div>
    </div>
    <div class="articles">
      <p>Все статьи</p>
      <div class="ArticlesList">
        <ArticleBanner v-for="(article, index) in articles" :key="index" :header="article.header" :date="article.date"
                 :time="article.time" :imageUrl="article.imageUrl"/>
      </div>
    </div>
    <InfiniteLoading :articles="articles" @infinite="load" />
    </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import moment from 'moment';
import RecentArticleBanner from '@/components/RecentArticleBanner';
import ArticleBanner from "@/components/ArticleBanner";
import { BaseApi } from '@/api/api';

export default {
  name: 'BlogPage',
  components: {
    Navbar,
    RecentArticleBanner,
    ArticleBanner,
  },
  data() {
    return {
      recentArticles:[],
      articles: [],
      mainArticle:[],
      page: 1,
      limit: 5,
    }
  },
  beforeMount() {
    this.getRecentArticles();
  },
  methods: {
    load(state) {
      console.log(state)
      this.getArticles(this.page, this.limit);
      ++this.page;
      state.loaded();
    },

    async getRecentArticles() {
      const t = this;
      BaseApi.getArticles({type: 'blog', limit: 3}).then((res) => {
        const data = res.data?.data;

        t.recentArticles = data.articles.map(elem => {
          return {
            date: moment(elem.createdAt).format('DD.MM.YYYY'),
            time: moment(elem.createdAt).format('HH:mm'),
            header: elem.header,
            imageUrl: elem.imageUrl,
          }
        });
      }).catch((err) => console.log(err));
    },

    async getArticle(id) {
      return BaseApi.getArticle(id);
    },

    async getArticles(page, limit) {
      const t = this;
      BaseApi.getArticles({type: 'blog', page, limit}).then((res) => {
        const data = res.data?.data;

       data.articles.map((elem, index) => {
         if (!(page === 1 && [0, 1, 2].includes(index)))
         t.articles.push({
           date: moment(elem.createdAt).format('DD.MM.YYYY'),
           time: moment(elem.createdAt).format('HH:mm'),
           header: elem.header,
           imageUrl: elem.imageUrl,
         })
        });
        console.log('f')
      }).catch((err) => console.log(err));
    }
  }
}
</script>

<style scoped>

.recentArticlesList {
  display: flex;
  align-items: center;
  justify-content: center;
}

.articles {
  margin-top: 65px;
}

.recentArticles {
  margin-top: 40px;
}

.ArticlesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

p {
  font-size: 30px;
  font-family: "TT Norms Std Condensed";
  margin-bottom: 10px;
}
</style>