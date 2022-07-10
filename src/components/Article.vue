<template>
  <div>Article</div>
  <div>{{ header }}</div>
  <p v-html="article"></p>
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

</style>