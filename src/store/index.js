import { createStore } from "vuex";

const getDefaultUser = () => {
  return {
    fullName:'',
    firstName: "",
    lastName: "",
    username: "",
    email: "",
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
    }
    ,
    updateFirstName(state, payload) {
      state.user.firstName = payload;
    },
    updateLastName(state, payload) {
      state.user.lastName = payload;
    },
    updateUsername(state, payload) {
      state.user.username = payload;
    },
    updateEmail(state, payload) {
      state.user.email = payload;
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
