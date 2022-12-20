<template>
  <div class="step-title">GARANTIAS MOBILIRIAS</div>

  <form>
    <div>
      <fieldset>
        <legend>Datos De Los Articulos</legend>
        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="100"
            id="description"
            name="description"
            v-model.trim="gPrendariaInput.description"
            placeholder="Descripcion del articulo"
          />
          <label for="description"
            ><i class="fa-solid fa-signature"></i> Descripción</label
          >
        </div>
        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="30"
            id="brand"
            name="brand"
            v-model.trim="gPrendariaInput.brand"
            placeholder="Marca del articulo"
          />
          <label for="brand"><i class="fa-solid fa-signature"></i> Marca</label>
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="30"
            id="model"
            name="model"
            v-model.trim="gPrendariaInput.model"
            placeholder="Modelo del articulo"
          />
          <label for="model"
            ><i class="fa-solid fa-signature"></i> Modelo</label
          >
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="30"
            id="serie"
            name="serie"
            v-model.trim="gPrendariaInput.serie"
            placeholder="Serie del articulo"
          />
          <label for="serie"><i class="fa-solid fa-signature"></i> Serie</label>
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="20"
            id="color"
            name="color"
            v-model.trim="gPrendariaInput.color"
            placeholder="Color del articulo"
          />
          <label for="color"><i class="fa-solid fa-signature"></i> Color</label>
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="number"
            id="auso"
            name="auso" min="1"
            v-model.trim="gPrendariaInput.auso"
            placeholder="Años de uso del articulo"
          />
          <label for="auso"
            ><i class="fa-solid fa-signature"></i> Años de Uso</label
          >
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="number"
            id="vcompra"
            name="vcompra" min="1"
            v-model.trim="gPrendariaInput.vcompra"
            placeholder="Valor de Compra"
          />
          <label for="vcompra"
            ><i class="fa-solid fa-signature"></i> Valor De Compra</label
          >
        </div>

        <!-- <div class="form-floating mb-3 mt-3 form-input d-none">
          <field
            class="text-uppercase form-control"
            :class="inputClassObject('vactual')"
            type="number"
            id="vactual"
            name="vactual"
            v-model.trim="gPrendariaInput.vactual"
            placeholder="Valor de Actual"
          />
          <label for="vactual"
            ><i class="fa-solid fa-signature"></i> Valor Actual</label
          >
          <ErrorMessage class="text-danger" name="vactual" />
        </div> -->
      </fieldset>
    </div>
    <div class="mb-3">
      <a class="btn btn-info" @click="addRows"
        >Agregar <i class="fa-solid fa-cart-plus"></i
      ></a>
    </div>
  </form>
  <div
    v-for="(articulo, index) in gPrendaria"
    v-if="gPrendaria.length > 0"
    :key="index"
  >
    <fieldset class="border mt-1">
      <legend class="fs-5 d-flex justify-content-between align-items-center">
        Producto: {{ index + 1 }}
        <i
          class="fa-solid fa-delete-left text-end btn btn-danger btn-sm"
          @click="deleteRow(index)"
        ></i>
      </legend>
      <label class="fs-6 d-block"
        >Descripción: {{ articulo.description }}</label
      >
      <label class="fs-6 d-block">Marca: {{ articulo.brand }}</label>
      <label class="fs-6 d-block">Modelo: {{ articulo.model }}</label>
      <label class="fs-6 d-block">Serie: {{ articulo.serie }}</label>
      <label class="fs-6 d-block">Color: {{ articulo.color }}</label>
      <label class="fs-6 d-block">Años Uso: {{ articulo.auso }}</label>
      <label class="fs-6 d-block">Valor Compra: {{ articulo.vcompra }}</label>
    </fieldset>
  </div>
  <div class="mb-3">
    <Field
      type="hidden"
      id="gPrendaria"
      name="gPrendaria"
      :class="inputClassObject('description')"
      :rules="gPrendariaRules"
      v-model="gPrendaria"
    />
    <ErrorMessage class="text-danger" name="gPrendaria" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "FormFour",
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
      gPrendariaRules: yup.array().min(1, "Debe Agregar al menos un Articulo."),
      gPrendariaInput: [],
      gPrendaria: this.$store.state.user.gprendaria,
    };
  },
  computed: {},
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    addRows() {
      this.$store.commit("addGprendaria", this.gPrendariaInput);
      this.gPrendariaInput.description = "";
      this.gPrendariaInput.brand = "";
      this.gPrendariaInput.model = "";
      this.gPrendariaInput.serie = "";
      this.gPrendariaInput.color = "";
      this.gPrendariaInput.auso = "";
      this.gPrendariaInput.vcompra = "";
      this.gPrendariaInput.vactual = "";
    },
    deleteRow(index) {
      this.$store.commit("deleteGprendaria", index);
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
