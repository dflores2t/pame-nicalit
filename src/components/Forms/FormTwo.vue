<template>
  <div class="step-title">Datos del Negocio</div>

  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('mPrestamo')"
      type="text"
      id="mPrestamo"
      name="mPrestamo"
      :rules="mPrestamoRules"
      v-model.trim="mPrestamo"
      autofocus
      placeholder="Monto del prestamo"
    />
    <label for="mPrestamo"
      ><i class="fa-solid fa-money-bill-1"></i> Monto Del Préstamo</label
    >
    <ErrorMessage class="text-danger" name="mPrestamo" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('plazoPrestamo')"
      type="text"
      id="plazoPrestamo"
      name="plazoPrestamo"
      :rules="plazoPrestamoRules"
      v-model.trim="plazoPrestamo"
      autofocus
      placeholder="Plazo del prestamo"
    />
    <label for="plazoPrestamo"
      ><i class="fa-solid fa-money-bill-1"></i> plazo Del Préstamo</label
    >
    <ErrorMessage class="text-danger" name="plazoPrestamo" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('cuotaPrestamo')"
      type="text"
      id="cuotaPrestamo"
      name="cuotaPrestamo"
      :rules="cuotaPrestamoRules"
      v-model.trim="cuotaPrestamo"
      autofocus
      placeholder="Cuota Mensual que Puede Pagar"
    />
    <label for="cuotaPrestamo"
      ><i class="fa-solid fa-money-bill-1"></i> Cuota Mensual que Puede
      Pagar</label
    >
    <ErrorMessage class="text-danger" name="cuotaPrestamo" />
  </div>

  <div class="form-input">
    <label for="iCrediticia"
      >Autorización para Consultar Información Crediticia.</label
    >
    <Field
      :class="inputClassObject('iCrediticia')"
      type="checkbox"
      id="iCrediticia"
      name="iCrediticia"
      :rules="iCrediticiaRules"
      v-model="iCrediticia"
    />
    <ErrorMessage class="input-error-msg" name="iCrediticia" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormTwo",
  components: {
    Field,
    ErrorMessage,
  },
  props: {
    errors: {
      type: Object,
    },
  },
  data() {
    return {
      mPrestamoRules: yup.string().required("Este campo es requerido"),
      plazoPrestamoRules: yup.string().required("Este campo es requerido"),
      cuotaPagarRules: yup.string().required("Este campo es requerido"),
      iCrediticiaRules: yup
        .boolean()
        .required("Deberia aceptar la consulta crediticia."),
    };
  },
  computed: {
    mPrestamo: {
      get() {
        return this.$store.state.user.mPrestamo;
      },
      set(value) {
        this.$store.commit("updateMprestamo", value);
      },
    },
    plazoPrestamo: {
      get() {
        return this.$store.state.user.plazoPrestamo;
      },
      set(value) {
        this.$store.commit("updatePlazoPrestamo", value);
      },
    },
    cuotaPrestamo: {
      get() {
        return this.$store.state.user.cuotaPrestamo;
      },
      set(value) {
        this.$store.commit("updateCuotaPrestamo", value);
      },
    },
    iCrediticia: {
      get() {
        return this.$store.state.user.iCrediticia;
      },
      set(value) {
        this.$store.commit("updateInformationCrediticia", value);
      },
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
  },
};
</script>

<style></style>
