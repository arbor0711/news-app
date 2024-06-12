import { defineStore } from "pinia";
import NewsApi from "../services/newsApi";

const newsApi = new NewsApi();

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
