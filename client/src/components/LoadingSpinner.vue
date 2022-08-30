<template>
  <div id="loading"></div>
</template>
<style scoped>
/* Loading animation */
#loading {
  width: 4rem;
  height: 4rem;
  border: 5px solid #f3f3f3;
  border-top: 6px solid #04aa6d;
  border-radius: 100%;
  margin: auto;
  visibility: visible;
  animation: spin 1s infinite linear;
  margin-top:3rem;
}

#loading.display {
  margin-top: 5rem;
  visibility: visible;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

</style>
