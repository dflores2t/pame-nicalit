const SERVER_INFO = {
  serverPame: import.meta.env.VITE_SERVER_PAME,
  serverPameError: import.meta.env.VITE_SERVER_PAME_ERROR,
  serverPropositiva: import.meta.env.VITE_SERVER_PROPOSITIVA,
  serverPropositivaError: import.meta.env.VITE_SERVER_PROPOSTIVA_ERROR,
};

const APP_VERSION = import.meta.env.VITE_VERSION;
export { SERVER_INFO, APP_VERSION };
