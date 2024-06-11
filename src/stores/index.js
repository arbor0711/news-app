import { defineStore } from "pinia";

export const useNews = defineStore("news", {
  state: () => ({
    news: [],
  }),
  actions: {
    async fetchNews() {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=812a589067b14fdebd6b72e0f47435ef`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      this.news = data.articles;
    },
  },
});
