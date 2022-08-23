<template>
  <header>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <router-link :to="{ name: 'Home' }">
            <img :src="logoTipo.img" :alt="logoTipo.alt" />
          </router-link>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMobilContent"
          aria-controls="navbarMobilContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fa-solid fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarMobilContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled">Disabled</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Navbar -->
  </header>
</template>

<script>


export default {
  components: {
  },
  data() {
    return {
      // isCollapsed: true,
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
header {
  --colorLetraMenu: #ffffff;
  --colorIconoMenu: #d8e193;
  --colorFondoHoverAncor: var(--colorIconoMenu);
  --fondoMenuMobil: rgb(19, 124, 193);
}
nav img {
  min-width: 140px;
}
nav button {
  margin-right: 10px;
}
.nav-link {
  color: var(--colorLetraMenu);
  font-weight: bold;
}
.nav-link:hover {
  color: var(--fondoMenuMobil);
  background-color: var(--colorIconoMenu);
  font-weight: bold;
  border-radius: 10px;
}
/* //media screen */
@media screen and (max-width: 991px) {
  nav img {
    min-width: 120px;
  }
  /*MENU ICON COLOR*/
  .navbar-toggler {
    background-color: var(--colorIconoMenu);
  }
  .navbar-toggler:focus {
    box-shadow: none;
  }
  .navbar-toggler i {
    color: var(--colorLetraMenu);
    font-size: 2.1rem;
  }
  .navbar-collapse {
    background-color: var(--fondoMenuMobil);
    text-align: center;
    font-weight: bold;
    letter-spacing: 1.4px;
    border-radius: 10px;
  }
  #navbarMobilContent a.nav-link {
    color: var(--colorLetraMenu);
  }
  #navbarMobilContent a.nav-link:hover {
    background-color: var(--colorFondoHoverAncor);
    color: var(--fondoMenuMobil);
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
  nav img {
    min-width: 110px;
  }
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
