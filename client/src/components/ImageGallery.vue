<script setup>
import FlickrService from "../services/FlickrService.mjs";
import { ref, watch, onMounted } from "vue";
import ErrorMessage from "./ErrorMessage.vue";
import LoadingSpinner from "./LoadingSpinner.vue";
const error = ref("");
const imageUris = ref("");
const isLoading = ref(true);

const props = defineProps({
  search: String,
});

const loadImages = async (imageText) => {
  try {
    isLoading.value = true;
    const response = await FlickrService.search(imageText);
    imageUris.value = response.data.images;
    error.value = "";
  } catch (err) {
    error.value = "Something went wrong:  " + err.message;
  }
  isLoading.value = false;
};

watch(
  () => props.search,
  (currentValue) => {
    loadImages(currentValue);
  }
);

onMounted(() => {
  //Default pretty images :)
  loadImages("nature");
});
</script>

<template>
  <ErrorMessage>{{ error }}</ErrorMessage>
  <LoadingSpinner v-if="isLoading" />
  <div
    v-if="!isLoading && !error"
    class="image-container"
    data-test="image-container"
  >
    <div v-for="imageUri in imageUris" :key="imageUri.id" data-test="image">
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
