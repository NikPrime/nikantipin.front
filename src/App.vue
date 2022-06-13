<template>
  <Navbar/>
  <div class="cardsRow_first">
    <div class="cardsColumn_first">
        <CardContactsInfo/>
        <img src="./assets/avatar.png" style=" max-width: 200px; max-height: 200px;">
    </div>
    <div class="cardsColumn_second">
      <h3>Приветствую! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
        Node.js-developer, и я открыт к сотрудничеству. Здесь я веду свой блог, а также рассказываю про технологии, фреймворки и алгоритмы, которые люблю и использую в своей работе.</h3>
      <a href="https://t.me/nikprimez" target="_blank" class="telegramim_button telegramim_shadow telegramim_pulse" title="Перейти в telegram"><i></i> @nikprimez</a>
    </div>
  </div>
  <div class="cardsRow_second">
    <CardStackInfo/>
    <CardWorkPlacesInfo/>
    <CardEducationInfo/>
  </div>
</template>

<script>

import Navbar from "./components/Navbar";
import CardStackInfo from "./components/CardStackInfo";
import CardContactsInfo from "./components/CardContactsInfo";
import CardWorkPlacesInfo from "./components/CardWorkPlacesInfo";
import CardEducationInfo from "./components/CardEducationInfo";

export default {
  name: 'App',
  components: {
    Navbar,
    CardStackInfo,
    CardContactsInfo,
    CardWorkPlacesInfo,
    CardEducationInfo,
  },
  mounted() {
      var script=document.createElement("script");
      script.type="text/javascript";
      script.async =true;
      script.src="//telegram.im/widget-button/index.php?id=@nikprimez";
      document.getElementsByTagName("head")[0].appendChild(script);

  }
}
</script>

<style>
body {
  background: #323840;
  min-width: 420px;
}

h3 {
  padding-top: 50px;
  padding-bottom: 50px;
  color: white;
  text-align: center;
  justify-content: center;
}

h4 {
  color: #afafaf;
  margin: 10px 0 5px 0;
  text-align: left;
  font-family: Consolas
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.cardsColumn_first {
  border: 1px solid #505050;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  transition: 0.6s;
  display: flex;
  margin-top: 80px;
  margin-left: 5%;
  max-width: 420px;
  flex-grow: 1;
}

.cardsColumn_first:hover {
  transform: scale(1.05);
}

.cardsColumn_second {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 3;
  width: 25%;
  margin-left: 1%;
}

.cardsRow_first {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cardsRow_second {
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
}

.nameURL {
  color: #d5d9ba;
  text-decoration: none;
}

.telegramim_button.telegramim_shadow.telegramim_pulse {
  font-size: 19px;
  width: 160px;
  background: #27A5E7;
  box-shadow: 1px 1px 5px #27A5E7;
  color: #FFFFFF;
  border-radius: 12px;
  border: 1px dashed #505050;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}
</style>
