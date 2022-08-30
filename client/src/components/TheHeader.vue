<script setup></script>
<template>
  <div class="header ff-serif">
    <router-link to="/">Home </router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/contact">Contact</router-link>
  </div>
</template>
<style scoped>
@import "../assets/base.css";
.header {
  background-color: #4caf50;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
}
a {
  font-family: Roboto Flex;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  margin-left: 0.5rem;
  padding-right: 1rem;
  height: 40%;
  border-right: 2px white solid;
}
a:hover {
  color: greys;
  zoom: 1.05;
}
</style>
