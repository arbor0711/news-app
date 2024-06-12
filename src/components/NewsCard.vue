<script>
import { useRouter } from "vue-router";
export default {
  props: ["title", "description", "url", "imageUrl"],
  setup(props) {
    const router = useRouter();
    // To navigate to the detail page
    const handleClick = () => {
      router.push({
        name: "news-detail",
        params: { title: props.title },
      });
    };

    return {
      handleClick,
    };
  },
};
</script>

<template>
  <div class="container">
    <!-- Enable user to go to detail page by clicking either the image or title of news -->
    <img @click="handleClick" :src="imageUrl" alt="Article image" />
    <h2 @click="handleClick">{{ title }}</h2>
    <p>{{ description }}</p>
  </div>
</template>

<style>
.container {
  width: 90%;
  margin: 0 auto;
  margin-bottom: 60px;
  padding-bottom: 10px;
  border-bottom: 1px solid #c9c9c9;
}
img,
h2 {
  cursor: pointer;
}
img {
  width: 100%;
  object-fit: cover;
}
h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
</style>
