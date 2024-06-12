<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "SearchInput",

  setup() {
    const router = useRouter();
    const searchText = ref("");

    const submitForm = () => {
      if (searchText.value.trim()) {
        router.push({
          name: "search-results",
          query: { q: searchText.value.trim() },
        });
        searchText.value = "";
      }
    };

    return {
      searchText,
      submitForm,
    };
  },
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <input class="input" v-model="searchText" placeholder="search keyword" />
  </form>
</template>

<style scoped></style>
