<template>
  <div class="scredito">
    <h3>Solicitud de Credito y Plan de Negocio</h3>
    <!-- <div>
      <article>
        <section :class="animation">
          <h2>{{ formGroup[formPosition].title }}</h2>
          <div>
            <div
              v-for="(field, index) in formGroup[formPosition].fields"
              :key="'field' + index"
            >
              <label>{{ field.label }}</label>
              <input :type="field.type" v-model="field.value" required />
            </div>
          </div>
          <div class="button">
            <button
              class="btn-primary"
              v-if="formPosition < formGroup.length - 1"
              @click="nextStep"
            >
              Siguiente
            </button>
            <button
              class="btn-primary"
              v-if="formPosition === formGroup.length - 1"
            >
              Enter
            </button>
          </div>
        </section>
      </article>
    </div> -->
  
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      formPosition: 0,
      animation: "animate-in",
      formGroup: [
        {
          title: "Datos Personales",
          fields: [
            { label: "Número de Cédula", value: "", type: "text" },
            { label: "Nombre Completo", value: "", type: "text" },
            { label: "Ex-trabajador Nicalit", value: "", type: "checkbox" },
            {
              label: "Familiar Ex-trabajador Nicalit",
              value: "",
              type: "checkbox",
            },
            {
              label: "No es Ex-trabajador Nicalit",
              value: "",
              type: "checkbox",
            },
            {
              label: "Nombre del Familiar Ex-trabajodor de nicalit",
              value: "",
              type: "text",
            },
          ],
        },
        {
          title: "Datos Personales",
          fields: [
            { label: "Direccion Domiciliar", value: "", type: "text" },
            { label: "Departamento", value: "", type: "text" },
            { label: "Municipio", value: "", type: "text" },
            { label: "Comarca", value: "", type: "text" },
            { label: "Teléfono", value: "", type: "tel" },
            { label: "Correo Electronico", value: "", type: "email" },
          ],
        },
        {
          title: "Datos Personales",
          fields: [
            { label: "Redes sociales que utiliza", value: "", type: "text" },
            { label: "Numero de cuenta Bac", value: "", type: "text" },
            { label: "Referencia Personal", value: "", type: "text" },
            { label: "Teléfono Referencia Personal", value: "", type: "tel" },
          ],
        },
        {
          title: "Datos Del Negocio",
          fields: [
            { label: "City", value: "" },
            { label: "Zip Code", value: "" },
            { label: "County", value: "" },
            { label: "State", value: "" },
          ],
        },
        {
          title: "Datos Del Prestamo",
          fields: [
            { label: "Academic qualification", value: "" },
            { label: "College Attended", value: "" },
            { label: "Year of completion", value: "" },
          ],
        },
      ],
    };
  },
  methods: {
    nextStep() {
      this.animation = "animate-out";
      setTimeout(() => {
        this.animation = "animate-in";
        this.formPosition += 1;
      }, 600);
    },
  },
};
</script>
<style scoped>
.scredito {
  color: white;
  width: 100vw;
}
/* Style the tab */
input[type="text"] {
  width: 90%;
  margin-top: 5px;
  font-size: 1.3rem;
}
label {
  width: 100%;
  display: block;
  text-align: center;
  margin-bottom: 5px;
  margin-top: 10px;
}
.btn-primary {
  color: blue;
  font-size: 1.2rem;
  margin-top: 10px;
}
.scredito .animation-in {
  transform-origin: left;
  animation: in 0.6s ease-in-out;
}
.scredito .animation-out {
  transform-origin: bottom left;
  animation: out 0.6s ease-in-out;
}
</style>
