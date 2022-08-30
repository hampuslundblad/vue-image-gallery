<script setup>
import { ref } from "vue";
import ImageGallery from "../components/ImageGallery.vue";
import TitleText from "../components/TitleText.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
const searchInput = ref("");
const searchConfirmed = ref("");

const handleUserSearch = () => {
  searchConfirmed.value = searchInput.value;
};
</script>

<template>
  <div class="main-container">
    <TitleText>Image Gallery</TitleText>
    <div class="user-input-container">
      <input
        class="input"
        v-on:keyup.enter="handleUserSearch()"
        v-model="searchInput"
      />
      <button class="search-button" @click="handleUserSearch()">Search</button>
    </div>
    <Suspense>
      <ImageGallery :search="searchConfirmed"></ImageGallery>
      <template #fallback> <LoadingSpinner /> </template>
    </Suspense>
  </div>
</template>
<style scoped>
.main-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.user-input-container {
  display: flex;
  align-items: center;
  width: 25%;
  justify-content: space-between;
}

.input {
  width: 8rem;
  height: 1.5rem;
  font-family: var(--ff-sans-normal);
}
.search-button {
  width: 6rem;
  height: 2.5rem;
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  text-align: center;
  border-radius: 2px;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  font-family: var(--ff-sans-normal);
}
.search-button:hover {
  cursor: pointer;
}
</style>
