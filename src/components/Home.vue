<script setup>
import { toRefs, computed } from "vue";
import { useNews, useToggle } from "../stores";
import { useRouter } from "vue-router";
import NewsCard from "./NewsCard.vue";

const newsStore = useNews();
newsStore.fetchAllNews();

const toggle = useToggle();
const { showSearch } = toRefs(toggle);
showSearch.value = false;

// make it reactive by using computed
// const newsTitle = computed(() => {
//   return (
//     newsStore.news
//       // .slice(0, 7)
//       .map(
//         (news) =>
//           // news.title.length > 15 ? news.title.substring(0, 50) + "..." :
//           news.title
//       )
//       .sort((a, b) => a.localeCompare(b))
//   );
// });

// const router = useRouter();
// const handleClick = (title) => {
//   // Accept title as a parameter
//   router.push({
//     name: "news-detail",
//     params: { title },
//   });
// };
</script>

<template>
  <div class="container">
    <main class="news">
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
    </main>
    <!-- <aside class="sidebar">
      <h2>Hot News</h2>
      <ul>
        <li
          @click="handleClick(title)"
          v-for="(title, index) in newsTitle"
          :key="index"
        >
          {{ title }}
        </li>
      </ul>
    </aside> -->
  </div>
</template>

<style>
.news {
  margin-top: 2rem;
}
.sidebar {
  display: none;
}

@media screen and (min-width: 800px) {
  .news {
    width: 70%;
  }
  .sidebar {
    display: block;
    width: 25%;
    position: fixed;
    top: 150px;
    right: 20px;
    height: 75vh;
    overflow: hidden;
    border: 1px solid #ccc;
    padding: 0 2rem 2rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    font-size: 1.5;
    margin-bottom: 2rem;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
  }
}
</style>
