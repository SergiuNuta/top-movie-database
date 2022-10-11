<template>
  <div class="home">
    <MovieList />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from '@/components/Footer.vue'
import MovieList from '@/components/MovieList.vue'

export default {
  name: 'Home',
  components: {
    Footer,
    MovieList
  }
}
</script>
