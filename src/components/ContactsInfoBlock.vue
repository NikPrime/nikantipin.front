<template>
  <div class="cardContactsInfo">
    <div class="imageAndGreeting">
      <div class="icons">
        <a class="iconTelegramLink" href="https://t.me/nikprimez" target="_blank">
          <font-awesome-icon class="btn" icon="fab fa-telegram"/>
        </a>
        <a class="iconLinkedInLink" href="https://www.linkedin.com/in/nikita-antipin-965116181/" target="_blank">
          <font-awesome-icon class="btn" icon="fa-brands fa-linkedin"/>
        </a>
        <a class="iconGithubLink" href="https://www.github.com/nikprime/" target="_blank">
          <font-awesome-icon class="btn" icon="fa-brands fa-github"/>
        </a>
        <a class="iconYoutubeLink" href="https://www.youtube.com/channel/UCqAEop_eavAh-bYklejj4wg/" target="_blank">
          <font-awesome-icon class="btn" icon="fa-brands fa-youtube"/>
        </a>
      </div>
      <div class="image">
        <img src="../assets/avatar.png" style=" max-width: 200px; max-height: 200px;">
      </div>
      <div class="greeting">
        <p class="greetingPC">
          «Привет! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
          Node.js-developer, и я открыт к сотрудничеству. Здесь я веду свой блог, а также рассказываю про технологии,
          фреймворки и алгоритмы, которые люблю и использую в своей работе»
        </p>
        <p class="greetingMobile">
          «Привет! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
          Node.js-developer, это мой блог, и я открыт к сотрудничеству»
        </p>
    </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "CardContactsInfo"
}
</script>

<style scoped>
.cardContactsInfo {
  width: 100%;
  height: 270px;
  padding-top: 35px;
  padding-bottom: 35px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  background-color: #FFFFFF;
}

.imageAndGreeting {
  display: flex;
  justify-content: center;
}

.btn {
  width: 100%;
  height: 100%;
}

.iconTelegramLink:hover, .iconGithubLink:hover, .iconLinkedInLink:hover, .iconYoutubeLink:hover {
  transition: 0.3s linear;
  transform: scale(1.2);
}

a {
  text-decoration: none;
  color: #2c3e50;
  margin-bottom: 10px;
  width: 30px;
  height: 30px;
}

.iconTelegramLink:hover {
  color: #27A5E7;
}

.iconLinkedInLink:hover {
  color: #068dfc;
}

.iconGithubLink:hover {
  color: #000000;
}

.iconYoutubeLink:hover {
  color: #ff1e1e;
}

.iconTelegramLink:active {
  color: #27A5E7;
  transition: 0.3s linear;
  transform: scale(2)
}

.iconLinkedInLink:active {
  color: #068dfc;
  transition: 0.3s linear;
  transform: scale(2)
}

.iconGithubLink:active {
  color: #000000;
  transition: 0.3s linear;
  transform: scale(2)
}

.iconYoutubeLink:active {
  color: #ff1e1e;
  transition: 0.3s linear;
  transform: scale(2)
}

.icons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 20px;
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
  width: 40%;
  margin-right: 5%;
  display: table;
}

p {
  font-family: "TT Norms Std Condensed";
  font-style: italic;
  font-size: 20px;
  font-weight: 600;
  padding-left: 6%;
  display: table-cell;
  vertical-align: middle;
}

.greetingMobile {
  display: none;
}

@media (max-width: 844px) {
  p {
    font-size: 18px;
  }
}

@media (max-width: 680px) {
  p {
    font-size: 15px;
  }
}

@media (max-width: 458px) {
  p {
    font-size: 18px;
  }
  .greetingPC {
    display: none;
  }
  .greetingMobile {
    display: table;
  }
}

@media (max-width: 452px) {
  a {
    width: 20px;
    height: 20px;
  }
}

@media (max-width: 376px) {
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