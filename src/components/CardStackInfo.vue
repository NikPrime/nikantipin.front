<template>
  <div class="cardStackInfo">
    <h3>Приветствую! Меня зовут <a class="nameURL" href="https://t.me/nikprimez">Никита Антипин</a>. Я Backend
      Node.js-developer, и я открыт к сотрудничеству.</h3>
    <div class="stackTable">
      <ul>
        <li style="width: 150px">Languages:</li>
        <li >Javascript, Typescript (Node.js), Go, SQL</li>
      </ul>
      <ul>
        <li style="width: 150px">Frameworks:</li>
        <li>Express.js, Nest.js</li>
      </ul>
      <ul>
        <li style="width: 150px">Databases:</li>
        <li>Postgres, MongoDB, Redis</li>
      </ul>
      <ul>
        <li style="width: 150px">Message-brokers:</li>
        <li>RabbitMQ</li>
      </ul>
      <ul>
        <li style="width: 150px">Deployment:</li>
        <li>Docker, Kubernetes</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardStackInfo"
}
</script>

<style scoped>
h3 {
  color: white;
}
ul {
  width: 100%;
  display: table;
  text-align: left;
  table-layout: fixed;
}
ul > li {
  width: 100%;
  display: table-cell;
}

.cardStackInfo {
  margin-top: 50px;
  color: #afafaf;
  font-family: "Bookman Old Style";
  border: white;
}

.stackTable {
  margin-top: 50px;
}

.nameURL {
  color: #d5d9ba;
  text-decoration: none;
}
</style>