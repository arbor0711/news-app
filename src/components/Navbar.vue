<script setup>
import { toRefs } from "vue";
import { useToggle } from "../stores";
import SearchInput from "../components/SearchInput.vue";
import SearchIcon from "../components/SearchIcon.vue";

const toggle = useToggle();
const { showSearch, toggleSearch } = toRefs(toggle);
</script>

<template>
  <nav>
    <section>
      <router-link class="logo" to="/">MimicMedia</router-link>
      <span @click="toggleSearch">
        <SearchIcon width="25" height="25" />
      </span>
    </section>
    <SearchInput v-show="showSearch" />
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
}
section {
  display: flex;
  justify-content: space-between;
  padding: 1rem 3rem;
  align-items: center;
  border-bottom: 1px solid #c9c9c9;
}
.logo {
  font-size: 3rem;
  letter-spacing: -3px;
  text-decoration: none;
  color: black;
}

span {
  cursor: pointer;
}
</style>
