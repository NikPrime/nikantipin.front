<template>
  <div class="cardStackInfo">
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
</template>

<script>
export default {
  name: "CardStackInfo"
}
</script>

<style scoped>
ul {
  width: 450px;
  display: table;
  text-align: left;
  table-layout: fixed;
}
ul > li {
  width: 100%;
  display: table-cell;
}

.cardStackInfo {
  color: #afafaf;
  font-family: "Bookman Old Style";
  border: white;
}
</style>