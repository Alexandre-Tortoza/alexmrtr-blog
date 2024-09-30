<template>
  <div class="py-14">
    <h2 class="text-xl font-semibold">Desenvolvedor Front-end</h2>
    <p class="font-thin">
      <small>Stacks: </small>
      <span v-for="(stack, index) in stacks" :key="stack" class="text-lg">
        {{ stack }}<span v-if="index !== stacks.length - 1">, </span>
      </span>
    </p>
  </div>
  <h3>Destaque</h3>
  <div class="border__separador py-7">
    <!-- Destaque do post principal -->
    <router-link v-if="head" :to="`/post/${head.id}`">
      <div
        class="flex flex-col md:flex-row rounded-lg overflow-auto"
        style="border: 1px solid #0d0d0d50"
      >
        <div class="w-full">
          <img class="h-auto max-w-full" :src="getImageUrl(head.img)" alt="Imagem principal" />
        </div>
        <div class="p-8 flex justify-between flex-col">
          <div>
            <h2 class="text-xl font-bold">{{ head.title }}</h2>
            <p class="font-light">{{ head.hook }}</p>
          </div>
          <div>
            <p class="font-normal">{{ head.author }}</p>
            <p class="font-light">{{ head.date }}</p>
          </div>
        </div>
      </div>
    </router-link>

    <div v-else>Carregando...</div>
  </div>
  <h3 v-if="tail.length > 0">Outros Posts</h3>
  <div class="border__separador py-7" v-if="tail.length > 0">
    <div class="flex space-x-4 overflow-x-auto">
      <div
        v-for="(post, index) in tail"
        :key="index"
        class="flex-none w-64 bg-white p-4 my-4 rounded-lg shadow-lg"
      >
        <img
          class="h-40 w-full object-cover rounded-lg mb-4"
          :src="getImageUrl(post.img)"
          alt="Post Image"
        />
        <h4 class="font-bold text-lg">{{ post.title }}</h4>
        <p class="text-sm font-light">{{ post.hook }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import dataPosts from '@/assets/db.json'

const stacks = ['Vue', 'React', 'JavaScript']
const [head, ...tail] = dataPosts.posts

const getImageUrl = (imgName) => new URL(`../assets/cards/${imgName}.jpg`, import.meta.url).href
</script>
<style scoped>
.border__separador {
  border-top: 1px solid #0d0d0d50;
}
.flex {
  scroll-behavior: smooth;
}
</style>
