<script setup>
import { toRefs } from "vue";
import { useNews, useToggle } from "../stores";
import NewsCard from "./NewsCard.vue";

const newsStore = useNews();
newsStore.fetchAllNews();

const toggle = useToggle();
const { showSearch } = toRefs(toggle);
showSearch.value = false;
</script>

<template>
  <div>
    <div class="news-container">
      <NewsCard
        v-for="(
          { title, description, url, urlToImage }, index
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

<style>
.news-container {
  margin-top: 2rem;
}
</style>
