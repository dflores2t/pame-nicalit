import { createStore } from "vuex";

const getDefaultUser = () => {
  return {
    fullName: "",
    nCedula: "",
    exNicalit: "NO",
    famExTrabajador: "NO",
    noExTrabajador: "NO",
    nameFamExTrabajador: "",
    address: "",
    depart: "",
    municipio: "",
    comunidad: "",
    phoneHome: "",
    phoneMovil: "",
    email: "",
    rsWhatsapp: "NO",
    rsFacebook: "NO",
    none: "X",
    otrarrss: "",
    cuentaBac: "",
    referenciaPersonal: "",
    referenciaPhone: "",
    aSolicitado: "",
    dNegocio: "",
    aEconomica: "",
    dirNegocio: "",
    departn: "",
    municipion: "",
    comunidadn: "",
    bDirecto: 0,
    eGenerado: 0,
    fOperaciones: "",
    mPrestamo: 0,
    plazoPrestamo: "",
    cuotaPrestamo: 0,
    iCrediticia: "",
    products: [],
    gprendaria: [],
    idCardFront: "",
    idCardBack: "",
    progressStatus: 0,
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
    updateProducts(state, payload) {
      let { description, unit, quantity, cu, ct } = payload;
      ct = cu * quantity;
      state.user.products.push({ description, unit, quantity, cu, ct });
    },
    deleteProducts(state, payload) {
      state.user.products.splice(payload, 1);
    },
    addGprendaria(state, payload) {
      let { description, brand, model, serie, color, auso, vcompra } = payload;
      state.user.gprendaria.push({
        description,
        brand,
        model,
        serie,
        color,
        auso,
        vcompra,
      });
    },
    deleteGprendaria(state, payload) {
      state.user.gprendaria.splice(payload, 1);
    },
    updateIdCardFront(state, payload) {
      state.user.idCardFront = payload;
    },
    updateIdCardBack(state, payload) {
      state.user.idCardBack = payload;
    },
    updateProgress(state, payload) {
      state.user.progressStatus = payload;
    },
  },
  actions: {
    resetUserState({ commit }) {
      commit("resetUserState");
    },
  },
});
