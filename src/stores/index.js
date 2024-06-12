import { defineStore } from "pinia";
import NewsApi from "../services/newsApi";

const newsApi = new NewsApi();
// News store
export const useNews = defineStore("news", {
  state: () => ({
    news: [],
  }),

  actions: {
    // Fetch news from the API and store it in the store
    async fetchAllNews() {
      this.news = await newsApi.fetchAllNews();
      const data = await response.json();
      this.news = data.articles;
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
