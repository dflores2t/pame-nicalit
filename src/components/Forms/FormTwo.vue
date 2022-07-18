<template>
  <div class="step-title">Datos del Negocio</div>

  <div class="form-input">
    <label for="bName">Descripcion del Negocio</label>
    <Field class="text-uppercase"
      :class="inputClassObject('email')"
      type="text"
      id="bName"
      name="bName"
      :rules="bNameRules"
      v-model="bName"
      autofocus
    />
    <ErrorMessage class="input-error-msg" name="bName" />
  </div>

  <div class="form-input">
    <Field
      :class="inputClassObject('terms')"
      type="checkbox"
      id="terms"
      name="terms"
      :rules="termsRules"
      :value="true"
      v-model="isAgreeToTerms"
    />
    <label for="terms">Acepto los terminos y condiciones</label>
    <ErrorMessage class="input-error-msg" name="terms" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from 'vee-validate'
import * as yup from 'yup'

export default {
  name: 'FormTwo',
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
      bNameRules: yup
        .string()
        .required(),
      termsRules: yup
        .boolean()
        .required('Deberia aceptar los terminos y condiciones'),
    }
  },
  computed: {
    bName: {
      get() {
        return this.$store.state.user.bName
      },
      set(value) {
        this.$store.commit('updatebName', value)
      },
    },
    isAgreeToTerms: {
      get() {
        return this.$store.state.user.isAgreeToTerms
      },
      set(value) {
        this.$store.commit('updateIsAgreeToTerms', value)
      },
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        'input-control': true,
        'has-error': this.errors.hasOwnProperty(name),
      }
    },
  },
}
</script>

<style></style>