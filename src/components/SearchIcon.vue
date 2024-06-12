<script setup>
import { defineProps } from "vue";
import searchIcon from "../assets/search-icon.svg";

const props = defineProps({
  width: String,
  height: String,
});
</script>
<template>
  <searchIcon :width="props.width" :height="props.height" />
</template>
