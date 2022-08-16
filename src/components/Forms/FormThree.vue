<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <form>
    <div>
      <fieldset>
        <legend>Datos del Producto:</legend>
        <div class="mb-3">
          <label for="txtDescription">Descripción Del Producto</label>
          <input
            type="text"
            class="form-control"
            v-model="productsInput.description"
            id="txtDescription"
          />
        </div>
        <div class="mb-3">
          <label for="textUnidadMedida">Unidad Medida</label>
          <input
            type="text"
            class="form-control"
            v-model="productsInput.unit"
            id="textUnidadMedida"
          />
        </div>
        <div class="mb-3">
          <label for="textCantidad">Cantidad</label>
          <input
            type="text"
            class="form-control"
            v-model="productsInput.quantity"
            id="textCantidad"
          />
        </div>
        <div class="mb-3">
          <label for="textCostoUnitario">Costo Unitario</label>
          <input
            type="text"
            class="form-control"
            v-model="productsInput.cu"
            id="textCostoUnitario"
          />
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
          @click="deleteRow(prouct)"
        ></i>
      </legend>
      <label class="fs-6 d-block">Descripcion: {{ product.description }}</label>
      <label class="fs-6 d-block">U Medida: {{ product.unit }}</label>
      <label class="fs-6 d-block">Cantidad: {{ product.quantity }}</label>
      <label class="fs-6 d-block">Costo Unitario: {{ product.cu }}</label>
      <label class="fs-6 d-block">Costo Total: {{ product.ct }}</label>
    </fieldset>
  </div>
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
      productsInput: [],
      products: this.$store.state.user.products,
    };
  },
  computed: {
    
  }
  ,
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
