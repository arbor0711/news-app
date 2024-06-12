import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import NewsDetailPage from "../components/NewsDetailPage.vue";
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
      path: "/news/:title",
      name: "news-detail",
      component: NewsDetailPage,
    },

    {
      path: "/search",
      name: "search-results",
      component: SearchResults,
      props: (route) => ({ query: route.query.q }),
    },
  ],
});

export { router };
