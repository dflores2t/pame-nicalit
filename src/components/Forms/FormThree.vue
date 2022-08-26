<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <form>
    <div>
      <fieldset>
        <legend>Datos del Producto:</legend>
        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            :class="inputClassObject('txtDescription')"
            type="text"
            autofocus
            maxlength="100"
            id="txtDescription"
            name="txtDescription"
            :rules="txtDescriptionRules"
            v-model.trim="productsInput.description"
            placeholder="Descripcion del producto"
          />
          <label for="txtDescription"
            ><i class="fa-solid fa-signature"></i> Descripción Del
            Producto</label
          >
          <ErrorMessage class="text-danger" name="txtDescription" />
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            :class="inputClassObject('txtUnidadMedida')"
            type="text"
            maxlength="20"
            id="txtUnidadMedida"
            name="txtUniadMedida"
            :rules="txtUnidadMedidaRules"
            v-model.trim="productsInput.unit"
            placeholder="Uniad de Medida"
          />
          <label for="txtUnidadMedida"
            ><i class="fa-solid fa-signature"></i> Unidad Medida</label
          >
          <ErrorMessage class="text-danger" name="txtUnidadMedida" />
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            :class="inputClassObject('txtCantidad')"
            type="number"
            id="txtCantidad"
            name="txtCantidad"
            :rules="txtCantidadRules"
            v-model.trim="productsInput.quantity"
            placeholder="Cantidad"
          />
          <label for="txtCantidad"
            ><i class="fa-solid fa-signature"></i> Cantidad</label
          >
          <ErrorMessage class="text-danger" name="txtCantidad" />
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="text-uppercase form-control"
            :class="inputClassObject('txtCostoUnitario')"
            type="number"
            id="txtCostoUnitario"
            name="txtCostoUnitario"
            :rules="txtCostoUnitarioRules"
            v-model.trim="productsInput.cu"
            placeholder="Costo Unitario"
          />
          <label for="txtCostoUnitario"
            ><i class="fa-solid fa-signature"></i> Costo Unitario</label
          >
          <ErrorMessage class="text-danger" name="txtCostoUnitario" />
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
    v-for="(product, index) in products"
    v-if="products.length > 0"
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
      <label class="fs-6 d-block">Descripcion: {{ product.description }}</label>
      <label class="fs-6 d-block">U Medida: {{ product.unit }}</label>
      <label class="fs-6 d-block">Cantidad: {{ product.quantity }}</label>
      <label class="fs-6 d-block">Costo Unitario: {{ product.cu }}</label>
      <label class="fs-6 d-block">Costo Total: {{ product.ct }}</label>
    </fieldset>
  </div>
  <fieldset class="border mt-1 text-end" v-if="Total > 0">
    <label class="fs-6 d-block">Total: {{ Total }}</label>
  </fieldset>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
export default {
  name: "FormThree",
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
      txtDescriptionRules: yup
        .string()
        .trim()
        .max(100, "100 maximo de caracteres")
        .notRequired(),
      txtUnidadMedidaRules: yup
        .string()
        .trim()
        .max(20, "20 caracteres maximos")
        .notRequired(),
      txtCantidadRules: yup
        .string()
        .trim()
        .max(10, "Maximo 10 digitos")
        .notRequired(),
      txtCostoUnitarioRules: yup
        .string()
        .trim()
        .max(10, "Maximo 10 digitos")
        .notRequired(),
      productsInput: [],
      products: this.$store.state.user.products,
      costoTotal: 0,
    };
  },
  computed: {
    Total() {
      this.costoTotal = this.products.reduce((acc, cont) => acc + cont.ct, 0);
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
    addRows() {
      this.$store.commit("updateProducts", this.productsInput);
      this.productsInput.description = "";
      this.productsInput.unit = "";
      this.productsInput.quantity = "";
      this.productsInput.cu = "";
      this.productsInput.ct = "";
    },
    deleteRow(index) {
      this.$store.commit("deleteProducts", index);
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
