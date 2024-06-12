// TODO: Save your API key somewhere safe

export default class NewsApi {
  // Fetch news from the API
  async fetchAllNews() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=812a589067b14fdebd6b72e0f47435ef`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    return data.articles;
  }
  // Search news from the API
  // async searchNews(keyword) {
  //   const response = await fetch(
  //     `https://newsapi.org/v2/everything?q=${keyword}&apiKey=812a589067b14fdebd6b72e0f47435ef`,
  //     {
  //       method: "GET",
  //     }
  //   );
  //   const data = await response.json();
  //   return data.articles;
  // }
}
