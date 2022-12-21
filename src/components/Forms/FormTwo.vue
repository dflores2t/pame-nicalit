<template>
  <div class="step-title">Datos del Negocio</div>
  <div class="form-floating mb-3 mt-3 form-input">
    <fieldset>
      <legend>Tipo de Apoyo Solicitado.</legend>
      <div class="form-check form-input">
        <label for="iNegocio" class="form-check-label"
          >Inicio de Nogocio:</label
        >
        <Field
          :class="inputClassObject('aSolicitado')"
          class="form-check-input"
          maxlength="100"
          type="radio"
          id="iNegocio"
          name="aSolicitado"
          value="Inicio de Negocio"
          :rules="aSolicitadoRules"
          v-model="aSolicitado"
          autofocus
        />
      </div>
      <div class="form-check form-input">
        <label for="cNegocio" class="form-check-label"
          >Continuidad del Nogocio:</label
        >
        <Field
          :class="inputClassObject('aSolicitado')"
          class="form-check-input"
          type="radio"
          id="cNegocio"
          name="aSolicitado"
          value="Continuidad del Negocio"
          :rules="aSolicitadoRules"
          v-model="aSolicitado"
          aria-label="Marcar la casilla de whatsapp"
        />
      </div>
      <ErrorMessage class="text-danger" name="aSolicitado" />
    </fieldset>
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('dNegocio')"
      type="text"
      maxlength="100"
      id="dNegocio"
      name="dNegocio"
      :rules="dNegocioRules"
      v-model.trim="dNegocio"
      placeholder="Descripción del negocio"
    />
    <label for="dNegocio"
      ><i class="fa-solid fa-signature"></i> Descripción del Negocio</label
    >
    <ErrorMessage class="text-danger" name="dNegocio" />
  </div>
  <div class="mb-3 mt-3 form-input">
    <legend>Actividad Económica.</legend>
    <Field
      class="form-select"
      :class="inputClassObject('aEconomica')"
      as="select"
      id="aEconomica"
      name="aEconomica"
      :rules="aEconomicaRules"
      v-model="aEconomica"
    >
      <option disabled value="">Elija una Actividad</option>
      <option v-for="ae in aeconomica" :value="ae">{{ ae }}</option>
    </Field>
    <ErrorMessage class="text-danger" name="aEconomica" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('dirNegocio')"
      type="text"
      maxlength="100"
      id="dirNegocio"
      name="dirNegocio"
      :rules="dirNegocioRules"
      v-model.trim="dirNegocio"
      placeholder="Dirección del negocio"
    />
    <label for="dirNegocio"
      ><i class="fa-solid fa-signature"></i> Dirección del Negocio</label
    >
    <ErrorMessage class="text-danger" name="dirNegocio" />
  </div>
  <div class="mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('departn')"
      as="select"
      id="departn"
      name="departn"
      :rules="departnRules"
      v-model="departn"
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
    <ErrorMessage class="text-danger" name="departn" />
  </div>
  <div class="mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('municipion')"
      as="select"
      id="municipion"
      name="municipion"
      :rules="municipionRules"
      v-model="municipion"
      @change="onChangeMunicipio"
    >
      <option disabled value="">Elija un Municipio</option>
      <option v-for="(muni, index) in options" :key="index" :value="muni.value">
        {{ muni.text }}
      </option>
    </Field>
    <ErrorMessage class="text-danger" name="municipion" />
  </div>
  <div class="mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('comunidadn')"
      as="select"
      id="comunidadn"
      name="comunidadn"
      :rules="comunidadnRules"
      v-model="comunidadn"
    >
      <option disabled value="">Elija una Comunidad</option>
      <option v-for="(c, index) in cOptions" :key="index" :value="c.value">
        {{ c.text }}
      </option>
    </Field>
    <ErrorMessage class="text-danger" name="comunidadn" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('bDirecto')"
      type="number"
      id="bDirecto"
      name="bDirecto"
      :rules="bDirectoRules"
      v-model="bDirecto"
      placeholder="Descripción del negocio"
    />
    <label for="bDirecto"
      ><i class="fa-solid fa-signature"></i> Beneficiarios Directos</label
    >
    <ErrorMessage class="text-danger" name="bDirecto" />
  </div>

  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('fOperaciones')"
      type="date"
      id="fOperaciones"
      name="fOperaciones"
      :rules="fOperacionesRules"
      v-model="fOperaciones"
    />
    <label for="eGenerado"
      ><i class="fa-solid fa-calendar-days"></i> Fecha Inició/Inicará
      Operaciones</label
    >
    <ErrorMessage class="text-danger" name="bdirecto" />
  </div>
  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('eGenerado')"
      type="number"
      id="eGenerado"
      name="eGenerado"
      :rules="eGeneradoRules"
      v-model="eGenerado"
      placeholder="Descripción del negocio"
    />
    <label for="eGenerado"
      ><i class="fa-solid fa-signature"></i> Empleados Generados</label
    >
    <ErrorMessage class="text-danger" name="bdirecto" />
  </div>
  <div class="step-title">Datos del Préstamo que Solicita.</div>

  <div class="form-floating mb-3 mt-3 form-input">
    <field
      class="text-uppercase form-control"
      :class="inputClassObject('mPrestamo')"
      type="text"
      id="mPrestamo"
      name="mPrestamo"
      :rules="mPrestamoRules"
      v-model.trim="mPrestamo"
      placeholder="Monto del prestamo"
    />
    <label for="mPrestamo"
      ><i class="fa-solid fa-money-bill-1"></i> Monto Del Préstamo</label
    >
    <ErrorMessage class="text-danger" name="mPrestamo" />
  </div>

  <div class="mb-3 mt-3 form-input">
    <label for="plazoPrestamo"> Plazo del Préstamo</label>
    <Field
      :class="inputClassObject('plazoPrestamo')"
      as="select"
      id="plazoPrestamo"
      name="plazoPrestamo"
      :rules="plazoPrestamoRules"
      v-model="plazoPrestamo"
      class="form-select"
    >
      <option disabled value="">Plazo del Préstamo</option>
      <option v-for="dp in dPrestamo" :value="dp">{{ dp }}</option>
    </Field>
    <ErrorMessage class="text-danger" name="otrarrss" />
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
      placeholder="Cuota Mensual que Puede Pagar"
    />
    <label for="cuotaPrestamo"
      ><i class="fa-solid fa-money-bill-1"></i> Cuota Mensual que Puede
      Pagar</label
    >
    <ErrorMessage class="text-danger" name="cuotaPrestamo" />
  </div>

  <div class="form-check form-input">
    <label for="iCrediticia" class="form-check-label"
      >Autorización para Consultar Información Crediticia.</label
    >
    <Field
      :class="inputClassObject('iCrediticia')"
      class="form-check-input"
      type="checkbox"
      value="SI"
      id="iCrediticia"
      name="iCrediticia"
      :rules="iCrediticiaRules"
      v-model="iCrediticia"
      aria-label="Marcar la casilla aceptar"
    />
    <ErrorMessage class="input-error-msg" name="iCrediticia" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import {
  Departamento,
  Municipios,
  Comarcas,
  DatosPrestamo,
  aeconomica,
} from "../../services/PameServices";

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
      aSolicitadoRules: yup.string().required("Debe escoger una opción"),
      dNegocioRules: yup
        .string()
        .max(100, "Maximo de caracteres 100")
        .trim()
        .required("Descripción del negocio es requerido."),
      aEconomicaRules: yup.string().required("Actividad Economica requerido."),
      dirNegocioRules: yup
        .string()
        .trim()
        .max(100, "maximo de caracteres 100")
        .required("Direccción del negocio es requerido."),
      mPrestamoRules: yup.string().required("Monto del prestamo requerido."),
      departnRules: yup.string().required("Debe escojer un departamento."),
      municipionRules: yup
        .string()
        .trim()
        .required("Debe escojer un Municipio."),
      comunidadnRules: yup
        .string()
        .trim()
        .required("Debe escojer una comunidad."),
      bDirectoRules: yup
        .number()
        .min(0, "Minimo una persona 1")
        .max(10, "Maximo 10.")
        .required("debe especificar numeros de personas"),
      eGeneradoRules: yup
        .number()
        .min(0, "Minimo de Empleado Generado 0")
        .max(20, "Maximo Empleado Generado 20"),
      fOperacionesRules: yup.string().required("Defina una fecha."),
      plazoPrestamoRules: yup
        .string()
        .required("Plazo del prestamo es requerido."),
      cuotaPrestamoRules: yup
        .string()
        .required("Definir una cuota, es requerido."),
      iCrediticiaRules: yup.string().required("Debe marcar la casilla"),
      departamento: Departamento,
      mp: Municipios,
      comarcas: Comarcas,
      dPrestamo: DatosPrestamo,
      aeconomica: aeconomica,
    };
  },
  computed: {
    aSolicitado: {
      get() {
        return this.$store.state.user.aSolicitado;
      },
      set(value) {
        this.$store.commit("updateAsolicitado", value.toUpperCase());
      },
    },
    dNegocio: {
      get() {
        return this.$store.state.user.dNegocio;
      },
      set(value) {
        this.$store.commit("updateDnegocio", value.toUpperCase());
      },
    },
    aEconomica: {
      get() {
        return this.$store.state.user.aEconomica;
      },
      set(value) {
        this.$store.commit("updateAeconomica", value.toUpperCase());
      },
    },
    dirNegocio: {
      get() {
        return this.$store.state.user.dirNegocio;
      },
      set(value) {
        this.$store.commit("updateDirNegocio", value.toUpperCase());
      },
    },
    departn: {
      get() {
        return this.$store.state.user.departn;
      },
      set(value) {
        this.$store.commit("updateDepartN", value);
      },
    },
    municipion: {
      get() {
        return this.$store.state.user.municipion;
      },
      set(value) {
        this.$store.commit("updateMunicipioN", value);
      },
    },
    bDirecto: {
      get() {
        return this.$store.state.user.bDirecto;
      },
      set(value) {
        this.$store.commit("updateBdirecto", value);
      },
    },
    eGenerado: {
      get() {
        return this.$store.state.user.eGenerado;
      },
      set(value) {
        this.$store.commit("updateEgenerado", value);
      },
    },
    fOperaciones: {
      get() {
        return this.$store.state.user.fOperaciones;
      },
      set(value) {
        this.$store.commit("updateFoperaciones", value);
      },
    },
    comunidadn: {
      get() {
        return this.$store.state.user.comunidadn;
      },
      set(value) {
        this.$store.commit("updateComunidadN", value);
      },
    },
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
    options() {
      let option = "";
      switch (this.departn) {
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
      switch (this.municipion) {
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

<style scoped>
select span {
  font-family: "FontAwesome";
  background-color: red;
}
</style>
