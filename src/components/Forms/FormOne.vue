<template>
  <div class="step-title">Datos Personales</div>

  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('fullName')"
      type="text"
      id="fullName"
      name="fullName"
      :rules="fullNameRules"
      v-model.trim="fullName"
      placeholder="Nombre Completo"
    />
    <label for="fullName"
      ><i class="fa-solid fa-signature"></i> Nombres y Apellidos</label
    >
    <ErrorMessage class="text-danger" name="fullName" />
  </div>

  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('nCedula')"
      type="text"
      id="nCedula"
      name="nCedula"
      :rules="nCedulaRules"
      v-model.trim="nCedula"
      placeholder="Numero identificacion"
    />
    <label for="nCedula"
      ><i class="fa-solid fa-id-card"></i> N° de Cédula.</label
    >
    <ErrorMessage class="text-danger" name="nCedula" />
  </div>

  <div class="form-check form-input">
    <label for="exNicalit" class="form-check-label">
      <i class="fa-solid fa-square-check"></i> Ex-Trabajador de Nicalit.</label
    >
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
  <div class="form-check form-input">
    <label for="famExTrabajador" class="form-check-label">
      <i class="fa-solid fa-square-check"></i> Familiar de Ex-Trabajador.</label
    >
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
  <div class="form-check form-input">
    <label for="noExTrabajador" class="form-check-label"
      ><i class="fa-solid fa-square-check"></i> No es Ex-Trabajador.</label
    >
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

  <div class="form-floating mb-3 mt-3 form-input" v-if="isChecked">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('nameFamExTrabajador')"
      type="text"
      id="nameFamExTrabajador"
      name="nameFamExTrabajador"
      :rules="nameFamExTrabajadorRules"
      v-model.trim="nameFamExTrabajador"
      placeholder="Nombre Familiar"
    />
    <label for="nameFamExTrabajador"
      ><i class="fa-solid fa-people-group"></i> Nombre del familiar
      Ex-Trabajador</label
    >
    <ErrorMessage class="text-danger" name="nameFamExTrabajador" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      class="text-uppercase form-control"
      :class="inputClassObject('address')"
      type="text"
      id="address"
      name="address"
      :rules="addressRules"
      v-model.trim="address"
      placeholder="Direccion Domiciliar"
    />
    <label for="nameFamExTrabajador"
      ><i class="fa-solid fa-map-location-dot"></i> Dirección Domiciliar</label
    >
    <ErrorMessage class="text-danger" name="address" />
  </div>

  <div class="input-group mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('depart')"
      as="select"
      id="depart"
      name="depart"
      :rules="departRules"
      v-model="depart"
    >
      <option disabled value="">Elija un Departamento</option>
      <option>Managua</option>
      <option>Leon</option>
      <option>Chinandega</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="depart" />
  <div class="input-group mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('municipio')"
      as="select"
      id="municipio"
      name="municipio"
      :rules="municipioRules"
      v-model="municipio"
    >
      <option disabled value="">Elija un Municipio</option>
      <option>San Rafael</option>
      <option>San 1</option>
      <option>San 2</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="municipio" />
  <div class="input-group mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('comunidad')"
      as="select"
      id="comunidad"
      name="comunidad"
      :rules="comunidadRules"
      v-model="comunidad"
    >
      <option disabled value="">Elija una Comunidad</option>
      <option>El Salto</option>
      <option>Las Manos</option>
      <option>Los Chils</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="comunidad" />

  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('phoneHome')"
      type="tel"
      id="phoneHome"
      name="phoneHome"
      :rules="phoneHomeRules"
      v-model.trim="phoneHome"
      class="form-control"
      placeholder="4444-2222"
    />
    <label for="telephone1"
      ><i class="fa-solid fa-phone"></i> Teléfono Casa</label
    >
    <ErrorMessage class="text-danger" name="phoneHome" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('phoneMovil')"
      type="tel"
      id="phoneMovil"
      name="phoneMovil"
      :rules="phoneMovilRules"
      v-model.trim="phoneMovil"
      class="form-control"
      placeholder="2222-4444"
    />
    <label for="telephone2"
      ><i class="fa-solid fa-mobile-screen-button"></i> Teléfono Celular</label
    >
    <ErrorMessage class="text-danger" name="phoneMovil" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('email')"
      type="email"
      id="email"
      name="email"
      :rules="emailRules"
      v-model.trim="email"
      class="form-control"
      placeholder="nicapame@gmail.com"
    />
    <label for="email"
      ><i class="fa-solid fa-envelope"></i> Correo Electrónico</label
    >
    <ErrorMessage class="text-danger" name="email" />
  </div>

  <label class=""
    ><i class="fa-solid fa-rss"></i> Que Redes Sociales utiliza su
    Negocio:</label
  >
  <div class="form-check form-input">
    <label for="rsWhatsapp" class="form-check-label"
      ><i class="fa-brands fa-whatsapp-square"></i> Whatsapp</label
    >
    <input
      :class="inputClassObject('rsWhatsapp')"
      class="form-check-input"
      type="checkbox"
      id="rsWhatsapp"
      name="rsWhatsapp"
      :rules="rsWhatsappRules"
      v-model="rsWhatsapp"
      aria-label="Marcar la casilla de whatsapp"
    />
  </div>
  <div class="form-check form-input">
    <label for="rsFacebook" class="form-check-label"
      ><i class="fa-brands fa-facebook-square"> </i> Facebook</label
    >
    <input
      :class="inputClassObject('rsFacebook')"
      class="form-check-input"
      type="checkbox"
      id="rsFacebook"
      name="rsFacebook"
      :rules="rsFacebookRules"
      v-model="rsFacebook"
      aria-label="Marcar la casilla de Facebook"
    />
  </div>
  <div class="form-check form-input">
    <label for="none" class="form-check-label"
      ><i class="fa-solid fa-battery-empty"></i> ninguno</label
    >
    <input
      :class="inputClassObject('none')"
      class="form-check-input"
      type="checkbox"
      id="none"
      name="none"
      :rules="noneRules"
      v-model="none"
      aria-label="Marcar la casilla Ninguno"
      @click="IsChecked"
    />
  </div>
  <div class="mb-3 mt-3 form-input" v-if="!nonersChecked">
    <label for="otrarrss"
      ><i class="fa-solid fa-rss"></i> Otra Redes Sociales</label
    >
    <Field
      :class="inputClassObject('otrarrss')"
      as="select"
      id="otrarrss"
      name="otrarrss"
      :rules="otrarrssRules"
      v-model="otrarrss"
      class="form-select"
    >
      <option disabled value="">Seleccione las Redes Sociales</option>
      <option>Twitter</option>
      <option>Instagram</option>
      <option>Youtube</option>
      <option>Linkedln</option>
      <option>TikTok</option>
      <option>Quora</option>
    </Field>
    <ErrorMessage class="text-danger" name="otrarrss" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('cuentaBac')"
      type="text"
      id="cuentaBac"
      name="cuentaBac"
      :rules="cuentaBacRules"
      v-model.trim="cuentaBac"
      class="form-control"
      placeholder="123-444-333"
    />
    <label for="email"
      ><i class="fa-solid fa-building-columns"></i> Cuenta Bancaria</label
    >
    <ErrorMessage class="text-danger" name="cuentaBac" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('referenciaPersonal')"
      type="text"
      id="referenciaPersonal"
      name="referenciaPersonal"
      :rules="referenciaPersonalRules"
      v-model.trim="referenciaPersonal"
      class="form-control"
      placeholder="referencia personales"
    />
    <label for="referenciaPersonal"
      ><i class="fa-solid fa-file-pen"></i> Referencia Personales</label
    >
    <ErrorMessage class="text-danger" name="referenciaPersonal" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      :class="inputClassObject('referenciaPhone')"
      type="tel"
      id="referenciaPhone"
      name="referenciaPhone"
      :rules="referenciaPhoneRules"
      v-model.trim="referenciaPhone"
      class="form-control"
      placeholder="4444-2222"
    />
    <label for="telephone1"
      ><i class="fa-solid fa-phone"></i> Teléfono Referencia</label
    >
    <ErrorMessage class="text-danger" name="referenciaPhone" />
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
      fullNameRules: yup.string().trim().notRequired(),
      // .notrequired("Debe escribir su nombre completo!"),
      nCedulaRules: yup.string().trim().notRequired(),
      // .matches(
      //   /^\d{3}(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{6}[a-zA-Z]$/,
      //   "Identificación no valida"
      // )
      // .notRequired(),
      // .notRequired("Este campo es requerido"),
      exNicalitRules: yup.boolean().notRequired(),
      famExTrabajadorRules: yup.boolean().notRequired(),
      noExTrabajadorRules: yup.boolean().notRequired(),
      nameFamExTrabajadorRules: yup.string().trim().notRequired(),
      addressRules: yup.string().trim().notRequired(),
      // .notRequired("Debe escribir su direccion domiciliar"),
      departRules: yup.string().notRequired(),
      // .notRequired("Debe escojer un departamento"),
      municipioRules: yup.string().trim().notRequired(),
      // .notRequired("Debe escojer un Municipio"),
      comunidadRules: yup.string().trim().notRequired(),
      // .notRequired("Debe escojer una comunidad"),
      phoneHomeRules: yup.string().trim(),
      // .matches(/^\d{4}\d{4}$/, "Número de Teléfono no valido")
      // .notRequired(),
      phoneMovilRules: yup
        .string(),
        // .matches(/^\d{4}\d{4}$/, "Número de Celular no valido"),
      rsWhatsappRules: yup.boolean().notRequired(),
      rsFacebookRules: yup.boolean().notRequired(),
      emailRules: yup.string().trim().email("Correo no valido").notRequired(),
      noneRules: yup.string().trim().notRequired(),
      otrarrssRules: yup.string().trim().notRequired(),
      cuentaBacRules: yup.string().trim(),
      // .matches(/^\d{3}\d{3}\d{3}$/, "Número de cuenta no valido")
      // .notRequired(),
      referenciaPersonalRules: yup.string().trim().notRequired(),
      referenciaPhoneRules: yup.string().trim(),
      // .matches(/^\d{4}\d{4}$/, "Número de Teléfono no valido")
      // .notRequired(),
      isChecked: false,
      nonersChecked: false,
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
        this.isChecked = value;
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
    phoneHome: {
      get() {
        return this.$store.state.user.phoneHome;
      },
      set(value) {
        this.$store.commit("updatePhoneHome", value);
      },
    },
    phoneMovil: {
      get() {
        return this.$store.state.user.phoneMovil;
      },
      set(value) {
        this.$store.commit("updatePhoneMovil", value);
      },
    },
    email: {
      get() {
        return this.$store.state.user.email;
      },
      set(value) {
        this.$store.commit("updateEmail", value);
      },
    },
    rsWhatsapp: {
      get() {
        return this.$store.state.user.rsWhatsapp;
      },
      set(value) {
        this.$store.commit("updateRsWhatsapp", value);
      },
    },
    rsFacebook: {
      get() {
        return this.$store.state.user.rsFacebook;
      },
      set(value) {
        this.$store.commit("updateRsFacebook", value);
      },
    },
    none: {
      get() {
        return this.$store.state.user.none;
      },
      set(value) {
        this.nonersChecked = value;
        this.$store.commit("updateNone", value);
      },
    },
    otrarrss: {
      get() {
        return this.$store.state.user.otrarrss;
      },
      set(value) {
        this.$store.commit("updateOtrarrss", value);
      },
    },
    cuentaBac: {
      get() {
        return this.$store.state.user.cuentaBac;
      },
      set(value) {
        this.$store.commit("updateCuentaBac", value);
      },
    },
    referenciaPersonal: {
      get() {
        return this.$store.state.user.referenciaPersonal;
      },
      set(value) {
        this.$store.commit("updateReferenciaPersonal", value);
      },
    },
    referenciaPhone: {
      get() {
        return this.$store.state.user.referenciaPhone;
      },
      set(value) {
        this.$store.commit("updateReferenciaPhone", value);
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
