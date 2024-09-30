<template>
  <BlogHeader />
  <div class="md:px-14 px-7">
    <RouterView />
  </div>
  <BlogFooter />
</template>

<script setup>
import BlogHeader from './components/layout/BlogHeader.vue'
import BlogFooter from './components/layout/BlogFooter.vue'
</script>
