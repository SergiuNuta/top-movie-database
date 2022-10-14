<template>
  <div class="home">
    <Header />
    <MovieList :movies="searchedMovies" v-model="search" v-model:sortBy="sortBy" />
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
const sortBy = ref('alphabetically')

const movies = computed(() => {
  return store.state.movies
})
const searchedMovies = computed(() => {
  let tempMovies = movies.value
  if (search.value !== '') {
    tempMovies = tempMovies.filter((movie) => {
      return (
        movie.title.toLowerCase().indexOf(search.value.toLocaleLowerCase()) !== -1
      )
    })
  }
  tempMovies = tempMovies.sort((a, b) => {
    if (sortBy.value === 'alphabetically') {
      const fa = a.title.toLowerCase()
      const fb = b.title.toLowerCase()

      if (fa < fb) {
        return -1
      }
      if (fa > fb) {
        return 1
      }
      return 0
    } else if (sortBy.value === 'rank') {
      return a.rank - b.rank
    }
  })
  return tempMovies
})

onMounted(() => {
  store.dispatch('fetchMovies')
})
</script>
