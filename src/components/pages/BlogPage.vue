<template>
<div>
  <Navbar/>
  <h1>BlogPage</h1>
  <div class="articlesList">
    <Article v-for="(article, index) in articles" :key="index" :header="article.header" :date="article.date"
             :time="article.time" :imageUrl="article.imageUrl"/>
  </div>
  <ul></ul>
</div>
</template>

<script>
import Navbar from '@/components/Navbar';
import Article from '@/components/Article';
import {BaseApi} from '@/api/api';
import moment from 'moment';
export default {
  name: 'BlogPage',
  components: {
    Navbar,
    Article
  },
  data() {
    return {
      articles: [],
    }
  },
  beforeMount() {
    const t = this;
    BaseApi.getArticles({type: 'blog'}).then((res) => {
      t.articles = res.data?.data?.articles.map(elem => {
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
.articlesList {
 display: flex;
 flex-direction: column;
 align-items: center;
}
</style>