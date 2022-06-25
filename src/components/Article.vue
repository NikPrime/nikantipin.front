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
  name: 'Article',
  props: ['header', 'date', 'time', 'imageUrl']
}
</script>

<style scoped>

.bannerArticle {
  display: flex;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Bookman Old Style";
  transition: 0.6s;
  background-color: #e8e8e8;
  border-radius: 14px;
  border: 2px solid #383838;;
  margin-bottom: 2px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  width: 45%;
  text-decoration: none;
}

.bannerArticle:hover {
  transform: scale(1.03);
}

.bannerImage {
  width: 50%;
  height: 50%;
  max-width: 150px;
  max-height: 100px;
}

.bannerSecondPart {
  display:flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin: 0 auto;
  padding-left: 5px;
}

.bannerTimeDate {
  font-size: 0.6vw;
  flex-grow: 1;
  color: #343434;
}

.bannerHeader {
  flex-grow: 2;
  font-size: 90%;
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