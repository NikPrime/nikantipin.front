<template>
<div>
  <h2>Sign Up</h2>

  <form action="" method="post" class="form">

    <div class="emailForm">
      <input class="loginInput" type="email" placeholder="info@mailaddress.com">
    </div>

    <div class="passwordForm">
      <input class="loginInput" type="password" placeholder="••••••••••••">
    </div>

    <div class="submitButton">
      <input class="submitInput" type="submit" value="Sign Up">
    </div>

  </form>
</div>
</template>

<script>
export default {
  name: "AdminPanelPage"
}
</script>

<style scoped>
h1 {
  color: #27A5E7;
}
h2 {
  color: #FFFFFF;
}
.loginInput {
  color: #333;
  width: 10%;
  margin: 0 auto;
  padding: 10px;
  border-radius: 0.2rem;
  background-color: rgb(255, 255, 255);
}
</style>