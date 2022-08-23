<template>
  <div class="step-title">Datos del Negocio</div>
  <fieldset>
    <legend>Tipo de Apoyo Solicitado.</legend>
    <div class="form-check form-input">
      <label for="iNegocio" class="form-check-label">Inicio de Nogocio:</label>
      <input
        :class="inputClassObject('aSolicitado')"
        class="form-check-input"
        type="radio"
        id="iNegocio"
        name="aSolicitado"
        value="Inicio De Negocio"
        :rules="aSolicitadoRules"
        v-model="aSolicitado"
        aria-label="Marcar la casilla de whatsapp"
      />
    </div>
    <div class="form-check form-input">
      <label for="cNegocio" class="form-check-label"
        >Continuidad del Nogocio:</label
      >
      <input
        :class="inputClassObject('aSolicitado')"
        class="form-check-input"
        type="radio"
        id="cNegocio"
        name="aSolicitado"
        value="Continuidad Del Negocio"
        :rules="aSolicitadoRules"
        v-model="aSolicitado"
        aria-label="Marcar la casilla de whatsapp"
      />
    </div>
    <ErrorMessage class="input-error-msg" name="iCrediticia" />
  </fieldset>
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
      autofocus
      placeholder="Descripción del negocio"
    />
    <label for="dNegocio"
      ><i class="fa-solid fa-signature"></i> Descripción del Negocio</label
    >
    <ErrorMessage class="text-danger" name="dNegocio" />
  </div>
  <fieldset>
    <legend>Actividad Económica.</legend>
    <div class="form-check form-input">
      <label for="comercio" class="form-check-label">Comercio:</label>
      <input
        :class="inputClassObject('aEconomica')"
        class="form-check-input"
        type="radio"
        id="comercio"
        name="aEconomica"
        value="Comercio"
        :rules="aEconomicaRules"
        v-model="aEconomica"
        aria-label="Marcar la casilla de Comercio"
      />
    </div>
    <div class="form-check form-input">
      <label for="servicio" class="form-check-label">Servicio:</label>
      <input
        :class="inputClassObject('aEconomica')"
        class="form-check-input"
        type="radio"
        id="servicio"
        name="aEconomica"
        value="Servicio"
        :rules="aEconomicaRules"
        v-model="aEconomica"
        aria-label="Marcar la casilla servicio"
      />
    </div>
    <div class="form-check form-input">
      <label for="pIndustria" class="form-check-label">Peq. Industria:</label>
      <input
        :class="inputClassObject('aEconomica')"
        class="form-check-input"
        type="radio"
        id="pIndustria"
        name="aEconomica"
        value="Peq. Industria"
        :rules="aEconomicaRules"
        v-model="aEconomica"
        aria-label="Marcar la casilla Pequeña Industria"
      />
    </div>
    <div class="form-check form-input">
      <label for="agropecuario" class="form-check-label">Agropecuario:</label>
      <input
        :class="inputClassObject('aEconomica')"
        class="form-check-input"
        type="radio"
        id="agropecuario"
        name="aEconomica"
        value="Agropecuario"
        :rules="aEconomicaRules"
        v-model="aEconomica"
        aria-label="Marcar la casilla Agropecuario"
      />
    </div>
    <div class="form-check form-input">
      <label for="pesca" class="form-check-label">Pesca:</label>
      <input
        :class="inputClassObject('aEconomica')"
        class="form-check-input"
        type="radio"
        id="pesca"
        name="aEconomica"
        value="Pesca"
        :rules="aEconomicaRules"
        v-model="aEconomica"
        aria-label="Marcar la casilla pesca"
      />
    </div>
    <ErrorMessage class="input-error-msg" name="" />
  </fieldset>
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
      autofocus
      placeholder="Deirección del negocio"
    />
    <label for="dirNegocio"
      ><i class="fa-solid fa-signature"></i> Dirección del Negocio</label
    >
    <ErrorMessage class="text-danger" name="dirNegocio" />
  </div>
  <div class="input-group mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('departn')"
      as="select"
      id="departn"
      name="departn"
      :rules="departnRules"
      v-model="departn"
    >
      <option disabled value="">Elija un Departamento</option>
      <option>Managua</option>
      <option>Leon</option>
      <option>Chinandega</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="departn" />
  <div class="input-group mb-3 form-input">
    <Field
      class="form-select"
      :class="inputClassObject('municipion')"
      as="select"
      id="municipion"
      name="municipion"
      :rules="municipionRules"
      v-model="municipion"
    >
      <option disabled value="">Elija un Municipio</option>
      <option>San Rafael</option>
      <option>San 1</option>
      <option>San 2</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="municipion" />
  <div class="input-group mb-3 form-input">
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
      <option>El Salto</option>
      <option>Las Manos</option>
      <option>Los Chils</option>
    </Field>
  </div>
  <ErrorMessage class="text-danger" name="comunidadn" />
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
    <ErrorMessage class="text-danger" name="bdirecto" />
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
      autofocus
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
      <option>12 Meses</option>
      <option>18 Meses</option>
      <option>24 Meses</option>
      <option>36 Meses</option>
      <option>48 meses</option>
      <option>60 Meses</option>
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
      autofocus
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
    <input
      :class="inputClassObject('iCrediticia')"
      class="form-check-input"
      type="checkbox"
      id="iCrediticia"
      name="iCrediticia"
      :rules="iCrediticiaRules"
      v-model="iCrediticia"
      aria-label="Marcar la casilla de whatsapp"
    />
    <ErrorMessage class="input-error-msg" name="iCrediticia" />
  </div>
</template>

<script>
import { get, set } from "lodash";
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
      aSolicitadoRules: yup.string().notRequired(),
      dNegocioRules: yup
        .string()
        .trim()
        .length(100, "Maximo de caracteres 100")
        .notRequired(),
      aEconomicaRules: yup.string().notRequired(),
      mPrestamoRules: yup.string().notRequired(),
      dirNegocioRules: yup
        .string()
        .trim()
        .length(100, "maximo de caracteres 100")
        .notRequired(),
      departnRules: yup.string().notRequired(),
      // .notRequired("Debe escojer un departamento"),
      municipionRules: yup.string().trim().notRequired(),
      // .notRequired("Debe escojer un Municipio"),
      comunidadnRules: yup.string().trim().notRequired(),
      // .notRequired("Debe escojer una comunidad"),
      bDirectoRules: yup.string().notRequired(),
      eGeneradoRules: yup.string().notRequired(),
      fOperacionesRules: yup.string().notRequired(),
      plazoPrestamoRules: yup.string().notRequired(),
      cuotaPrestamoRules: yup.string().notRequired(),
      iCrediticiaRules: yup.boolean().notRequired(),
    };
  },
  computed: {
    aSolicitado: {
      get() {
        return this.$store.state.user.aSolicitado;
      },
      set(value) {
        this.$store.commit("updateAsolicitado", value);
      },
    },
    dNegocio: {
      get() {
        return this.$store.state.user.dNegocio;
      },
      set(value) {
        this.$store.commit("updateDnegocio", value);
      },
    },
    aEconomica: {
      get() {
        return this.$store.state.user.aEconomica;
      },
      set(value) {
        this.$store.commit("updateAeconomica", value);
      },
    },
    dirNegocio: {
      get() {
        return this.$store.state.user.dirNegocio;
      },
      set(value) {
        this.$store.commit("updateDirNegocio", value);
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

<style scoped>
select span {
  font-family: "FontAwesome";
  background-color: red;
}
</style>