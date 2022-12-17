<template>
  <div class="solicitud-de-credito"></div>
  <HeaderForm />
  <section class="container">
    <Form v-if="!this.showUserDetail" v-slot="{ handleSubmit, values, errors }">
      <div class="step-card">
        <div class="step-body">
          <component
            :is="this.stepsList[this.currentStep]"
            :errors="errors"
          ></component>
        </div>

        <div class="step-footer">
          <div class="current-steps">
            <b>{{ this.currentStep + 1 }}</b> / {{ this.stepsList.length }}
          </div>

          <button
            @click="isLastStep ? finalSubmit() : handleSubmit($event, toNext)"
            :disabled="
              isFirstStep ? false : !validateCurrentStep(values, errors)
            "
            type="button"
            class="btn-primarys btn-next"
          >
            {{ isLastStep ? `Enviar` : `Sig.` }}
          </button>

          <button
            @click="toPrevious"
            v-show="!isFirstStep"
            type="button"
            class="btn-secondarys btn-back"
          >
            Atras
          </button>
        </div>
      </div>
    </Form>

    <UserDetail v-else @toRestart="toRestart" />
  </section>
</template>

<script>
import { mapActions } from "vuex";
import { Form } from "vee-validate";
import HeaderForm from "../components/HeaderForm.vue";
import FormIntro from "../components/Forms/FormIntro.vue";
import FormOne from "../components/Forms/FormOne.vue";
import FormTwo from "../components/Forms/FormTwo.vue";
import FormThree from "../components/Forms/FormThree.vue";
import FormFour from "../components/Forms/FormFour.vue";
import FormFive from "../components/Forms/FormFive.vue";
import UserDetail from "../components/UserDetail.vue";
export default {
  name: "SolicitudDeCreditoViews",
  components: {
    Form,
    HeaderForm,
    FormIntro,
    FormOne,
    FormTwo,
    FormThree,
    FormFour,
    FormFive,
    UserDetail,
  },
  data() {
    return {
      currentStep: 0,
      stepsList: [
        "FormIntro",
        "FormOne",
        "FormTwo",
        "FormThree",
        "FormFour",
        "FormFive",
      ],
      showUserDetail: false,
    };
  },

  computed: {
    isFirstStep() {
      return this.currentStep === 0;
    },
    isLastStep() {
      return this.currentStep === this.stepsList.length - 1;
    },
  },
  methods: {
    validateCurrentStep(values, errors) {
      // check if validation's errors object is empty
      const noErrors = Object.keys(errors).length === 0;
      // check each of the validation's values has value
      const valuesAreNotEmpty = (obj) => {
        if (Object.keys(obj).length === 0) return true;
        return Object.values(obj).every(
          (x) => !(!x || x === undefined || x.length === 0)
        );
      };

      return noErrors && valuesAreNotEmpty(values);
    },
    finalSubmit() {
      this.showUserDetail = true;
    },
    toPrevious() {
      this.currentStep--;
    },
    toNext() {
      this.currentStep++;
    },
    toRestart() {
      this.currentStep = 0;
      this.showUserDetail = false;
      this.resetUserState();
    },
    ...mapActions(["resetUserState"]),
  },
};
</script>
<style>
.solicitud-de-credito {
  margin-top: 10%;
}
.container {
  width: 100%;
  padding-right: 5px;
  padding-left: 5px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-items: center;
}

.step-card {
  padding: 10px;
  margin: 15px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 375px;
  border: solid 2px #dddddd;
}

.step-title {
  margin: 10px 0;
  font-size: 1.1rem;
  font-weight: bold;
  text-align: center;
}

.step-body {
  margin-bottom: 20px;
  min-height: 350px;
}

.step-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 0.9rem;
}

.step-footer button {
  display: block;
  padding: 15px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 4px;
}

.step-footer button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.step-footer button.btn-primarys {
  background-color: #064faf;
  color: #fff;
}

.step-footer button.btn-secondarys {
  color: #064faf;
}

.step-footer button.btn-next {
  order: 3;
}

.step-footer button.btn-back {
  order: 1;
}

.current-steps {
  padding: 10px;
  border-radius: 15px;
  background-color: #eaeaea;
  margin-right: 10px;
  margin-left: auto;
  order: 2;
}

/* From Input & Error */
.form-input {
  display: block;
  margin-bottom: 15px;
}

.form-input label,
label {
  font-weight: 600;
  color: rgb(19, 124, 193);
  font-size: 0.8rem;
}
option,
.form-select {
  color: rgb(19, 124, 193) !important;
  font-size: 0.8rem !important;
}

.form-input span {
  color: #ff2626;
  font-size: 0.8rem;
  display: block;
}

.form-input .input-control[type="text"],
.form-input .input-control[type="email"],
.form-input .input-control[type="tel"] {
  height: 45px;
  padding: 10px;
  width: 100%;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  border-radius: 4px;
}

.form-input .input-control[type="checkbox"] {
  margin-right: 5px;
}

.form-input .input-control.has-error {
  border-color: #ff2626;
}

@media screen and (max-width: 768px) {
  .solicitud-de-credito {
    margin-top: 15%;
  }
  @media screen and (max-width: 568px) {
    .solicitud-de-credito {
      margin-top: 20%;
    }
  }
  @media screen and (max-width: 398px) {
    .solicitud-de-credito {
      margin-top: 27%;
    }
  }
}
</style>
