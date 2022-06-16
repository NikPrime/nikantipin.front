<template>
<div>
  <h2>Sign Up</h2>

  <form @submit="login" method="post" class="form">

    <div class="emailForm">
      <input class="loginInput" type="email" v-model="email" name="email" placeholder="info@mailaddress.com">
    </div>

    <div class="passwordForm">
      <input class="loginInput" v-model="password" name="password" type="password" placeholder="••••••••••••">
    </div>

    <div class="submitButton">
      <input class="submitInput" type="submit" value="Sign Up">
    </div>

  </form>
</div>
</template>

<script>
import { AdminApi } from "@/api/api.js";

export default {
  name: "AdminPanelPage",
  data() {
    return {
      email: null,
      password: null,
    }
  },
  methods: {
    async login() {
      if (this.email && this.password) {
        const token = await AdminApi.login({email: this.email, password: this.password});
        console.log(token)
        return true;
      }
    }
  }
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