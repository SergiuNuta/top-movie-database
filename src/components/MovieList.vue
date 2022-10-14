<template>
  <div class="wrapper">
    <section class="flex justify-end pr-20 mt-5">
      <div class="search mr-20">
        <div class="saerchBox flex gap-4">
          <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            type="text"
            placeholder="Search title"
            class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border shadow"
          />
          <input
            type="submit"
            value="Search"
            class="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-white font-normal w-20 h-10 flex justify-center items-center text-sm border-gray-300 rounded border shadow"
          />
        </div>
      </div>
      <div class="">Sort</div>
    </section>
    <div class="movies flex flex-wrap justify-center gap-2 mt-10">
      <Movie :movie="movie" v-for="movie in movies" :key="movie.id" />
    </div>
  </div>
</template>

<script setup>
import Movie from './Movie.vue'

// eslint-disable-next-line no-undef
defineProps(['movies', 'modelValue'])
// eslint-disable-next-line no-undef
defineEmits(['update:modelValue'])
</script>
