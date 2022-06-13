<template>
  <div class="cardEducationInfo">
    <i><b>Education:</b></i>
    <ul class="educationUl">
      <li class="educationLi" style="width: 150px">2014 — 2018:</li>
      <li class="educationLi">
        <ul style="list-style-type: none; padding: 0;">
          <li>State University of Nizhni Novgorod named after N.I. Lobachevsky (UNN)</li>
          <li><i><b>Bachelor's degree</b></i></li>
        </ul>
      </li>
    </ul>
    <ul class="educationUl">
      <li class="educationLi" style="width: 150px">2018 — 2020:</li>
      <li class="educationLi">
        <ul style="list-style-type: none; padding: 0;">
          <li>State University of Nizhni Novgorod named after N.I. Lobachevsky (UNN)</li>
          <li><i><b>Master's degree</b></i></li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardEducationInfo"
}
</script>

<style scoped>
.educationUl {
  width: 500px;
  display: table;
  text-align: left;
  table-layout: fixed;
}
.educationLi {
  width: 250px;
  display: table-cell;
}

.cardEducationInfo {
  color: #afafaf;
  border: 1px solid #505050;
  padding: 30px;
  padding-top: 50px;
  border-radius: 20px;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
  transition: 0.6s;
  margin-top: 80px;
  max-width: 540px;
  font-family: "Bookman Old Style";
  margin-left: 3%;
}

.cardEducationInfo:hover {
  transform: scale(1.05);
}
</style>