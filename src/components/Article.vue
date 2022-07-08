<template>
  <a class="bannerArticle" href="https://google.com" v-if="header && imageUrl">
    <img class="bannerImage" :src="imageUrl" alt="">
    <div class="bannerSecondPart">
      <div class="bannerTimeDate">{{ handleData }} | {{ time }}</div>
      <div class="bannerHeader">{{ header }}</div>
    </div>
  </a>
</template>

<script>
import moment from 'moment';
export default {
  name: 'Article',
  props: ['header', 'date', 'time', 'imageUrl'],
  computed: {
    handleData() {
      return moment(this.date, 'DD.MM.YYYY').format('DD MMMM YYYY');
    }
  }
}
</script>

<style scoped>

.bannerArticle {
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "TT Norms Std Condensed";
  font-size: 23px;
  width: 800px;
  text-decoration: none;
  background-color: #FFFFFF;
  margin-bottom: 30px;
}

.bannerImage {
  width: 280px;
  height: 196px;
}

.bannerSecondPart {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding-left: 5px;
}

.bannerTimeDate {
  font-size: 15px;
  flex-grow: 1;
  color: #343434;
  font-family: "TT Norms Std Condensed";
}

.bannerHeader {
  flex-grow: 2;
  min-font-size: 30px;
  color: #343434;
  font-weight: bold;
}
@media only screen and (max-width: 600px) {
  .bannerHeader {
    font-size: 50%;
  }
}
</style>