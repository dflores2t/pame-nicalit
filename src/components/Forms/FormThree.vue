<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <form>
    <div v-for="(product, index) in products">
      <fieldset>
        <legend>Datos del Producto:</legend>

        <div class="mb-3">
          <label for="txtDescription">Descripción Del Producto</label>
          <input
            type="text"
            class="form-control"
            v-model="product.description"
            id="txtDescription"
          />
        </div>

        <div class="mb-3">
          <label for="textUnidadMedida">Unidad Medida</label>
          <input
            type="text"
            class="form-control"
            v-model="product.unit"
            id="textUnidadMedida"
          />
        </div>

        <div class="mb-3">
          <label for="textCantidad">Cantidad</label>
          <input
            type="text"
            class="form-control"
            v-model="product.quantity"
            id="textCantidad"
          />
        </div>
        <div class="mb-3">
          <label for="textCostoUnitario">Costo Unitario</label>
          <input
            type="text"
            class="form-control"
            v-model="product.cu"
            id="textCostoUnitario"
          />
        </div>
        <div class="mb-3">
          <label for="textCostoTotal">Costo Total</label>
          <input
            type="text"
            class="form-control"
            v-model="product.ct"
            id="textCostoTotal"
          />
        </div>
        <a class="text-end d-block"
          ><i
            class="fa-solid fa-delete-left btn btn-danger"
            @click="deleteRow"
          ></i
        ></a>
      </fieldset>
    </div>
  </form>
  <div class="mb-3">
    <a class="btn btn-info" @click="addRows"
      >Agregar <i class="fa-solid fa-cart-plus"></i
    ></a>
  </div>
  <!-- <table class="table table-responsive table-striped table-bordered">
    <thead>
      <tr>
        <th>Descripcion</th>
        <th>Unidad Medida</th>
        <th>Cantidad</th>
        <th>Costo Unitario</th>
        <th>Costo Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(product, index) in products">
        <td>
          <input
            type="text"
            v-model="product.description"
            class="form-control"
          />
        </td>
        <td>
          <input type="text" v-model="product.unit" class="form-control" />
        </td>
        <td>
          <input type="text" v-model="product.quantity" class="form-control" />
        </td>
        <td><input type="text" v-model="product.cu" class="form-control" /></td>
        <td><input type="text" v-model="product.ct" class="form-control" /></td>
        <td><i class="fa-solid fa-delete-left" @click="deleteRow"></i></td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td><i class="fa-solid fa-cart-plus" @click="addRows"></i></td>
        <td></td>
        <td></td>
        <td>Total</td>
        <td>xxx</td>
      </tr>
    </tfoot>
  </table> -->
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
      products: [
        { description: "", unit: "", quantity: "", cu: "", ct: "" },
      ],
      productsRules: yup.object(),
      count: 1,
    };
  },
  computed: {
    productsList: {
      get() {
        return this.$store.state.products;
      },
      set(value) {
        console.log(value);
        this.$store.commit("updateProduct", value);
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
    addRows() {
      this.products.push({
        description: "",
        unit: "",
        quantity: "",
        cu: "",
        ct: "",
      });
    },
    deleteRow(index) {
      this.products.splice(index, 1);
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
