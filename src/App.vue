<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import styles
import HomeViews from "./views/HomeViews.vue";
import HeaderView from "./views/HeaderView.vue";
import FooterView from "./views/FooterView.vue";
export default {
  name: "app",
  components: { HomeViews, HeaderView, FooterView },
};
</script>

<template>
  <div class="container-fluid">
    <HeaderView />
    <main>
      <router-view></router-view>
    </main>
    <FooterView />
  </div>
</template>

<style>
/* Reset Global selectors */
@import url("https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova&display=swap");
html {
  box-sizing: border-box;
  -webkit-text-size-adjust: 100%;
  word-break: normal;
  -moz-tab-size: 4;
  tab-size: 4;
}

*,
::before,
::after {
  background-repeat: no-repeat;
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}

* {
  padding: 0;
  margin: 0;
}

button,
input {
  background-color: transparent;
  border-style: none;
}
#app {
  font-family: "Ibarra Real Nova", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  min-height: -webkit-fill-available;
}
input[type="text"],
input[type="email"],
input[type="tel"] {
  font-size: 0.9rem;
  font-family: "Ibarra Real Nova", serif;
}
main {
  min-height: 91vh;
}
</style>
