import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "accueil",
    component: () => import("../views/Index")
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("../views/SignUp")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login")
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;