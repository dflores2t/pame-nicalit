<template>
  <div class="step-title">Datos Personales</div>

  <div class="form-floating mb-3 mt-3">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('fullName')"
      type="text"
      id="fullName"
      name="fullName"
      :rules="fullNameRules"
      v-model.trim="fullName"
      autofocus
    />
    <label for="fullName">Nombres y Apellidos</label>
    <ErrorMessage class="text-danger" name="fullName" />
  </div>

  <div class="form-floating mb-3 mt-3">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('nCedula')"
      type="text"
      id="nCedula"
      name="nCedula"
      :rules="nCedulaRules"
      v-model.trim="nCedula"
    />
    <label for="nCedula">N° de Cédula.</label>
    <ErrorMessage class="text-danger" name="nCedula" />
  </div>

  <div class="form-check">
    <label class="form-check-label">Ex-Trabajador de Nicalit.</label>
    <input
      :class="inputClassObject('exNicalit')"
      class="form-check-input"
      type="checkbox"
      id="exNicalit"
      :rules="exNicalitRules"
      v-model="exNicalit"
      aria-label="Checkbox for following label"
    />
  </div>
  <div class="form-check">
    <label class="form-check-label">Familiar de Ex-Trabajador.</label>
    <input
      :class="inputClassObject('famExTrabajador')"
      class="form-check-input"
      type="checkbox"
      id="famExTrabajador"
      :rules="famExTrabajadorRules"
      v-model="famExTrabajador"
      aria-label="Checkbox for following label"
    />
  </div>
  <div class="form-check">
    <label class="form-check-label">No es Ex-Trabajador.</label>
    <input
      :class="inputClassObject('noExTrabajador')"
      class="form-check-input"
      type="checkbox"
      id="noExTrabajador"
      :rules="noExTrabajadorRules"
      v-model="noExTrabajador"
      aria-label="Checkbox for following label"
    />
  </div>

  <div class="form-floating mb-3 mt-3" v-if="isChecked">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('nameFamExTrabajador')"
      type="text"
      id="address"
      name="address"
      :rules="nameFamExTrabajadorRules"
      v-model.trim="nameFamExTrabajador"
    />
    <label for="address">Nombre del Ex-Trabajador del que es Familiar:</label>
    <ErrorMessage class="text-danger" name="nameFamExTrabajador" />
  </div>
  <div class="form-floating mb-3 mt-3">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('address')"
      type="text"
      id="address"
      name="address"
      :rules="addressRules"
      v-model.trim="address"
    />
    <label for="nameFamExTrabajador">Dirección Domiciliar</label>
    <ErrorMessage class="text-danger" name="address" />
  </div>

  <select class="form-select" aria-label="Disabled select example" disabled>
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
  <div class="form-input">
    <Field
      class="form-select"
      :class="inputClassObject('depart')"
      as="select"
      id="depart"
      name="depart"
      :rules="departRules"
      v-model="depart"
    >
      <option disabled value="">Departamento</option>
      <option>Managua</option>
      <option>Leon</option>
      <option>Chinandega</option>
    </Field>
    <ErrorMessage class="input-error-msg" name="depart" />
  </div>
  <div class="form-input">
    <label for="municipio">Municipio</label>
    <br />
    <Field
      class="text-uppercase"
      :class="inputClassObject('municipio')"
      as="select"
      id="municipio"
      name="municipio"
      :rules="municipioRules"
      v-model="municipio"
    >
      <option disabled value="">Municipio</option>
      <option>San Rafael</option>
      <option>San 1</option>
      <option>San 2</option>
    </Field>
    <ErrorMessage class="input-error-msg" name="Municipio" />
  </div>
  <div class="form-input">
    <label for="comunidad">Comunidad</label>
    <br />
    <Field
      class="text-uppercase"
      :class="inputClassObject('comunidad')"
      as="select"
      id="comunidad"
      name="comunidad"
      :rules="comunidadRules"
      v-model="comunidad"
    >
      <option disabled value="">Comunidad</option>
      <option>El Salto</option>
      <option>Las Manos</option>
      <option>Los Chils</option>
    </Field>
    <ErrorMessage class="input-error-msg" name="depart" />
  </div>

  <div class="form-input">
    <label for="telephone1">Telefono Casa</label>
    <Field
      :class="inputClassObject('telephone1')"
      type="tel"
      id="telephone1"
      name="telephone1"
      :rules="telephone1Rules"
      v-model.trim="telephone1"
      class="form-control"
    />
    <ErrorMessage class="input-error-msg" name="telephone1" />
  </div>
  <div class="form-input">
    <label for="telephone2">Telefono Celular</label>
    <Field
      :class="inputClassObject('telephone2')"
      type="tel"
      id="telephone2"
      name="telephone2"
      :rules="telephone2Rules"
      v-model.trim="telephone2"
      class="form-control"
    />
    <ErrorMessage class="input-error-msg" name="telephone2" />
  </div>
  <div class="form-input">
    <label for="email">Correo Electronico</label>
    <Field
      :class="inputClassObject('email')"
      type="email"
      id="email"
      name="email"
      :rules="emailRules"
      v-model.trim="email"
      class="form-control"
    />
    <ErrorMessage class="input-error-msg" name="email" />
  </div>

  <div class="form-check">
    <label class="form-check-label"
      ><i class="fa-brands fa-whatsapp-square"></i>Whatsapp</label
    >
    <input
      :class="inputClassObject('whatsapp')"
      class="form-check-input"
      type="checkbox"
      id="whatsapp"
      name="whatsapp"
      :rules="whatsappRules"
      v-model="whatsapp"
      aria-label="Marcar la casilla de whatsapp"
    />
  </div>
  <div class="form-check">
    <label class="form-check-label"
      ><i class="fa-brands fa-facebook-square"></i>Facebook</label
    >
    <input
      :class="inputClassObject('facebook')"
      class="form-check-input"
      type="checkbox"
      id="facebook"
      name="facebook"
      :rules="facebookRules"
      v-model="facebook"
      aria-label="Marcar la casilla de Facebook"
    />
  </div>
  <div class="form-check">
    <label class="form-check-label">ninguno</label>
    <input
      :class="inputClassObject('none')"
      class="form-check-input"
      type="checkbox"
      id="none"
      name="none"
      :rules="noneRules"
      v-model="none"
      aria-label="Marcar la casilla Ninguno"
    />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  name: "FormOne",
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
      fullNameRules: yup
        .string()
        .trim()
        .required("Debe escribir su nombre completo!"),
      nCedulaRules: yup
        .string()
        .trim()
        .required("La Identificacion no es valida"),
      exNicalitRules: yup.string().trim().notRequired(),
      famExTrabajadorRules: yup.string().trim().notRequired(),
      noExTrabajadorRules: yup.string().trim().notRequired(),
      nameFamExTrabajadorRules: yup.string().trim().notRequired(),
      addressRules: yup
        .string()
        .trim()
        .required("Debe escribir su direccion domiciliar"),
      departRules: yup.string().trim().required("Debe escojer un deparamento"),
      municipioRules: yup.string().trim().required("Debe escojer un Municipio"),
      comunidadRules: yup
        .string()
        .trim()
        .required("Debe escojer una comunidad"),
      telephone1Rules: yup.number().required(),
      telephone2Rules: yup.number().required(),
      emailRules: yup.string().trim().required(),
      isChecked: false,
    };
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.user.fullName;
      },
      set(value) {
        this.$store.commit("updateFullName", value);
      },
    },
    nCedula: {
      get() {
        return this.$store.state.user.nCedula;
      },
      set(value) {
        this.$store.commit("updatenCedula", value);
      },
    },
    exNicalit: {
      get() {
        return this.$store.state.user.exNicalit;
      },
      set(value) {
        this.$store.commit("updateExNicalit", value);
      },
    },
    famExTrabajador: {
      get() {
        return this.$store.state.user.famExTrabajador;
      },
      set(value) {
        this.isChecked = value === true ? true : false;
        this.$store.commit("updateFamExTrabajador", value);
      },
    },
    noExTrabajador: {
      get() {
        return this.$store.state.user.noExTrabajador;
      },
      set(value) {
        this.$store.commit("updateNoExTrabajador", value);
      },
    },
    nameFamExTrabajador: {
      get() {
        return this.$store.state.user.nameFamExTrabajador;
      },
      set(value) {
        this.$store.commit("updateNameFamExTrabajador", value);
      },
    },
    address: {
      get() {
        return this.$store.state.user.address;
      },
      set(value) {
        this.$store.commit("updateAddress", value);
      },
    },
    depart: {
      get() {
        return this.$store.state.user.depart;
      },
      set(value) {
        this.$store.commit("updateDepart", value);
      },
    },
    municipio: {
      get() {
        return this.$store.state.user.municipio;
      },
      set(value) {
        this.$store.commit("updateMunicipio", value);
      },
    },
    comunidad: {
      get() {
        return this.$store.state.user.comunidad;
      },
      set(value) {
        this.$store.commit("updateComunidad", value);
      },
    },
    telephone1: {
      get() {
        return this.$store.state.user.telephone1;
      },
      set(value) {
        this.$store.commit("updateTelephone1");
      },
    },
    telephone2: {
      get() {
        return this.$store.state.user.telephone2;
      },
      set(value) {
        this.$store.commit("updateTelephone2");
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("updateEmail");
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
