// import { apiKey } from "../config.js";
const apiKey = import.meta.env.VITE_NEWSAPIKEY;

export default class NewsApi {
  // Fetch news from the API
  async fetchAllNews() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.articles;
  }
}
