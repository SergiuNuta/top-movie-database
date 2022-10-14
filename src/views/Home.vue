<template>
  <div class="home">
    <Header />
    <MovieList :movies="searchedMovies" v-model="search" />
    <Footer />
  </div>
</template>

<script setup>
import Footer from '@/components/Footer.vue'
import MovieList from '@/components/MovieList.vue'
import Header from '@/components/Header.vue'

import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const search = ref('')

const movies = computed(() => {
  return store.state.movies
})
const searchedMovies = computed(() => {
  return movies.value.filter((movie) => {
    return (
      movie.title.toLowerCase().indexOf(search.value.toLocaleLowerCase()) !== -1
    )
  })
})
onMounted(() => {
  store.dispatch('fetchMovies')
})
</script>
