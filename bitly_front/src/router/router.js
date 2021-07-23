import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        alias: "/users",
        name: "users",
        component: () => import("../components/ListAllUsers")
    },
    {
        path: "/users/edit",
        name: "users-edit",
        component: () => import("../components/EditUsers")
    },
    {
        path: "/users/delete",
        name: "user-delete",
        component: () => import("../components/DeleteUsers")
    },


];


export const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;