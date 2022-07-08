<template>
  <div>
    <div class="info">
      <div class="stackInfo">
          <ul>
            <p class="title">Я использую:</p>
          </ul>
          <ul>
            <li class="stackHeader"><b>Languages & Frameworks:</b></li>
            <li>Node.js, JavaScript, TypeScript, Go, Express.js, Nest.js</li>
          </ul>
          <ul>
            <li class="stackHeader"><b>Databases:</b></li>
            <li>PostgreSQL, MongoDB, Redis</li>
          </ul>
          <ul>
            <li class="stackHeader"><b>Others:</b></li>
            <li>RabbitMQ, Docker, Kubernetes</li>
          </ul>
      </div>
      <div class="workInfo">
        <ul>
        <p class="title">Опыт:</p>
        </ul>
        <ul>
          <li class="workHeader"><b>ONLYOFFICE, Latvia</b></li>
          <li>2019-2021,  JavaScript-developer</li>
        </ul>
        <ul>
          <li class="workHeader"><b>Alaris labs, Singapore</b></li>
          <li>2021-2022,  JavaScript-developer</li>
        </ul>
        <ul>
          <li class="workHeader"><b>Volga-volga:</b></li>
          <li>2022, Node.js backend developer</li>
        </ul>
      </div>
      <div class="educationInfo">
        <ul>
          <p class="title">Образование</p>
        </ul>
        <ul>
          <li class="workHeader"><b>Lobachevsky University, Nizniy Novgorod (UNN)</b></li>
          <li>Applied Mathematics & Computer Science</li>
          <li>2014-2018, Bachelor's degree</li>
        </ul>
        <ul>
          <li class="workHeader"><b>Lobachevsky University, Nizniy Novgorod (UNN)</b></li>
          <li>Fundamental computer science & IT</li>
          <li>2018-2020, Master's degree</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "GeneralInfo",
}

</script>

<style scoped>
ul {
  display: table;
  text-align: left;
  list-style: none;
  font-size: 25px;
  font-family: "TT Norms Std Condensed";
  margin-bottom: 25px;
}
ul > li {
}
h1 {

}
.info {
  display: flex;
  flex-wrap: wrap;

  margin-top: 35px;
  height: 500px;
}

.stackInfo {
  margin-left: 3%;
  flex: 1 1 25%;
}

.workInfo {
  margin-left: 7%;
  flex: 1 1 25%;
}

.educationInfo {
  margin-left: 3%;
  flex: 1 1 25%;
}


.title {
  margin-top: 30px;
  margin-bottom: 20px;
  font-size: 30px;
  font-family: "TT Norms Std Condensed";
  font-weight: bold;
  color: #1a1a1a;
}

.stackHeader {
  color: black;
}

.workHeader {
  color: black;
  padding-right: 50px;
}

@media (max-width: 785px) {
  ul {
    font-size: 18px;
  }
  .title {
    font-size: 23px;
  }
}

@media (max-width: 550px) {
  ul {
    font-size: 14px;
  }
  .title {
    font-size: 16px;
  }
}

</style>