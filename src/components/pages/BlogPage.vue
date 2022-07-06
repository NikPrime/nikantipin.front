<template>
<div>
  <Navbar/>
  <div class="recentArticlesList">
    <RecentArticle v-for="(article, index) in recentArticles" :key="index" :header="article.header" :date="article.date"
             :time="article.time" :imageUrl="article.imageUrl"/>
  </div>
  <div class="ArticlesList">
    <Article v-for="(article, index) in recentArticles" :key="index" :header="article.header" :date="article.date"
                   :time="article.time" :imageUrl="article.imageUrl"/>
  </div>
  <div>

  </div>
  <ul></ul>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';
import moment from 'moment';
import RecentArticle from '@/components/RecentArticle';
import Article from "@/components/Article";
import { BaseApi } from '@/api/api';

export default {
  name: 'BlogPage',
  components: {
    Navbar,
    RecentArticle,
    Article
  },
  data() {
    return {
      recentArticles: [],
      articles: [],
    }
  },
  beforeMount() {
    const t = this;
    BaseApi.getArticles({type: 'blog', limit: 3}).then((res) => {
      t.recentArticles = res.data?.data?.articles.map(elem => {
        return {
          date: moment(elem.createdAt).format('DD.MM.YYYY'),
          time: moment(elem.createdAt).format('HH:mm'),
          header: elem.header,
          imageUrl: elem.imageUrl,
        }
      });
    }).catch((err) => console.log(err));
  },
  methods: {
    async getArticle(id) {
      return BaseApi.getArticle(id);
    },
  }
}
</script>

<style scoped>
.recentArticlesList {
 display: flex;
 align-items: center;
  justify-content: center;
}

.ArticlesList {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>