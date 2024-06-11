import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import LatestNews from "../components/LatestNews.vue";
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "",
      component: Home,
    },

    {
      path: "/news/latest-news",
      name: "show-latest-news",
      component: LatestNews,
    },
  ],
});

export { router };
