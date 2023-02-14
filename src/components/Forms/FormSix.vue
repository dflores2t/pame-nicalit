<template>
  <div class="step-title">Identificación Del Fiador</div>
  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageFrontGuarantor"
        alt="Back"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: ProgressIdCardFrontGuarantor + '%' }"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="input-group mb-3 mt-1">
        <field
          tabindex="1"
          class="form-control"
          :class="inputClassObject('idCardFrontGuarantor')"
          type="file"
          id="idCardFrontGuarantor"
          accept="image/png, image/jpeg"
          name="idCardFrontGuarantor"
          :rules="ImageValidated"
          @change="handleImageFrontGuarantor"
        />
        <label class="input-group-text" for="idCardFrontGuarantor"
          ><i class="fa-regular fa-id-card"></i
        ></label>
        <ErrorMessage
          class="text-danger text-center"
          name="idCardFrontGuarantor"
        />
      </div>
    </div>
  </div>
  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageBackGuarantor"
        alt="Back"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="progress">
        <div
          class="progress-bar bg-success"
          role="progressbar"
          aria-label="Success example"
          :style="{ width: ProgressIdCardBackGuarantor + '%' }"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div class="input-group mb-3 mt-1">
        <field
          tabindex="2"
          class="form-control"
          :class="inputClassObject('idCardBackGuarantor')"
          type="file"
          id="idCardBackGuarantor"
          accept="image/png, image/jpeg"
          name="idCardBackGuarantor"
          :rules="ImageValidated"
          @change="handleImageBackGuarantor"
        />
        <label class="input-group-text" for="idCardBackGuarantor"
          ><i class="fa-regular fa-id-card"></i
        ></label>
        <ErrorMessage
          class="text-danger text-center"
          name="idCardBackGuarantor"
        />
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
  name: "FormSix",
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
      imageFrontGuarantor: front,
      imageBackGuarantor: back,
      ImageValidated: yup
        .mixed()
        .test("required", "Foto de su Identificación", (value) => {
          return value != null;
        }),
      ImageValidatedBack: yup
        .array()
        .min(1, "Foto frontal de su Identificación.")
        .required("Foto del reverso de su Identificación."),
    };
  },
  computed: {
    idCardFrontGuarantor: {
      get() {
        return this.$store.state.user.IdCardFrontGuarantor;
      },
      set(value) {
        this.$store.commit("updateIdCardFrontGuarantor", value);
      },
    },
    idCardBackGuarantor: {
      get() {
        return this.$store.state.user.IdCardBackGuarantor;
      },
      set(value) {
        return this.$store.commit("updateIdCardBackGuarantor", value);
      },
    },
    ProgressIdCardFrontGuarantor() {
      return this.$store.state.user.idCardFrontGuarantorProgressStatus;
    },
    ProgressIdCardBackGuarantor() {
      return this.$store.state.user.idCardBackGuarantorProgressStatus;
    },
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    async handleImageFrontGuarantor(e) {
      const res = await PameServices.uploadId(e.target.id, e.target.files[0]);
      this.imageFrontGuarantor = URL.createObjectURL(res); //res.data.secure_url;
      this.idCardFrontGuarantor = await PameServices.getBase64ImageFromURL(
        this.imageFrontGuarantor
      );
    },
    async handleImageBackGuarantor(e) {
      const res = await PameServices.uploadId(e.target.id, e.target.files[0]);
      this.imageBackGuarantor = URL.createObjectURL(res); // res.data.secure_url;
      this.idCardBackGuarantor = await PameServices.getBase64ImageFromURL(
        this.imageBackGuarantor
      );
    },
  },
};
</script>

<style scoped>
.container img {
  width: 350px;
  height: 200px;
  object-fit: cover;
}
</style>
