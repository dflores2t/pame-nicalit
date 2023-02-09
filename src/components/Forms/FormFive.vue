<template>
  <div class="step-title">Identificación Del Solicitante</div>

  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageFront"
        alt="Front"
        id="imageFront"
        name="imageFront"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: ProgressIdCardFront + '%' }"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>

      <div class="input-group mb-3 mt-1">
        <Field tabindex="1"
          class="form-control"
          type="file"
          id="idCardFront"
          accept="image/png, image/jpeg, image/jpg"
          name="idCardFront"
          :rules="ImageValidated"
          :class="inputClassObject('idCardFront')"
          @change="handleImageFront"
        />
        <label class="input-group-text" for="idCardFront"
          ><i class="fa-regular fa-id-card"></i
        ></label>
        <ErrorMessage class="text-danger text-center" name="idCardFront" />
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
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: ProgressIdCardBack + '%' }"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="input-group mb-3 mt-1">
        <field tabindex="2"
          class="form-control"
          :class="inputClassObject('idCardBack')"
          type="file"
          id="idCardBack"
          accept="image/png, image/jpeg"
          name="idCardBack"
          :rules="ImageValidated"
          @change="handleImageBack"
        />
        <label class="input-group-text" for="idCardBack"
          ><i class="fa-regular fa-id-card"></i
        ></label>
        <ErrorMessage class="text-danger text-center" name="idCardBack" />
      </div>
    </div>
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import front from "../../assets/img/front.png";
import back from "../../assets/img/back.png";
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
      imageFront: front,
      imageBack: back,
      ImageValidated: yup
        .mixed()
        .test("required", "Foto de su Identificación", (value) => {
          return value != null;
        }),
      ImageValidatedBack: yup
        .array()
        .min(1, "Foto del reverso de su Identificación.")
        .required("Foto del reverso de su Identificación."),
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
    ProgressIdCardFront() {
      return this.$store.state.user.idCardFrontProgressStatus;
    },
    ProgressIdCardBack() {
      return this.$store.state.user.idCardBackProgressStatus;
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
      const res = await PameServices.uploadId(e.target.id, e.target.files[0]);
      this.imageFront = res.data.secure_url;
      this.idCardFront = await PameServices.getBase64ImageFromURL(
        this.imageFront
      );
    },
    async handleImageBack(e) {
      const res = await PameServices.uploadId(e.target.id, e.target.files[0]);
      this.imageBack = res.data.secure_url;
      this.idCardBack = await PameServices.getBase64ImageFromURL(
        this.imageBack
      );
    },
  },
};
</script>

<style scoped></style>
