<template>
  <div class="cardWorkPlacesInfo">
    <ul class="placeOfWorkUl">
      <li class="placeOfWorkLi" style="width: 150px">2019 — 2021:</li>
      <li class="placeOfWorkLi">
        <ul style="list-style-type: none; padding: 0;">
          <li>ONLYOFFICE, Latvia</li>
          <li><i><b>Javascript-developer</b></i></li>
        </ul>
      </li>
    </ul>
    <ul class="placeOfWorkUl">
      <li class="placeOfWorkLi" style="width: 150px">2021 — 2022:</li>
      <li class="placeOfWorkLi">
        <ul style="list-style-type: none; padding: 0;">
          <li>Alaris Labs, Singapore</li>
          <li><i><b>Javascript-developer</b></i></li>
        </ul>
      </li>
    </ul>
    <ul class="placeOfWorkUl">
      <li class="placeOfWorkLi" style="width: 150px">2022 — present:</li>
      <li class="placeOfWorkLi" >
        <ul style="list-style-type: none; padding: 0;">
          <li>Volga-Volga</li>
          <li><i><b>Node.js developer</b></i></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardWorkPlaces"
}
</script>

<style scoped>
.placeOfWorkUl {
  width: 500px;
  display: table;
  text-align: left;
  table-layout: fixed;
}
.placeOfWorkLi {
  width: 250px;
  display: table-cell;
}
.cardWorkPlacesInfo {
  color: #afafaf;
  font-family: "Bookman Old Style";
  border: white;
  width: 410px;
}
</style>