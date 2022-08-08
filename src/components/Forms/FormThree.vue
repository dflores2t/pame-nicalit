<template>
  <div class="step-title">PLAN DE INVERSION</div>
  <table class="table table-responsive table-striped table-bordered">
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
  </table>
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
      products: [{ description: "", unit: "", quantity: "", cu: "", ct: "" }],
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
