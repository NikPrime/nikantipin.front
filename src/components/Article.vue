<template>
  <div class="articleBlock">
    <div class="articleHeader">
      {{ header }}
    </div>
    <div class="articleText">
      <p v-html="article"></p>
    </div>
  </div>
</template>

<script>
import {BaseApi} from '@/api/api';

export default {
  name: "Article",
  data() {
    return {
      header: '',
      article: '',
    }
  },
  beforeMount() {
    const t = this;
    BaseApi.getArticle(this.$route.params.shortId).then(res => {
      const response = res.data.data.article;

      t.header = response.header;
      t.article = response.article;
    })
  }
}
</script>

<style scoped>
.articleBlock {
  width: 800px;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
  border-radius: 15px;
  margin: 100px auto;
  font-family: "TT Norms Std Condensed";
  font-size: 22px;
  text-align: left;
  padding: 30px 5% 50px;
}

.articleHeader {
 font-family: "TT Norms Std Condensed";
  font-size: 50px;
  margin-bottom: 25px;
  padding-top: 50px;
}


@media (max-width: 800px) {
  .articleBlock {
    width: 500px;
    font-size: 40px;
    font-size: 18px;
  }
}
</style>