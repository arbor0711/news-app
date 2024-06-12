<script setup>
import SearchInput from "../components/SearchInput.vue";
</script>

<template>
  <nav>
    <section>
      <router-link class="logo" to="/">MimicMedia</router-link>
      <SearchInput />
      <!-- <button class="search-icon" @click="toggleSearch">🔍</button> -->
    </section>
    <!-- <input class="search-input" type="search" placeholder="Search..." /> -->
  </nav>
</template>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 0 1rem;
}
section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.logo {
  font-size: 3rem;
  letter-spacing: -3px;
}
.search-icon {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}
.search-input {
  width: 100%;
  padding: 0.5rem;
}
@media (min-width: 768px) {
  nav {
    flex-direction: row;
    justify-content: space-between;
  }
  .logo {
    font-size: 3rem;
    letter-spacing: -3px;
  }
  .search-input {
    width: auto;
  }
  .search-icon {
    display: none;
  }
}
@media (max-width: 767px) {
  .search-icon {
    display: block;
  }
}
</style>
