<template>
  <!-- Background image -->
  <div class="main-view p-1 text-center bg-image">
    <div class="mask" style="background-color: rgba(0, 0, 0, 0.3)">
      <div
        class="d-flex justify-content-center align-items-center mt-5 bannerPortada"
      >
        <div class="bannerAnimation">
          <h1 class="mb-3">
            <i class="fa-solid fa-exclamation spanish"></i> APOYANDO EL TRABAJO
            PROPIO <i class="fa-solid fa-exclamation"></i>
          </h1>

          <div class="bannerInformation">
            <h4 class="mb-3">
              Programa de Apoyo al Microempresario - Organizacion sin animo de
              lucro
            </h4>
          </div>
          <div class="bannerButton">
            <router-link :to="{ name: 'solicitudcredito' }">
              <button>Formatos de Solicitud.</button>
            </router-link>
          </div>
          <div class="bannerFotter">
            <h5>SOBRE PAME</h5>
            <i
              class="fa-solid fa-chevron-down fa-beat"
              style="--fa-animation-duration: 2.2s"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</template>

<script>
export default {
  name: "MainView",
};
</script>

<style scoped>
.main-view {
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
  overflow: hidden;
}
.bannerPortada {
  height: 100vh;
}
.bannerAnimation {
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.bannerAnimation h1 {
  font-weight: bold;
}
.bannerAnimation .spanish {
  transform: rotate(180deg);
}
.bannerInformation h4 {
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: bold;
}
.bannerButton button {
  background-color: rgb(19, 124, 193);
  color: #fff;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid #42b983;
  cursor: pointer;
}
.bannerButton button:hover {
  color: rgb(19, 124, 193);
  background-color: #d8e183;
  transition: all 0.8s ease;
}
.bannerFotter {
  font-size: 2.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 100px;
}

.bg-image {
  background-image: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_1626/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
  background-image: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_1626/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
  background-image: -ms-linear-gradient(
      top,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_1626/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
  background-image: linear-gradient(top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_1626/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 0;
}

@media screen and (max-width: 500px) {
  .bg-image {
    background-image: -moz-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_500/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
    background-image: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_500/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
    background-image: -ms-linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_500/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
    background-image: linear-gradient(
        top,
        rgba(0, 0, 0, 0.5),
        rgba(0, 0, 0, 0.5)
      ),
      url("https://res.cloudinary.com/propositivapr/image/upload/c_fill,w_500/v1655829943/pame-nicalit/bPortada_bovmvz.webp");
  }
  .bannerInformation h4 {
    letter-spacing: 0.225em;
    font-size: 0.9rem;
  }
}
</style>
