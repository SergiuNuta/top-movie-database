<template>
  <header
    className="flex py-5 border bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
  >
    <title class="site_name font-bold flex justify-center items-center pl-5">
      Top250Movies
    </title>
  </header>
  <div class="homepageHeader border grid grid-cols-2" v-for="movie in commingSoonMovies.slice(0, 1)" :key="movie.id">
    <div class="p-5">
      <p class="title text-xl">{{ movie.title }}</p>
      <p class="plot text-sm mt-4">{{ movie.plot ? movie.plot : 'no plot' }}</p>
      <button class="trailer border p-3 rounded-xl mt-4">trailer</button>
    </div>
    <div class="w-full">
      <img class="headerImage" :src="movie.image" :alt="movie.title" />
    </div>
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from 'vue'
import axios from 'axios'

const commingSoonMovies = ref([])

onBeforeMount(() => {
  axios.get('https://imdb-api.com/en/API/ComingSoon/k_qpymkukz')
    .then(res => {
      commingSoonMovies.value = res.data.items
    })
    .catch((errors) => {
      console.log(errors)
    })
})
</script>
<style scoped>
.homepageHeader {
  height: 200px;
}
.headerImage {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>
>
