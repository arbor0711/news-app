import { defineStore } from "pinia";
import NewsApi from "../services/newsApi";

const newsApi = new NewsApi();
// News store
export const useNews = defineStore("news", {
  state: () => ({
    news: [],
  }),

  actions: {
    async fetchAllNews() {
      this.news = await newsApi.fetchAllNews();
    },
  },
});

// Variables store
export const useToggle = defineStore("toggle", {
  state: () => ({
    showSearch: false,
  }),

  actions: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
    },
  },
});
