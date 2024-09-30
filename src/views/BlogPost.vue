<template>
  <div v-if="post" class="blog__post">
    <div class="flex justify-evenly py-20">
      <img :src="getImageUrl(post.img)" alt="Post Image" width="300" />
      <div class="px-8 py-2 flex flex-col justify-between">
        <div>
          <h2 class="mt-4 text-xl">{{ post.title }}</h2>
          <p class="font-light mt-2">{{ post.hook }}</p>
        </div>
        <p class="font-thin text-sm">
          <small>Por</small> {{ post.author }} <small>em</small> {{ post.date }}
        </p>
      </div>
    </div>
    <div v-html="post.content"></div>
  </div>
  <div v-else>
    <p>Loading post...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import dataPosts from '@/assets/db.json'

const route = useRoute()
const post = ref(null)

const getImageUrl = (imgName) => new URL(`../assets/cards/${imgName}.jpg`, import.meta.url).href

onMounted(() => {
  const postId = route.params.id
  post.value = dataPosts.posts.find((p) => p.id == postId)
})
</script>

<style scoped>
.hoverEffect {
  transition: 1s;
}
.hoverEffect:hover {
  transition: 1s;
  color: #005c53;
}
</style>

<style>
.blog__post * {
  color: #333333;
}
.blog__post h2 {
  font-size: 28px;
  font-weight: 700;
  margin-top: 1rem;
}

.blog__post h3 {
  margin-top: 1.8rem;
  font-size: 24px;
  font-weight: 600;
}

.blog__post p {
  text-align: justify !important;
  font-size: 18px;
  font-weight: 400;
}
.blog__post * {
  text-align: justify !important;
}
</style>
