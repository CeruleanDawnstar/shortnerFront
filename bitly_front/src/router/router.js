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
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

