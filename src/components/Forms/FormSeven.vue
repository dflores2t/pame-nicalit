<template>
  <div class="step-title">Hemos Terminado!</div>
  <p>Gracias por tu tiempo!</p>
  <p>
    Para finalizar, presiona el botón Enviar <br/>
    y tu información sera enviada a los ejecutivos de PAME.
  </p>
</template>
<script>
export default {
  name: "FormSeven",
  props: {
    errors: {
      type: Object,
    },
  },
};
</script>

<style>
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
</style>