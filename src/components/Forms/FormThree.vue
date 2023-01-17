<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <form>
    <div>
      <fieldset>
        <legend>Datos del Producto:</legend>
        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="form-control"
            type="text"
            autofocus
            maxlength="100"
            id="txtDescription"
            name="txtDescription"
            v-model.trim="productsInput.description"
            placeholder="Descripcion del producto"
            @input="mayus"
          />
          <label for="txtDescription"
            ><i class="fa-solid fa-signature"></i> Descripción Del
            Producto</label
          >
        </div>
        <div class="input-group mb-3 form-input">
          <Field
            class="form-select"
            as="select"
            id="txtUnidadMedida"
            name="txtUnidadMedida"
            v-model="productsInput.unit"
          >
            <option disabled value="">Elija una Medida</option>
            <option v-for="un in unit" :value="un">
              {{ un }}
            </option>
          </Field>
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="form-control"
            type="number"
            id="txtCantidad"
            name="txtCantidad"
            min="1"
            value="0"
            v-model.trim="productsInput.quantity"
            placeholder="Cantidad"
          />
          <label for="txtCantidad"
            ><i class="fa-solid fa-signature"></i> Cantidad</label
          >
        </div>

        <div class="form-floating mb-3 mt-3 form-input">
          <field
            class="form-control"
            type="number"
            id="txtCostoUnitario"
            name="txtCostoUnitario"
            v-model.trim="productsInput.cu"
            placeholder="Costo Unitario"
          />
          <label for="txtCostoUnitario"
            ><i class="fa-solid fa-signature"></i> Costo Unitario</label
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
      <label class="fs-6 d-block"
        >Costo Unitario: {{ convertMoney(parseFloat(product.cu)) }}</label
      >
      <label class="fs-6 d-block"
        >Costo Total: {{ convertMoney(product.ct) }}</label
      >
    </fieldset>
  </div>
  <fieldset class="border mt-1 text-end" v-if="Total != ''">
    <label class="fs-6 d-block">Total: {{ Total }}</label>
  </fieldset>
  <Field
    type="hidden"
    id="products"
    name="products"
    :class="inputClassObject('txtDescription')"
    :rules="productsRules"
    v-model="products"
  />
  <ErrorMessage class="text-danger" name="products" />
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import { UnitM, money } from "../../services/PameServices";
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
      productsRules: yup.array().min(1, "Debe Agregar al menos un Producto."),
      productsInput: [],
      products: this.$store.state.user.products,
      costoTotal: 0,
      unit: UnitM,
    };
  },
  computed: {
    Total() {
      this.costoTotal = money(
        this.products.reduce((acc, cont) => acc + cont.ct, 0)
      );
      this.$store.commit("updateTproducts", this.costoTotal);
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
    mayus(value) {
      this.productsInput.description = value.target.value.toUpperCase();
    },
    convertMoney(value) {
      return money(value);
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
