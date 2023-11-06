import { createRouter, createWebHistory } from "vue-router";
import BlogList from "../components/BlogList.vue";
import BlogPost from "../components/BlogPost.vue";
import CreatePost from "../components/CreatePost.vue";

const routes = [
  {
    path: "/",
    name: "BlogList",
    component: BlogList,
  },
  {
    path: "/post/:id",
    name: "BlogPost",
    component: BlogPost,
  },
  {
    path: "/create",
    name: "CreatePost",
    component: CreatePost,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
