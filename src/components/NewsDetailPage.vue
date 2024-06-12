<script setup>
import { ref, toRefs } from "vue";
import { useRoute } from "vue-router";
import { useNews, useToggle } from "../stores";

const toggle = useToggle();
const { showSearch } = toRefs(toggle);
showSearch.value = false;

const route = useRoute();
const { title } = route.params;

const newsStore = useNews();
const news = ref(newsStore.news.find((item) => item.title.includes(title)));

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return date.toLocaleDateString("en-US", options);
};
</script>

<template>
  <div class="news-detail" v-if="news">
    <h1 class="news-title">{{ news.title }}</h1>
    <p class="news-published-at">
      {{ formatDate(news.publishedAt) }}
    </p>
    <a class="news-source" :href="news.url">Source: {{ news.source.name }}</a>
    <img :src="news.urlToImage" alt="Article image" class="news-image" />

    <p class="news-description">{{ news.description }}</p>
    <p class="news-content">{{ news.content }}</p>

    <p class="news-author">Author: {{ news.author }}</p>
  </div>
</template>

<style scoped>
.news-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.news-title {
  font-size: 2em;
  margin-bottom: 20px;
}

.news-source {
  text-decoration: none;
  font-size: 1.5rem;
  color: #b3b3b3;
}

.news-author,
.news-description,
.news-published-at,
.news-content {
  margin-bottom: 10px;
}

.news-image {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}
</style>
