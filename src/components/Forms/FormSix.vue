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
    async handleImageFrontGuarantor(e) {
      this.imageFrontGuarantor = URL.createObjectURL(e.target.files[0]);
      this.idCardFrontGuarantor = await PameServices.getBase64ImageFromURL(
        this.imageFrontGuarantor
      );
    },
    async handleImageBackGuarantor(e) {
      this.imageBackGuarantor = URL.createObjectURL(e.target.files[0]);
      this.idCardBackGuarantor = await PameServices.getBase64ImageFromURL(
        this.imageBackGuarantor
      );
    },
  },
};
</script>

<style scoped></style>
