<template>
  <BlogHeader />
  <div class="px-14">
    <RouterView />
  </div>
  <BlogFooter />
</template>

<script setup>
import BlogHeader from './components/layout/BlogHeader.vue'
import BlogFooter from './components/layout/BlogFooter.vue'
</script>
