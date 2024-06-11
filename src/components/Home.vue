<script setup>
import { useNews } from "../stores/index";
import { onMounted } from "vue";
import NewsCard from "./NewsCard.vue";
const newsStore = useNews();
onMounted(() => {
  newsStore.fetchNews();
});
</script>

<template>
  <div>
    <div class="news-container">
      <NewsCard
        v-for="(
          { title, author, publishedAt, source, description, url, urlToImage },
          index
        ) in newsStore.news"
        :key="index"
        :title="title"
        :description="description"
        :url="url"
        :imageUrl="urlToImage"
      />
    </div>
  </div>
</template>

<style></style>
