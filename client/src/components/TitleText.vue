<script setup></script>
<template>
  <h1 class="title-text"><slot /></h1>
</template>
<style scoped>
@import "../assets/base.css";

.title-text {
  text-align: center;
  font-family: var(--ff-sans-normal);
}
</style>
