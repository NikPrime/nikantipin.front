<template>
  <div class="cardStackInfo">
    <i><b>Technologies stack:</b></i>
    <ul>
      <li style="width: 150px"><b>Languages:</b></li>
      <li>JavaScript, TypeScript (Node.js), Go, SQL</li>
    </ul>
    <ul>
      <li style="width: 150px"><b>Frameworks:</b></li>
      <li>Express.js, Nest.js</li>
    </ul>
    <ul>
      <li style="width: 150px"><b>Databases:</b></li>
      <li>PostgreSQL, MongoDB, Redis</li>
    </ul>
    <ul>
      <li style="width: 150px"><b>Brokers:</b></li>
      <li>RabbitMQ</li>
    </ul>
    <ul>
      <li style="width: 150px"><b>Deployment:</b></li>
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
  display: table;
  text-align: left;
  table-layout: fixed;
}
ul > li {

  display: table-cell;
}

.cardStackInfo {
  color: #afafaf;;
  border: 1px solid #505050;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  transition: 0.6s;
  margin-top: 80px;
  font-family: "Bookman Old Style";
  margin-left: 3%;
}

.cardStackInfo:hover {
  transform: scale(1.05);
}
</style>