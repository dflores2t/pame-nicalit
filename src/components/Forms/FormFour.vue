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
          <label for="serie"
            ><i class="fa-solid fa-signature"></i> Serie/Chasis</label
          >
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            type="text"
            maxlength="10"
            id="nplaca"
            name="nplaca"
            v-model.trim="gPrendariaInput.nplaca"
            placeholder="Número de placa"
          />
          <label for="nplaca"
            ><i class="fas fa-car-side"></i> Número Placa</label
          >
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
            name="auso"
            min="1"
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
            name="vcompra"
            min="1"
            v-model.trim="gPrendariaInput.vcompra"
            placeholder="Valor de Compra"
          />
          <label for="vcompra"
            ><i class="fa-solid fa-signature"></i> Valor De Compra</label
          >
        </div>
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
      <label class="d-block">Descripción: {{ articulo.description }}</label>
      <label class="d-block">Marca: {{ articulo.brand }}</label>
      <label class="d-block">Modelo: {{ articulo.model }}</label>
      <label class="d-block">Serie/Chasis: {{ articulo.serie }}</label>
      <label class="d-block">N.Placa: {{ articulo.nplaca }}</label>
      <label class="d-block">Color: {{ articulo.color }}</label>
      <label class="d-block">Años Uso: {{ articulo.auso }}</label>
      <label class="d-block"
        >Valor Compra: {{ convertMoney(articulo.vcompra) }}</label
      >
    </fieldset>
  </div>
  <fieldset class="border mt-1 text-end" v-if="Total != ''">
    <label class="fs-6 d-block">Total: {{ convertMoney(Total) }}</label>
  </fieldset>
  <div class="mb-3">
    <Field
      type="hidden"
      id="items"
      name="items"
      :class="inputClassObject('items')"
      :rules="gPrendariaRules"
      v-model="items"
    />
    <ErrorMessage class="text-danger" name="items" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { money } from "../../services/PameServices";

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
      gPrendariaRules: yup
        .number()
        .moreThan(1, "Debe Agregar al menos un Articulo"),
      gPrendariaInput: [],
      gPrendaria: this.$store.state.user.gprendaria,
      costoTotal: 0,
      items: 0,
    };
  },
  computed: {
    Total() {
      this.costoTotal = this.gPrendaria.reduce(
        (acc, cont) => acc + parseFloat(cont.vcompra),
        0
      );
      this.$store.commit(
        "updateGtprendaria",
        parseFloat(this.costoTotal).toFixed(2)
      );
      return this.costoTotal;
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    convertMoney(value) {
      return money(value);
    },
    addRows() {
      this.items += Object.keys(this.gPrendariaInput).length; //determina cuantas propiedads tienen valores que no son null, > 1 es valida
      this.$store.commit("addGprendaria", {
        description:
          this.gPrendariaInput.description === undefined
            ? "--"
            : this.gPrendariaInput.description.toUpperCase(),
        model:
          this.gPrendariaInput.model === undefined
            ? "--"
            : this.gPrendariaInput.model.toUpperCase(),
        color:
          this.gPrendariaInput.color === undefined
            ? "--"
            : this.gPrendariaInput.color.toUpperCase(),
        serie:
          this.gPrendariaInput.serie === undefined
            ? "--"
            : this.gPrendariaInput.serie.toUpperCase(),
        nplaca:
          this.gPrendariaInput.nplaca === undefined
            ? "--"
            : this.gPrendariaInput.nplaca.toUpperCase(),
        brand:
          this.gPrendariaInput.brand === undefined
            ? "--"
            : this.gPrendariaInput.brand.toUpperCase(),
        auso:
          this.gPrendariaInput.auso === undefined
            ? "--"
            : this.gPrendariaInput.auso,
        vcompra:
          this.gPrendariaInput.vcompra === undefined
            ? "0.00"
            : this.gPrendariaInput.vcompra,
      });
      this.gPrendariaInput = [];
    },
    deleteRow(index) {
      this.$store.commit("deleteGprendaria", index);
      this.costoTotal = 0;
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
