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

.telegramim_button.telegramim_shadow.telegramim_pulse {
  font-size: 19px;
  width: 160px;
  background: #27A5E7;
  box-shadow: 1px 1px 5px #27A5E7;
  color: #FFFFFF;
  border-radius: 12px;
  border: 1px dashed #505050;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.5);
}
</style>
