<script>
export default {
  props: ["title", "description", "url", "imageUrl"],
};
</script>

<template>
  <div class="container">
    <img :src="imageUrl" alt="Article image" />
    <h2>{{ title }}</h2>
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

img {
  width: 100%;
  object-fit: cover;
}
h2 {
  font-size: 1.5rem;
  margin: 0.5rem 0;
}
</style>
