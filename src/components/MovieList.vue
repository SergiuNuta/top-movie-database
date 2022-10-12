<template>
<div class="wrapper">
  <!-- <div v-for='movie in movies' :key='movie.id'>
    {{movie.id}} {{movie.title}} {{movie.year}}
  </div> -->
<div class="movies flex flex-wrap justify-center gap-2 mt-10">
  <Movie :movie="movie" v-for="movie in movies" :key="movie.id"/>
</div>

</div>
</template>

<script setup>
import Movie from './Movie.vue'

// eslint-disable-next-line no-undef
defineProps({
  movies: {}
})
</script>
