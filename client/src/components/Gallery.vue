<script setup>
import FlickrService from "../services/FlickrService.mjs";
import { ref } from "vue";
import ErrorMessage from "./ErrorMessage.vue";
const error = ref("");
const imageUris = ref("");

try {
  const response = await FlickrService.search("Nature");
  imageUris.value = response.data.images;
} catch (err) {
  error.value = "Something went wrong:  " + err.message;
}
</script>

<template>
  <ErrorMessage>{{ error }}</ErrorMessage>
  <div class="image-container">
    <div v-for="imageUri in imageUris" :key="imageUri.id">
      <img class="image" :src="imageUri" />
    </div>
  </div>
</template>

<style scoped>
.image {
  width: 360px;
  height: 360px;
  padding: 0px 3px 0px 3px;
}
.image-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.error {
  margin: 10px auto 0px auto;
  color: red;
  font-size: 2.5rem;
}
</style>
