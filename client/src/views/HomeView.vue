<script setup>
import Gallery from "../components/Gallery.vue";
import TitleText from "../components/TitleText.vue";
import LoadingSpinner from "../components/LoadingSpinner.vue";
</script>

<template>
  <div class="main-container">
    <TitleText>Image Gallery</TitleText>
    <input class="input" />
    <Suspense>
      <Gallery></Gallery>
      <template #fallback> <LoadingSpinner/> </template>
    </Suspense>
  </div>
</template>
<style scoped>
.main-container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.input {
  
}
</style>
