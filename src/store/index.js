import { createLogger, createStore } from "vuex";

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
    aSolicitado: "",
    dNegocio: "",
    dirNegocio: "",
    departn: "",
    municipion: "",
    comunidadn: "",
    bDirecto: "",
    eGenerado: "",
    fOperaciones: "",
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
    products: [{ description: "1" }, { description: "2" }],
  },
  getters: {
    getProductDescription: (state) =>
      state.products.filter((des) => des.description),
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
    updateAsolicitado(state, payload) {
      state.user.aSolicitado = payload;
    },
    updateDnegocio(state, payload) {
      state.user.dNegocio = payload;
    },
    updateAeconomica(state, payload) {
      state.user.aEconomica = payload;
    },
    updateDirNegocio(state, payload) {
      state.user.dirNegocio = payload;
    },
    updateDepartN(state, payload) {
      state.user.departn = payload;
    },
    updateMunicipioN(state, payload) {
      state.user.municipion = payload;
    },
    updateComunidadN(state, payload) {
      state.user.comunidadn = payload;
    },
    updateBdirecto(state, payload) {
      state.user.bDirecto = payload;
    },
    updateEgenerado(state, payload) {
      state.user.eGenerado = payload;
    },
    updateFoperaciones(state, payload) {
      state.user.fOperaciones = payload;
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
    updateProduct(state, payload) {
      state.products.push({ payload });
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit("resetUserState");
    },
  },
  plugins: [createLogger()],
});
