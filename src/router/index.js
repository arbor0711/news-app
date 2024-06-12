import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import NewsDetail from "../components/NewsDetail.vue";
import SearchResults from "../components/SearchResults.vue";
const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      name: "news-list",
      component: Home,
    },

    {
      path: "/news/:id",
      name: "news-detail",
      component: NewsDetail,
    },

    {
      path: "/search",
      name: "search-results",
      component: SearchResults,
      props: (route) => ({ query: route.query.q }),
      // path: "//search?q=",
      // name: "Search",
      // component: () => import("../components/SearchResults.vue"),
      // props: (route) => ({ query: route.query.q }),
    },
  ],
});

export { router };
