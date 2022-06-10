<template>
  <Navbar/>
  <h3>Приветствую! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
    Node.js-developer, и я открыт к сотрудничеству.</h3>
  <div class="firstCardsRow">
    <img src="./assets/avatar.png" style=" width: 200px; height: 200px; padding-left: 100px; padding-right: 100px;">
    <CardStackInfo/>
    <hr>
    <CardWorkPlacesInfo/>
  </div>
  <CardContactsInfo/>
</template>

<script>

import Navbar from "./components/Navbar";
import CardStackInfo from "./components/CardStackInfo";
import CardContactsInfo from "./components/CardContactsInfo";
import CardWorkPlacesInfo from "./components/CardWorkPlacesInfo";

export default {
  name: 'App',
  components: {
    Navbar,
    CardStackInfo,
    CardContactsInfo,
    CardWorkPlacesInfo,
  }
}
</script>

<style>
* {
  background: #282828;
}
h3 {
  margin-top: 50px;
  margin-bottom: 50px;
  color: white;
  text-align: center;
}
hr {
  border: 1px solid #949494;
  margin-right: 20px;
  margin-left: 20px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.firstCardsRow {
  display: flex;
  flex-wrap: wrap;
}
.nameURL {
  color: #d5d9ba;
  text-decoration: none;
}
</style>
