<template>
  <div class="step-title">Datos Personales</div>

  <div class="form-input">
    <label for="fullName">Nombres y Apellidos</label>
    <field
      class="text-uppercase"
      :class="inputClassObject('fullName')"
      type="text"
      id="fullName"
      name="fullName"
      :rules="fullNameRules"
      v-model.trim="fullName"
      autofocus
    />
    <ErrorMessage class="input-error-msg" name="fullName" />
  </div>

  <div class="form-input">
    <label for="nCedula">N° de Cédula.</label>
    <Field
      class="text-uppercase"
      :class="inputClassObject('nCedula')"
      type="text"
      id="nCedula"
      name="nCedula"
      :rules="nCedulaRules"
      v-model.trim="nCedula"
    />
    <ErrorMessage class="input-error-msg" name="nCedula" />
  </div>

  <div class="input-group mb-3">
    <label class="form-control">Ex-Trabajador de Nicalit.</label>
    <div class="input-group-text">
      <input
        :class="inputClassObject('exNicalit')"
        class="form-check-input mt-0"
        type="checkbox"
        id="exNicalit"
        :rules="exNicalitRules"
        v-model="exNicalit"
        aria-label="Checkbox for following label"
      />
    </div>
  </div>
  <div class="input-group mb-3">
    <label class="form-control">Familiar de Ex-Trabajador.</label>
    <div class="input-group-text">
      <input
        :class="inputClassObject('famExTrabajador')"
        class="form-check-input mt-0"
        type="checkbox"
        id="famExTrabajador"
        :rules="famExTrabajadorRules"
        v-model="famExTrabajador"
        aria-label="Checkbox for following label"
      />
    </div>
  </div>
  <div class="input-group mb-3">
    <label class="form-control">No es Ex-Trabajador.</label>
    <div class="input-group-text">
      <input
        :class="inputClassObject('noExTrabajador')"
        class="form-check-input mt-0"
        type="checkbox"
        id="noExTrabajador"
        :rules="noExTrabajadorRules"
        v-model="noExTrabajador"
        aria-label="Checkbox for following label"
      />
    </div>
  </div>

  <div class="form-input" v-if="isChecked">
    <label for="address">Nombre del Ex-Trabajador del que es Familiar:</label>
    <Field
      class="text-uppercase"
      :class="inputClassObject('nameFamExTrabajador')"
      type="text"
      id="address"
      name="address"
      :rules="nameFamExTrabajadorRules"
      v-model.trim="nameFamExTrabajador"
    />
    <ErrorMessage class="input-error-msg" name="nameFamExTrabajador" />
  </div>
  <div class="form-input">
    <label for="nameFamExTrabajador">Dirección Domiciliar</label>
    <Field
      class="text-uppercase"
      :class="inputClassObject('address')"
      type="text"
      id="address"
      name="address"
      :rules="addressRules"
      v-model.trim="address"
    />
    <ErrorMessage class="input-error-msg" name="address" />
  </div>

  <div class="form-input">
    <label for="depart">Departamento</label>
    <br />
    <Field
      class="text-uppercase"
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
