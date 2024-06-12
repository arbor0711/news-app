<script setup>
import { ref, toRefs } from "vue";
import { useRouter } from "vue-router";
import { useToggle } from "../stores";

const toggle = useToggle();
const { toggleSearch } = toRefs(toggle);

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
</script>

<template>
  <form @submit.prevent="submitForm">
    <input class="input" v-model="searchText" placeholder="Search" />
    <span @click="toggleSearch">X</span>
  </form>
</template>

<style scoped>
.input {
  width: 100%;
  border: none;
  width: 60%;
  line-height: 2rem;
}
.input:focus {
  outline: none;
}
form {
  margin: auto 3rem;
  padding: 2rem 0;
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

span {
  font-size: 2rem;
  cursor: pointer;
}
</style>
