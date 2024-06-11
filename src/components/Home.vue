<script setup>
import { useNews } from "../stores/index";
import { onMounted } from "vue";
const newsStore = useNews();
onMounted(() => {
  newsStore.fetchNews();
});
</script>

<template>
  <div>
    <!-- {{ newsStore.news }} -->

    <h1>Home</h1>
    <div class="news-container">
      <div v-for="(newsItem, index) in newsStore.news" :key="index">
        <h2>{{ newsItem.title }}</h2>
        <p>{{ newsItem.description }}</p>
        <a :href="newsItem.url" target="_blank">Read more</a>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
