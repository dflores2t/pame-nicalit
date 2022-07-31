<template>
  <div class="step-title">PLAN DE INVERSION</div>

 
</template>

<script>
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
   
    };
  },
  computed: {
    
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
