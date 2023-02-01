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
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      resolve({ left: 0, top: 0 });
    });
  },
});

export default router;
