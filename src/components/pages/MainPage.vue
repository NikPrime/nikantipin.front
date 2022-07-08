<template>
  <Navbar/>
  <ContactsInfoBlock/>
  <GeneralInfo/>
</template>

<script>

import Navbar from "../../components/Navbar";
import ContactsInfoBlock from "../ContactsInfoBlock";
import GeneralInfo from "@/components/GeneralInfo";

export default {
  name: 'App',
  created () {
    document.title = "Nik Antipin";
  },

  components: {
    GeneralInfo,
    Navbar,
    ContactsInfoBlock,
  },
}
</script>

<style>
body {
  min-width: fit-content;
  margin: 0 auto;
  background-color: #f6f6f6;
  overflow-y: scroll;
}

h4 {
  color: #afafaf;
  margin: 10px 0 5px 0;
  text-align: left;
  font-family: Consolas
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 300px;
}
</style>
