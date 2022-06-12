<template>
  <div class="cardContactsInfo">
    <div class="contactsHeader">
      Contacts:
    </div>
    <ul style="">
      <li>
        <a href="https://www.linkedin.com/in/nikita-antipin-965116181/" target="_blank">
          <img width="170" height="35" src="../assets/linkedinButton.png" alt="Linked In">
        </a>
      </li>
      <li>
        <a href="https://www.github.com/nikprime" target="_blank">
          <img width="170" height="35" src="../assets/githubButton.png" alt="GitHub">
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/channel/UCqAEop_eavAh-bYklejj4wg/" target="_blank">
          <img width="170" height="35" src="../assets/youtubeButton.png" alt="Youtube">
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CardContactsInfo"
}
</script>

<style scoped>
.contactsHeader {
  text-align: center;
}
ul {
  list-style: none;
  padding: 0;
}
ul > li {
 margin-bottom: 15px;
}
.cardContactsInfo {
  color: #afafaf;
  font-family: "Bookman Old Style";
  margin-left: 50px;
  margin-right: 50px;
}
a:hover {
  background-color: white;
  opacity: 0.85;
}
</style>