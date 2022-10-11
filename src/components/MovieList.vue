<template>
<h1>Made By Actions</h1>
  <div v-for='movie in movies.items' :key='movie.id'>
    {{movie.id}} {{movie.title}} {{movie.year}}
    </div>
</template>

<script setup>
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
