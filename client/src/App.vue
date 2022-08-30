<script setup>
import { RouterView } from "vue-router";
import Header from "./components/TheHeader.vue";
</script>
<template>
  <Header></Header>
  <RouterView />
</template>
<style scoped>
@import "./assets/base.css";
</style>
