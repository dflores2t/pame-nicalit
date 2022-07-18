<template>
  <div class="step-title">Datos Personales</div>

  <div class="form-input">
    <label for="fullName">Nombres y Apellidos</label>
    <field class="text-uppercase"
      :class="inputClassObject('fullName')"
      type="text"
      id="fullName"
      name="fullName"
      :rules="fullNameRules"
      v-model.trim="fullName"
      autofocus
    />
  </div>

  <div class="form-input">
    <label for="nCedula">N° de Cédula.</label>
    <Field class="text-uppercase"
      :class="inputClassObject('nCedula')"
      type="text"
      id="nCedula"
      name="nCedula"
      :rules="nCedulaRules"
      v-model.trim="nCedula"
    />
    <ErrorMessage class="input-error-msg" name="nCedula" />
  </div>
  <div class="form-input">
    <label for="exNicalit">Ex Trabajadore Nicalit.</label>
    <Field
      :class="inputClassObject('exNicalit')"
      type="checkbox"
      id="exNicalit"
      name="exNicalit"
      :rules="exNicalitRules"
      :value="true"
      v-model="exNicalit"
    />
    <ErrorMessage class="input-error-msg" name="nCedula" />
  </div>

  <div class="form-input">
    <label for="address">Dirección</label>
    <Field class="text-uppercase"
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
    <Field class="text-uppercase"
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
      fullNameRules: yup.string().trim().required(),
      nCedulaRules: yup.string().trim().required(),
      exNicalitRules:yup.bool().notRequired(),
      addressRules: yup.string().trim().required(),
      departRules: yup.string().trim().required(),
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
