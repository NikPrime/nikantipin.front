<template>
  <ul>
    <li>
      <a href="https://nikantipin.site/">
        <span>Главная</span>
        <span>Главная</span>
      </a>
    </li>

    <li>
      <a href="https://nikantipin.site/blog">
        <span>Блог</span>
        <span>Блог</span>
      </a>
    </li>

    <li>
      <a href="https://nikantipin.site/tech">
        <span>Про технологии</span>
        <span>Про технологии</span>
      </a>
    </li>

    <li>
      <a href="https://nikantipin.site/about">
        <span>О проекте</span>
        <span>О проекте</span>
      </a>
    </li>

  </ul>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

ul {
  display: flex;
  margin: 0 40px;
}

ul li {
  list-style: none;
  margin: 0 10px;
  position: relative;
}

ul li a {
  display: block;
  font-weight: 600;
  height: 20px;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "Bookman Old Style";
}

ul li a span {
  color: #ffffff;
  display: block;
  height: 100%;
  transition: transform 0.3s linear;
  width: 100%;
}

ul li a span:nth-child(1) {
  color: #c4c4c4;
}

ul li:hover a span:nth-child(1) {
  transform: translateY(-100%);
}

ul li:hover a span:nth-child(2) {
  transform: translateY(-100%);
}

</style>