<template>
  <div class="home-view">
    <MainView />
  </div>
</template>

<script>
// import viws from from views folder
import MainView from "./MainView.vue";

export default {
  name: "HomeView",
  components: {
    MainView,
  },
};
</script>
<style scopeh>
.home-view {
  height: 100vh;
}
</style>
