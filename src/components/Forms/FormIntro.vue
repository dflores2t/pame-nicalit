<template>
  <div class="step-title">Solicitud de Credito y Plan de Negocio!</div>
<p>Estimado cliente!</p>
  <p>Con el objetivo de agilizar su proceso de solicitud</p>
  <p>Llene el siguiente formulario con sus datos correspondiente.</p>
  <br />
  <p>Tres Etapas:</p>
  <p>
    <ul>
      <li>Datos Personales.</li>
      <li>Datos del Negocio.</li>
      <li>Datos del Prestamo que Solicita.</li>
    </ul>
  </p>
</template>
<script>
export default {
  name: 'Intro',
  props: {
    errors: {
      type: Object,
    },
  },
}
</script>

<style>
ul {
  margin-top: 0;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
}
</style>