<template>
  <ul>
    <li>
      <router-link to="/">
        <span>Главная</span>
        <span>Главная</span>
      </router-link>
    </li>
    <li>
      <router-link to="/blog">
        <span>Блог</span>
        <span>Блог</span>
      </router-link>
    </li>
    <li>
      <router-link to="/tech">
        <span>Технологии</span>
        <span>Технологии</span>
      </router-link>
    </li>
    <li>
      <router-link to="/algorithms">
        <span>Алгоритмы</span>
        <span>Алгоритмы</span>
      </router-link>
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
  background: #262626;
  height: 55px;
}

ul {
  display: flex;
  justify-content: center;
}

ul li {
  list-style: none;
  margin: 0 10px;
}

ul li a {
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  font-family: "TT Norms Std Condensed";
}

ul li a span {
  color: #ffffff;
  display: block;
  transition: transform 0.3s linear;
  line-height: 55px;
}

ul li a span:nth-child(1) {
  color: #c4c4c4;
}

ul li:hover a span:nth-child(1) {
  transform: translateY(-20%);
}

ul li:hover a span:nth-child(2) {
  transform: translateY(-100%);
}

</style>