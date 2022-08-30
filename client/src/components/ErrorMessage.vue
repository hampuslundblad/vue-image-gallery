<script setup></script>
<template>
  <h1 class="error"><slot></slot></h1>
</template>
<style scoped>
.error {
  margin-right: auto;
  margin-left: auto;
  color: red;
  font-size: 2.5rem;
}
</style>
