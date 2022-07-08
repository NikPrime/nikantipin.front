<template>
<div>
  <Navbar/>
  <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="onPageClick($event)" />

  <div class="recentArticlesList">
    <RecentArticle v-for="(article, index) in recentArticles" :key="index" :header="article.header" :date="article.date"
             :time="article.time" :imageUrl="article.imageUrl"/>
  </div>
  <div class="ArticlesList">
    <Article v-for="(article, index) in articles" :key="index" :header="article.header" :date="article.date"
                   :time="article.time" :imageUrl="article.imageUrl"/>
  </div>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';
import moment from 'moment';
import RecentArticle from '@/components/RecentArticle';
import Article from "@/components/Article";
import { BaseApi } from '@/api/api';
import '@ocrv/vue-tailwind-pagination/dist/style.css';

import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

export default {
  name: 'BlogPage',
  components: {
    Navbar,
    RecentArticle,
    Article,
    VueTailwindPagination,
  },
  data() {
    return {
      recentArticles: [],
      articles: [],
      mainArticle: [],

      currentPage: 1,
      perPage: 7,
      total: 10,
    }
  },
  beforeMount() {
    this.getArticles(1, 5);
  },
  methods: {
    async getArticle(id) {
      return BaseApi.getArticle(id);
    },
    onPageClick(page) {
      this.getArticles(page, 5);
    },
    async getArticles(page, limit) {
      const t = this;
      BaseApi.getArticles({type: 'blog', page, limit}).then((res) => {
        const data = res.data?.data;
        const meta = res.data?.meta;

        t.currentPage = meta.page;
        t.total = meta.total;
        t.perPage = limit;

        t.articles = data.articles.map(elem => {
          return {
            date: moment(elem.createdAt).format('DD.MM.YYYY'),
            time: moment(elem.createdAt).format('HH:mm'),
            header: elem.header,
            imageUrl: elem.imageUrl,
          }
        });
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

.ArticlesList {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>