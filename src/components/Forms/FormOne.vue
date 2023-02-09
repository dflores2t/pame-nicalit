<template>
  <div class="step-title">Datos Personales</div>

  <div class="form-floating mb-3 mt-3 form-input">
    <field
      tabindex="1"
      class="text-uppercase form-control"
      :class="inputClassObject('fullName')"
      type="text"
      id="fullName"
      name="fullName"
      :rules="fullNameRules"
      v-model.trim="fullName"
      autofocus
      placeholder="Nombre Completo"
    />
    <label for="fullName"
      ><i class="fa-solid fa-signature"></i> Nombres y Apellidos</label
    >
    <ErrorMessage class="text-danger" name="fullName" />
  </div>

  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      tabindex="2"
      class="text-uppercase form-control"
      :class="inputClassObject('nCedula')"
      type="text"
      id="nCedula"
      name="nCedula"
      :rules="nCedulaRules"
      v-model.trim="nCedula"
      placeholder="0011210840002W"
    />
    <label for="nCedula"
      ><i class="fa-solid fa-id-card"></i> 001-121084-0002W</label
    >
    <ErrorMessage class="text-danger" name="nCedula" />
  </div>

  <div class="form-check form-input">
    <label for="exNicalit" class="form-check-label">
      <i class="fa-solid fa-square-check"></i> Ex-Trabajador de Nicalit?</label
    >
    <Field
      tabindex="3"
      :class="inputClassObject('exNicalit')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="exNicalit"
      name="exNicalit"
      :rules="exNicalitRules"
      v-model="exNicalit"
    />
  </div>
  <div class="form-check form-input">
    <label for="famExTrabajador" class="form-check-label">
      <i class="fa-solid fa-square-check"></i> Familiar de Ex-Trabajador?</label
    >
    <Field
      tabindex="4"
      :class="inputClassObject('famExTrabajador')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="famExTrabajador"
      name="famExTrabador"
      :rules="famExTrabajadorRules"
      v-model="famExTrabajador"
    />
  </div>
  <div class="form-check form-input">
    <label for="noExTrabajador" class="form-check-label"
      ><i class="fa-solid fa-square-check"></i>No es Ex-Trabajador?</label
    >
    <Field
      tabindex="5"
      :class="inputClassObject('noExTrabajador')"
      class="form-check-input"
      type="checkbox"
      value="NO LO SOY"
      name="noExTrabajador"
      v-model="noExTrabajador"
    />
  </div>

  <div class="form-floating mb-3 mt-3 form-input" v-if="isChecked">
    <Field
      tabindex="6"
      class="text-uppercase form-control"
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
      tabindex="7"
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
      tabindex="8"
      class="form-select"
      :class="inputClassObject('depart')"
      as="select"
      id="depart"
      name="depart"
      :rules="departRules"
      v-model="depart"
      @change="onChange"
    >
      <option disabled value="">Elija un Departamento</option>
      <option
        v-for="(dpto, index) in departamento"
        :key="index"
        :value="dpto.value"
      >
        {{ dpto.text }}
      </option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="depart" />
  <div class="input-group mb-3 form-input">
    <Field
      tabindex="9"
      class="form-select"
      :class="inputClassObject('municipio')"
      as="select"
      id="municipio"
      name="municipio"
      :rules="municipioRules"
      v-model="municipio"
      @change="onChangeMunicipio"
    >
      <option disabled value="">Elija un Municipio</option>
      <option v-for="(muni, index) in options" :key="index" :value="muni.value">
        {{ muni.text }}
      </option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="municipio" />
  <div class="input-group mb-3 form-input">
    <Field
      tabindex="10"
      class="form-select"
      :class="inputClassObject('comunidad')"
      as="select"
      id="comunidad"
      name="comunidad"
      :rules="comunidadRules"
      v-model="comunidad"
    >
      <option disabled value="">Elija una Comunidad</option>
      <option v-for="(c, index) in cOptions" :key="index" :value="c.value">
        {{ c.text }}
      </option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="comunidad" />

  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      tabindex="11"
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
      tabindex="12"
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
      tabindex="13"
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
    <Field
      tabindex="14"
      :class="inputClassObject('rsWhatsapp')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="rsWhatsapp"
      name="rsWhatsapp"
      :rules="rsWhatsappRules"
      v-model="rsWhatsapp"
    />
  </div>
  <div class="form-check form-input">
    <label for="rsFacebook" class="form-check-label"
      ><i class="fa-brands fa-facebook-square"> </i> Facebook</label
    >
    <Field
      tabindex="15"
      :class="inputClassObject('rsFacebook')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="rsFacebook"
      name="rsFacebook"
      :rules="rsFacebookRules"
      v-model="rsFacebook"
    />
  </div>
  <div class="form-check form-input">
    <label for="none" class="form-check-label"
      ><i class="fa-solid fa-battery-empty"></i> ninguno</label
    >
    <Field
      tabindex="16"
      :class="inputClassObject('none')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="none"
      name="none"
      :rules="noneRules"
      v-model="none"
    />
  </div>
  <div class="mb-3 mt-3 form-input" v-if="!nonersChecked">
    <label for="otrarrss"
      ><i class="fa-solid fa-rss"></i> Otra Redes Sociales</label
    >
    <Field
      tabindex="17"
      :class="inputClassObject('otrarrss')"
      as="select"
      id="otrarrss"
      name="otrarrss"
      :rules="otrarrssRules"
      v-model="otrarrss"
      class="form-select"
    >
      <option disabled value="">Seleccione las Redes Sociales</option>
      <option v-for="social in rrss" :value="social">{{ social }}</option>
    </Field>
    <ErrorMessage class="text-danger" name="otrarrss" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      tabindex="18"
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
      ><i class="fa-solid fa-building-columns"></i> Cuenta Bancaria Bac</label
    >
    <ErrorMessage class="text-danger" name="cuentaBac" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <Field
      tabindex="19"
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
      tabindex="20"
      :class="inputClassObject('referenciaPhone')"
      type="tel"
      id="referenciaPhone"
      name="referenciaPhone"
      :rules="referenciaPhoneRules"
      v-model.trim="referenciaPhone"
      class="form-control"
      placeholder="4444-2222"
    />
    <label for="referenciaPhone"
      ><i class="fa-solid fa-phone"></i> Teléfono Referencia</label
    >
    <ErrorMessage class="text-danger" name="referenciaPhone" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  Departamento,
  Municipios,
  Comarcas,
  rsociales,
} from "../../services/PameServices";

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
        .matches(
          /^\d{3}-(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}-([0-9])\d{3}[a-zA-Z]$/,
          "Identificación no valida"
        )
        .required("Este campo es requerido"),
      exNicalitRules: yup.string().notRequired(),
      famExTrabajadorRules: yup.string().notRequired(),
      noExTrabajadorRules: yup.string().required(),
      nameFamExTrabajadorRules: yup.string().trim().notRequired(),
      addressRules: yup
        .string()
        .trim()
        .required("Debe escribir su direccion domiciliar"),
      departRules: yup.string().required("Debe escojer un departamento"),
      municipioRules: yup.string().trim().required("Debe escojer un Municipio"),
      comunidadRules: yup
        .string()
        .trim()
        .required("Debe escojer una comunidad"),
      phoneHomeRules: yup
        .string()
        .trim()
        .matches(/^(?:\d{4}\d{4}|)$/, "Número de Teléfono no valido")
        .notRequired(),
      phoneMovilRules: yup
        .string()
        .trim()
        .matches(/^\d{4}\d{4}$/, "Número de Celular no valido")
        .required("Número de Celular no valido es requerido"),
      rsWhatsappRules: yup.string().notRequired(),
      rsFacebookRules: yup.string().notRequired(),
      emailRules: yup.string().email("Correo no valido").notRequired(),
      noneRules: yup.string().trim().notRequired(),
      otrarrssRules: yup.string().trim().notRequired(),
      cuentaBacRules: yup
        .string()
        .trim()
        .matches(/^(?:\d{3}\d{3}\d{3}|)$/, "Número de cuenta no valido")
        .notRequired("Número de cuenta es requerido"),
      referenciaPersonalRules: yup.string().trim().notRequired(),
      referenciaPhoneRules: yup
        .string()
        .trim()
        .matches(/^\d{4}\d{4}|^\s*$/, "Número de Teléfono no valido")
        .notRequired(),
      isChecked: false,
      nonersChecked: false,
      departamento: Departamento,
      mp: Municipios,
      comarcas: Comarcas,
      rrss: rsociales,
    };
  },
  computed: {
    fullName: {
      get() {
        return this.$store.state.user.fullName;
      },
      set(value) {
        this.$store.commit("updateFullName", value.toUpperCase());
      },
    },
    nCedula: {
      get() {
        return this.$store.state.user.nCedula;
      },
      set(value) {
        this.$store.commit("updatenCedula", value.toUpperCase());
      },
    },
    exNicalit: {
      get() {
        return this.$store.state.user.exNicalit;
      },
      set(value) {
        value = value === "SI" ? "NO SOY" : "-";
        this.$store.commit("updateExNicalit", value);
      },
    },
    famExTrabajador: {
      get() {
        return this.$store.state.user.famExTrabajador;
      },
      set(value) {
        this.isChecked = value;
        value = value === "SI" ? "SI" : "NO";
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
        this.$store.commit("updateNameFamExTrabajador", value.toUpperCase());
      },
    },
    address: {
      get() {
        return this.$store.state.user.address;
      },
      set(value) {
        this.$store.commit("updateAddress", value.toUpperCase());
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
        this.$store.commit("updateEmail", value.toUpperCase());
      },
    },
    rsWhatsapp: {
      get() {
        return this.$store.state.user.rsWhatsapp;
      },
      set(value) {
        value = value === "SI" ? "SI" : "";
        this.$store.commit("updateRsWhatsapp", value);
      },
    },
    rsFacebook: {
      get() {
        return this.$store.state.user.rsFacebook;
      },
      set(value) {
        value = value === "SI" ? "SI" : "";
        this.$store.commit("updateRsFacebook", value);
      },
    },
    none: {
      get() {
        return this.$store.state.user.none;
      },
      set(value) {
        this.nonersChecked = value;
        value = value === "SI" ? "X" : "";
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
        this.$store.commit("updateReferenciaPersonal", value.toUpperCase());
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
    options() {
      let option = "";
      switch (this.depart) {
        case "MANAGUA":
          option = this.mp.MANAGUA;
          break;
        case "CARAZO":
          option = this.mp.CARAZO;
          break;
        case "MASAYA":
          option = this.mp.MASAYA;
          break;
        default:
          option = this.mp.MANAGUA;
          break;
      }
      return option;
    },
    cOptions() {
      let option = "";
      switch (this.municipio) {
        case "MANAGUA":
          option = this.comarcas.MANAGUA;
          break;
        case "SAN RAFAEL DEL SUR":
          option = this.comarcas["SAN RAFAEL DEL SUR"];
          break;
        case "JINOTEPE":
          option = this.comarcas.JINOTEPE;
          break;
        case "MASATEPE":
          option = this.comarcas.MASATEPE;
          break;
        default:
          option = this.comarcas.MANAGUA;
          break;
      }
      return option;
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    onChange() {
      this.options;
    },
    onChangeMunicipio() {
      this.cOptions;
    },
  },
};
</script>
