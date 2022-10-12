<template>
  <div class="home">
    <Header />
    <MovieList :movies="movies.items" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import MovieList from '@/components/MovieList.vue'
import Header from '@/components/Header.vue'

import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()

const movies = computed(() => {
  return store.state.movies
})
onMounted(() => {
  store.dispatch('fetchMovies')
})
</script>
