<template>
  <div class="step-title">PLAN DE INVERSION</div>

  <div class="container mt-3">
    <div class="card">
      <img
        :src="imageFront"
        alt="Front"
        class="card-img-top img-fluid img-thumbnail rounded mx-auto d-block"
      />
      <div class="input-group mb-3 mt-1">
        <field
          class="form-control"
          :class="inputClassObject('idCardFront')"
          type="file"
          id="idCardFront"
          name="idCardFront"
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
      <div class="input-group mb-3 mt-1">
        <field
          class="form-control"
          :class="inputClassObject('idCardBack')"
          type="file"
          id="idCardBack"
          name="idCardBack"
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
import { isGeneratorFunction } from "pdfmake/build/pdfmake";
import { Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import defaultImage from "../../assets/img/idcard.jpg";
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
  },
  methods: {
    inputClassObject(name) {
      return {
        "input-control": true,
        "has-error": this.errors.hasOwnProperty(name),
      };
    },
    handleImageFront(e) {
      const selectedImageFront = e.target.files[0];
      this.createBase64Image(selectedImageFront, e.target.name);
    },
    handleImageBack(e) {
      const selectedImageBack = e.target.files[0];
      this.createBase64Image(selectedImageBack, e.target.name);
    },
    createBase64Image(fileObject, controlName) {
      const picture = new FileReader();
      picture.onload = (event) => {
        if (controlName === "idCardFront") {
          this.imageFront = event.target.result;
          this.idCardFront = this.imageFront;
        } else {
          this.imageBack = event.target.result;
          this.idCardBack = this.imageBack;
        }
      };
      picture.readAsDataURL(fileObject);
    },
  },
};
</script>

<style scoped></style>
