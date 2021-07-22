import { createWebHistory, createRouter } from "vue-router";


const routes =  [
  {
    path: "/",
    alias: "/links",
    name: "links",
    component: () => import("../components/ListAllUrl")
  },
  {
    path: "/link/:id",
    name: "link-details",
    component: () => import("../components/EdiitUrlLink")
  },
  {
    path: "/add",
    name: "add",
    component: () => import("../components/CreateShortLink")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

