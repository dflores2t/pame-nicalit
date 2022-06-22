<template>
  <div class="main-view">
    <div class="bannerPortada in">
      <div class="bannerAnimation">
        <h1>
          <span class="material-symbols-outlined">priority_high</span>APOYANDO
          EL TRABAJO PROPIO<span class="material-symbols-outlined"
            >priority_high</span
          >
        </h1>
      </div>
      <div class="bannerInformation">
        <p>
          Programa de Apoyo al Microempresar - Organizacion sin animo de lucro
        </p>
      </div>
      <div class="bannerButton">
        <button>Formatos de Solicitud.</button>
      </div>
      <div class="bannerFotter">
        <h5>SOBRE PAME</h5>
        <span class="material-symbols-outlined">arrow_downward</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.material-symbols-outlined {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 1.9rem; /* Preferred icon size */
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
.main-view {
  grid-area: c;
  color: white;
  font-weight: bold;
  font-size: 0.8rem;
}
.bannerPortada {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.bannerInformation p {
  letter-spacing: 0.225em;
  text-transform: uppercase;
  font-size: 0.9rem;
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
.bannerFotter h5 {
  font-size: 1.1rem;
}
</style>
