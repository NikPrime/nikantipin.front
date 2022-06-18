<template>
<div>
  <div class="LogOut">
    <router-link to="/admin" custom v-slot="{ href, navigate }">
      <a :href="href" @click="logOut(navigate, $event)">Log out</a>
    </router-link>
  </div>
 <TextEditor v-model="content"/>
  <button
      class="submit-button"
      @click="onSubmit">
    Submit
  </button>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import TextEditor from "@/components/pages/TextEditor";

export default {
  name: 'AdminPanelPage',
  components: {
    TextEditor,
  },


  data() {
    return {
      content: '',
    }
  },
  methods: {
    ...mapActions(['LogOut']),
    logOut(navigate, event) {
      this.LogOut();
      navigate(event);
    },
    onSubmit() {
      alert(JSON.stringify(this.content));
      console.log();
    },
  }
}
</script>

<style lang="less" scoped>
a {
  color: #ffffff;
  text-decoration: none;
}
</style>