<template>
  <footer class="mt-5">
    <!-- Copyright -->
    <div class="copyright">
      <i class="fa-regular fa-copyright"></i>2022 PAME .::. Developed by
      <a href="https://www.propositivapr.com/" target="_blank"
        >propositivapr.com</a
      ><i class="fas fa-code-branch">{{ " " }} {{ version }}</i>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
import { APP_VERSION } from "../services/ServerInfo";
export default {
  data() {
    return {
      version: APP_VERSION,
    };
  },
};
</script>

<style scoped>
footer {
  color: #fff;
  text-align: center;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
}
.copyright {
  background-color: black;
}
.copyright a {
  text-decoration: none;
  color: #ffffff;
}
.copyright a:hover {
  color: #fa9100;
}
i {
  margin-left: 0.3rem;
  font-size: 0.6rem;
}
</style>
