<template>
  <a class="bannerArticle" href="https://google.com" v-if="header && imageUrl">
        <img class="bannerImage" :src="imageUrl" alt="">
        <div class="bannerSecondPart">
          <div class="bannerTimeDate">{{ date }} | {{ time }}</div>
          <div class="bannerHeader">{{ header }}</div>
        </div>
  </a>
</template>

<script>

export default {
  name: 'RecentArticle',
  props: ['header', 'date', 'time', 'imageUrl']
}
</script>

<style scoped>

.bannerArticle {
  display: flex;
  flex-direction: column;
  font-family: "TT Norms Std Condensed";
  font-size: 20px;
  text-decoration: none;
  max-width: 300px;
  max-height: 250px;
  margin-left: 10px;
  margin-right: 10px;
}

.bannerArticle:hover {
  transform: scale(1.03);
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