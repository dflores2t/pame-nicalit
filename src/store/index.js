import { createStore } from "vuex";

const getDefaultUser = () => {
  return {
    fullName: "",
    nCedula: "",
    exNicalit: "",
    famExTrabajador: "",
    noExTrabajador: "",
    nameFamExTrabajador: "",
    address: "",
    depart: "",
    municipio: "",
    comunidad: "",
    phoneHome: "",
    phoneMovil: "",
    email: "",
    rsWhatsapp: "",
    rsFacebook: "",
    none: "",
    otrarrss: "",
    cuentaBac: "",
    referenciaPersonal: "",
    referenciaPhone: "",
    mPrestamo: "",
    plazoPrestamo: "",
    cuotaPrestamo: "",
    iCrediticia: "",
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
    updateNoExTrabajador(state, payload) {
      state.user.noExTrabajador = payload;
    },
    updateNameFamExTrabajador(state, payload) {
      state.user.nameFamExTrabajador = payload;
    },
    updateAddress(state, payload) {
      state.user.address = payload;
    },
    updateDepart(state, payload) {
      state.user.depart = payload;
    },
    updateMunicipio(state, payload) {
      state.user.municipio = payload;
    },
    updateComunidad(state, payload) {
      state.user.comunidad = payload;
    },
    updatePhoneHome(state, payload) {
      state.user.phoneHome = payload;
    },
    updatePhoneMovil(state, payload) {
      state.user.phoneMovil = payload;
    },
    updateEmail(state, payload) {
      state.user.email = payload;
    },
    updateRsWhatsapp(state, payload) {
      state.user.rsWhatsapp = payload;
    },
    updateRsFacebook(state, payload) {
      state.user.rsFacebook = payload;
    },
    updateNone(state, payload) {
      state.user.none = payload;
    },
    updateOtrarrss(state, payload) {
      state.user.otrarrss = payload;
    },
    updateCuentaBac(state, payload) {
      state.user.cuentaBac = payload;
    },
    updateReferenciaPersonal(state, payload) {
      state.user.referenciaPersonal = payload;
    },
    updateReferenciaPhone(state, payload) {
      state.user.referenciaPhone = payload;
    },
    updateMprestamo(state, payload) {
      state.user.mPrestamo = payload;
    },
    updatePlazoPrestamo(state, payload) {
      state.user.plazoPrestamo = payload;
    },
    updateCuotaPrestamo(state, payload) {
      state.user.cuotaPrestamo = payload;
    },
    updateInformationCrediticia(state, payload) {
      state.user.iCrediticia = payload;
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit("resetUserState");
    },
  },
});
