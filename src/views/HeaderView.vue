<template>
  <div class="header-view">
    <nav>
      <div class="mobile">
        <div class="header">
          <div class="logo">
            <img :src="logoTipo.img" :alt="logoTipo.alt" />
          </div>
          <div class="more">
            <button id="bMore" @click="isCollapsed = !isCollapsed">
              <span class="material-icons">list</span>
            </button>
          </div>
        </div>
        <div id="mobileMenu" :class="{ collapsed: isCollapsed }">
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div class="desktop">
        <div class="logo">
          <img :src="logoTipo.img" :alt="logoTipo.alt" />
        </div>
        <div class="primary">
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
    <!-- <BannerViews /> -->
  </div>
</template>

<script>
import BannerViews from "./BannerViews.vue";

export default {
  components: {
    BannerViews,
  },
  data() {
    return {
      isCollapsed: true,
      logoTipo: {
        img: "https://res.cloudinary.com/propositivapr/image/upload/v1655829964/pame-nicalit/bglogo_ji4hff.svg",
        alt: "pame-nicalit logo",
      },
    };
  },
  methods: {},
};
</script>

<style scoped>
.header-view {
  grid-area: h;
}
.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 3.2rem; /* Preferred icon size */
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;

  /* Support for all WebKit browsers. */
  -webkit-font-smoothing: antialiased;
  /* Support for Safari and Chrome. */
  text-rendering: optimizeLegibility;

  /* Support for Firefox. */
  -moz-osx-font-smoothing: grayscale;

  /* Support for IE. */
  font-feature-settings: "liga";
}
.collapsed {
  display: none;
}

nav {
  color: white;
  width: 100%;
}
nav .mobile {
  display: none;
}
nav .mobile .header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
}
nav .mobile .header .more button {
  border: none;
  background-color: transparent;
  color: #d8e183;
  padding: 15px;
  cursor: pointer;
}

nav .logo {
  min-width: 200px;
}
nav a {
  color: #fff;
  text-decoration: none;
  display: block;
  padding: 20px 25px;
  font-weight: bold;
  letter-spacing: 0.2em;
  transition: all 0.8s ease;
}
nav a:hover {
  color: rgb(19, 124, 193);
  background-color: #d8e183;
}
nav .desktop {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}
nav .desktop .primary,
nav .desktop .secondary {
  display: flex;
}
nav .desktop .secondary.mini {
  display: none;
}

/* //media screen */

@media screen and (max-width: 853px) {
  nav .logo {
    min-width: 100px;
  }
  nav .secondary.full {
    display: none;
  }
  nav .secondary.mini {
    display: block !important;
  }
  nav .secondary.mini .submenu {
    background-color: black;
    position: absolute;
    display: none;
    width: 200px;
    right: 0;
  }
  nav .secondary.mini:hover .submenu {
    display: block;
  }
}
@media screen and (max-width: 500px) {
  nav .desktop {
    display: none;
  }
  nav .mobile {
    display: block;
    position: relative;
    text-align: center;
  }
  #mobileMenu {
    background-color: rgb(19, 124, 193);
    transition: all 0.5s ease;
  }
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
