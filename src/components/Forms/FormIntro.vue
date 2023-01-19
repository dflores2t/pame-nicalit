<template>
  <div class="step-title">Solicitud de Credito y Plan de Negocio!</div>
  <p>Estimado cliente!</p>
  <p>
    Con el objetivo de agilizar el proceso de su solicitud, lea detenidamente
    antes de responder cada uno de los campos de este formulario.
  </p>
  <p>
    Este formulario consta de 6 etapas, en las cuales deberá colocar sus datos
    correspondientes los que deberá verificar al llenar cada uno de los campos
    para poder avanzar a la siguiente etapa.
  </p>
</template>
<script>
export default {
  name: "Intro",
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
