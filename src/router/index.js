// library import to build router from vue-router
import { createRouter, createWebHistory } from "vue-router";

// views import from folder views
import HomeViews from "../views/HomeViews.vue";
import scredito from "../views/SolicitudCreditoViews.vue";

//create an obje to contain reutes
const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeViews,
  },
  {
    path: "/api/scredito",
    name: "solicitudcredito",
    component: scredito,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
