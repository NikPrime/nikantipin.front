<template>
  <a class="bannerArticle" :href="`article/${shortId}`">
    <vue-load-image class="bannerImage">
      <template v-slot:image>
        <img class="bannerImage" :src="imageUrl"/>
      </template>
      <template class="bannerImage" v-slot:preloader>
        <img class="bannerImage" src="../assets/default_image.png" />
      </template>
      <template v-slot:error>Image load fails</template>
    </vue-load-image>
        <div class="bannerSecondPart">
          <div class="bannerTimeDate">{{ date }} | {{ time }}</div>
          <div class="bannerHeader">{{ header }}</div>
        </div>
  </a>
</template>

<script>

import VueLoadImage from "vue-load-image";

export default {
  components: {
    'vue-load-image': VueLoadImage
  },
  name: 'RecentArticleBanner',
  props: ['header', 'date', 'time', 'imageUrl', 'shortId'],
}
</script>

<style scoped>

.bannerArticle {
  display: flex;
  flex-direction: column;
  font-family: "TT Norms Std Condensed";
  font-size: 18px;
  text-decoration: none;
  max-width: 300px;
  height: 280px;
  margin-left: 10px;
  margin-right: 10px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  transition: 0.4s;
}

.bannerArticle:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
}

.bannerImage {

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