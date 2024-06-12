<script>
import { ref, watch, computed } from "vue";
import { useRoute } from "vue-router";
import { useNews } from "../stores/index";
import NewsCard from "./NewsCard.vue";

export default {
  name: "SearchResults",
  components: {
    NewsCard,
  },
  setup() {
    const newsStore = useNews();
    const news = newsStore.news;

    const route = useRoute();
    const query = ref(route.query.q);

    watch(
      () => route.query.q,
      (newQuery) => {
        query.value = newQuery;
      }
    );

    const searchResults = computed(() =>
      news.filter((item) => item.title.includes(query.value))
    );

    return {
      query,
      searchResults,
    };
  },
};
</script>

<template>
  <div class="search-title">
    <p>Search Results for "{{ query }}"</p>
  </div>
  <div class="news-container">
    <NewsCard
      v-for="(result, index) in searchResults"
      :key="index"
      :title="result.title"
      :description="result.description"
      :url="result.url"
      :imageUrl="result.urlToImage"
    />
  </div>
</template>

<style scoped>
.search-title {
  padding: 10px 20px;
  background-color: #e6e6e6;
  margin: 10px 0;
}
.search-title p {
  color: #333;
  font-size: 1em;
  margin: 0;
}
</style>
