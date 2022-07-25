import { createStore } from "vuex";

const getDefaultUser = () => {
  return {
    fullName: "",
    nCedula: "",
    exNicalit: false,
    famExTrabajador: false,
    noExTrabajador:false,
    address: "",
    depart: "",
    bName: "",
    isagreeToTerms: false,
  };
};

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  state: {
    user: getDefaultUser(),
  },
  mutations: {
    resetUserState(state) {
      Object.assign(state.user, getDefaultUser());
    },
    updateFullName(state, payload) {
      state.user.fullName = payload;
    },
    updatenCedula(state, payload) {
      state.user.nCedula = payload;
    },
    updateExNicalit(state, payload) {
      state.user.exNicalit = payload;
    },
    updateFamExTrabajador(state, payload) {
      state.user.famExTrabajador = payload;
    },
    updatenoExTrabajador(state, payload) {
      state.user.noExTrabajador = payload
    },
    updateAddress(state, payload) {
      state.user.address = payload;
    },
    updateDepart(state, payload) {
      state.user.depart = payload;
    },
    updatebName(state, payload) {
      state.user.bName = payload;
    },
    updateIsAgreeToTerms(state, payload) {
      state.user.isagreeToTerms = payload;
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit("resetUserState");
    },
  },
});
