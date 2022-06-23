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
  <div class="container">
    <HeaderView />
    <router-view></router-view>
    <FooterView />
  </div>
</template>

<style>
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 100%;
  margin-top: 0px;
  padding: 0;
  box-sizing: border-box;
}

.container {
  height: 100vh;
  background-color: #2e3842;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 15% 80% 5%;
  grid-template-areas:
    "h h h h h h h h h h h h"
    "c c c c c c c c c c c c"
    "f f f f f f f f f f f f";
  gap: 3px/3px;

  background-image: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1655829943/pame-nicalit/bPortada_bovmvz.jpg");
  background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1655829943/pame-nicalit/bPortada_bovmvz.jpg");
  background-image: -ms-linear-gradient(
      top,IXUIX BXD B B BB XBBB 
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1655829943/pame-nicalit/bPortada_bovmvz.jpg");
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/propositivapr/image/upload/e_improve,w_300,h_600,c_thumb,g_auto/v1655829943/pame-nicalit/bPortada_bovmvz.jpg");
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 0;
}

@media screen and (min-width: 500px) {
  .container {
    background-image: -moz-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/v1655938065/pame-nicalit/bPortada_bovmvz_p8vflq.jpg");
    background-image: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/v1655938065/pame-nicalit/bPortada_bovmvz_p8vflq.jpg");
    background-image: -ms-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/v1655938065/pame-nicalit/bPortada_bovmvz_p8vflq.jpg");
    background-image: linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/v1655938065/pame-nicalit/bPortada_bovmvz_p8vflq.jpg");
  }
}
</style>
