<template>
<div>
  <div class="LogOut">
    <router-link to="/admin" custom v-slot="{ href, navigate }">
      <a :href="href" @click="logOut(navigate, $event)">Log out</a>
    </router-link>
  </div>
  <h2>ADMIN PANEL</h2>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'AdminPanelPage',
  methods: {
    ...mapActions(['LogOut']),
    logOut(navigate, event) {
      this.LogOut();
      navigate(event);
    }
  }
}
</script>

<style scoped>
a {
  color: #ffffff;
  text-decoration: none;
}
</style>