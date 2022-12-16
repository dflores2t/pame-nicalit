<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageFront"
        alt="Front"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="progress">
        <progress
          id="progress"
          :value="Progress"
          max="100"
          style="width: 100%; margin: 10px 0"
        ></progress>
      </div>
      <div class="input-group mb-3 mt-1">
        <field
          class="form-control"
          :class="inputClassObject('idCardFront')"
          type="file"
          id="idCardFront"
          name="idCardFront"
          :rules="idCardFrontRules"
          @change="handleImageFront"
        />
        <label class="input-group-text" for="idCardFront"
          ><i class="fa-regular fa-id-card"></i
        ></label>
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageBack"
        alt="Back"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="progress">
        <progress
          id="progress"
          :value="Progress"
          max="100"
          style="width: 100%; margin: 10px 0"
        ></progress>
      </div>
      <div class="input-group mb-3 mt-1">
        <field
          class="form-control"
          :class="inputClassObject('idCardBack')"
          type="file"
          id="idCardBack"
          name="idCardBack"
          :rules="idCardBackRules"
          @change="handleImageBack"
        />
        <label class="input-group-text" for="idCardBack"
          ><i class="fa-regular fa-id-card"></i
        ></label>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import defaultImage from "../../assets/img/idcard.jpg";
import PameServices from "../../services/PameServices";
export default {
  name: "FormFive",
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
      imageFront: defaultImage,
      imageBack: defaultImage,
      idCardFrontRules: yup
        .string()
        .trim()
        .required("Debe subir la foto frontal de la identificacion"),
      idCardBackRules: yup
        .string()
        .trim(0)
        .required("Suba la foto del reverso de su identificación"),
    };
  },
  computed: {
    idCardFront: {
      get() {
        return this.$store.state.user.IdCardFront;
      },
      set(value) {
        this.$store.commit("updateIdCardFront", value);
      },
    },
    idCardBack: {
      get() {
        return this.$store.state.user.IdCardBack;
      },
      set(value) {
        this.$store.commit("updateIdCardBack", value);
      },
    },
    Progress() {
      return this.$store.state.user.progressStatus;
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    async handleImageFront(e) {
      const res = await PameServices.uploadId(e.target.files[0]);
      this.imageFront = res.data.secure_url;
      this.idCardFront = this.imageFront;
    },
    async handleImageBack(e) {
      const res = await PameServices.uploadId(e.target.files[0]);
      this.imageBack = res.data.secure_url;
      this.idCardBack = this.imageBack;
    },
  },
};
</script>

<style scoped></style>
