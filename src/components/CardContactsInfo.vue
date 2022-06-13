<template>
  <div class="cardContactsInfo">
    <ul>
      <li>
        <a href="https://www.github.com/nikprime" target="_blank">
          <img width="170" height="35" src="../assets/githubButton.png" alt="GitHub">
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/nikita-antipin-965116181/" target="_blank" title="Don't forget to use VPN">
          <img width="170" height="35" src="../assets/linkedinButton.png" alt="Linked In">
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
ul {
  margin-top: 30px;
  list-style: none;
  padding: 0;
}
ul > li {
 margin-bottom: 15px;
}
.cardContactsInfo {
  color: #afafaf;
  font-family: "Bookman Old Style";
  margin-right: 50px;
}
a:hover {
  background-color: white;
  opacity: 0.85;
}

</style>