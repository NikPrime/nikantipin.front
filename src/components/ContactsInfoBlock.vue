<template>
  <div class="cardContactsInfo">
    <div class="firstRow">
      <div class="image">
        <img src="../assets/avatar.png" style=" max-width: 200px; max-height: 200px;">
      </div>
      <div class="greeting">
        <p>
          «Приветствую! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
          Node.js-developer, и я открыт к сотрудничеству. Здесь я веду свой блог, а также рассказываю про технологии,
          фреймворки и алгоритмы, которые люблю и использую в своей работе»
        </p>
      </div>
<!--        <a href="https://t.me/nikprimez" target="_blank" class="telegramim_button telegramim_shadow telegramim_pulse"-->
<!--           title="Перейти в telegram"><i></i> @nikprimez</a>-->
    </div>
<!--    <ul>-->
<!--      <li>-->
<!--        <a href="https://www.github.com/nikprime" target="_blank">-->
<!--          <img width="170" height="35" src="../assets/githubButton.png" alt="GitHub">-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="https://www.linkedin.com/in/nikita-antipin-965116181/" target="_blank" title="Don't forget to use VPN">-->
<!--          <img width="170" height="35" src="../assets/linkedinButton.png" alt="Linked In">-->
<!--        </a>-->
<!--      </li>-->
<!--      <li>-->
<!--        <a href="https://www.youtube.com/channel/UCqAEop_eavAh-bYklejj4wg/" target="_blank">-->
<!--          <img width="170" height="35" src="../assets/youtubeButton.png" alt="Youtube">-->
<!--        </a>-->
<!--      </li>-->
<!--    </ul>-->
  </div>
</template>

<script>
export default {
  name: "CardContactsInfo"
}
</script>

<style scoped>
.cardContactsInfo {
  height: 200px;
  padding-top: 50px;
  padding-bottom: 50px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
}

.firstRow {
  display: flex;
  justify-content: center;
}

ul {
  list-style: none;
  display: flex;
  justify-content: center;
}

ul > li {
  padding-right: 30px;
}

.image {
}

.greeting {
  width: 55%;
  display: table;
}

p {
  font-family: "TT Norms Std Condensed";
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
  padding-left: 60px;
  display: table-cell;
  vertical-align: middle;
}
@media (max-width: 844px) {
  p {
    font-size: 18px;
  }
}

@media (max-width: 543px) {
  p {
    font-size: 16px;
  }
}

a:hover {
  background-color: white;
  opacity: 0.85;
}

.nameURL {
  color: #000000;
  text-decoration: none;
}


</style>