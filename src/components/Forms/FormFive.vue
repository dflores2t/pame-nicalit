<template>
  <div class="step-title">Identificación Solicitante</div>

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
        <progress
          id="progress"
          :value="Progress"
          max="100"
          style="width: 100%; margin: 10px 0"
        ></progress>
      </div>
      <div class="input-group mb-3 mt-1">
        <Field
          class="form-control"
          type="file"
          id="idCardFront"
          name="idCardFront"
          :rules="ImageValidatedFront"
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
          :rules="ImageValidatedBack"
          @change="handleImageBack"
        />
        <label class="input-group-text" for="idCardBack"
          ><i class="fa-regular fa-id-card"></i
        ></label>
        <ErrorMessage class="text-danger text-center" name="idCardBack" />
      </div>
    </div>
  </div>
  <div class="step-title">Identificación Fiador</div>
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
          name="idCardFrontGuarantor"
          :rules="ImageValidatedFront"
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
          name="idCardBackGuarantor"
          :rules="ImageValidatedBack"
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
      imageFrontGuarantor: front,
      imageBackGuarantor: back,
      ImageValidatedFront: yup
        .array()
        .min(1, "Foto frontal de su Identificación.")
        .required("Foto frontal de su Identificación."),
      ImageValidatedBack: yup
        .array()
        .min(1, "Foto frontal de su Identificación.")
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
    async handleImageFrontGuarantor(e) {
      const res = await PameServices.uploadId(e.target.files[0]);
      this.imageFrontGuarantor = res.data.secure_url;
      this.idCardFrontGuarantor = this.imageFrontGuarantor;
    },
    async handleImageBackGuarantor(e) {
      const res = await PameServices.uploadId(e.target.files[0]);
      this.imageBackGuarantor = res.data.secure_url;
      this.idCardBackGuarantor = this.imageBackGuarantor;
    },
  },
};
</script>

<style scoped></style>
