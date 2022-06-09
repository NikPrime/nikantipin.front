<template>
  <Navbar />
</template>

<script>

import Navbar from "./components/Navbar";

export default {
  name: 'App',
  components: {

    Navbar
  }
}
</script>

<style>
* {
  background: #282828;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
