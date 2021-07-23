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
    component: () => import("../components/SignUp")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../components/Login")
  },
  {
    path: "/profil",
    name: "profil",
    component: () => import("../components/Profil")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;