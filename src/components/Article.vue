<template>
  <a class="bannerArticle" href="https://google.com">
    <div>
      <vue-load-image class="bannerImage">
        <template v-slot:image>
          <img :src="imageUrl"/>
        </template>
        <template v-slot:preloader>
          <img src="../assets/default_image.png" />
        </template>
        <template v-slot:error>Image load fails</template>
      </vue-load-image>
    </div>
    <div class="bannerSecondPart">
      <div class="bannerTimeDate">{{ handleData }} | {{ time }}</div>
      <div class="bannerHeader">{{ header }}</div>
    </div>
  </a>
</template>

<script>
import moment from 'moment';
import VueLoadImage from 'vue-load-image';

export default {
  components: {
    'vue-load-image': VueLoadImage
  },
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
  border-radius: 7px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.bannerArticle:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
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