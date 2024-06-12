<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useNews } from "../stores/index";

export default {
  setup() {
    const route = useRoute();
    const title = ref("");
    const newsStore = useNews();
    const news = ref(null);
    const allNews = newsStore.news;

    onMounted(() => {
      title.value = route.params.title;

      news.value = allNews.find((item) => item.title.includes(title.value));
    });

    const formatDate = (dateString) => {
      const isoDate = dateString;
      const date = new Date(isoDate);
      const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const readableDate = date.toLocaleDateString("en-US", options);
      return readableDate;
    };

    return {
      formatDate,

      title,
      news,
    };
  },
};
</script>

<template>
  <div class="news-detail">
    <h1 class="news-title">{{ news?.title }}</h1>
    <p class="news-published-at">
      {{ formatDate(news?.publishedAt) }}
    </p>
    <a class="news-source" :href="news?.url">Source: {{ news?.source.name }}</a>
    <img :src="news?.urlToImage" alt="Article image" class="news-image" />

    <p class="news-description">{{ news?.description }}</p>
    <p class="news-content">{{ news?.content }}</p>

    <p class="news-author">Author: {{ news?.author }}</p>
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

.news-source,
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
