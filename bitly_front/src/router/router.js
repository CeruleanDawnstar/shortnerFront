import { createWebHistory, createRouter } from "vue-router";

const routes =  [
  {
    path: "/",
    alias: "/add",
    name: "add",
    component: () => import("../components/CreateShortLink")
  },
  {
    path: "/link/:id",
    name: "link-details",
    component: () => import("../components/EdiitUrlLink")
  },
  {
    path: "/links",
    name: "links",
    component: () => import("../components/ListAllUrl")
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
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("../views/Profil")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;