<template>
    <div class="movieDetails w-full h-screen grid grid-cols-2">
        <div class="movieTitle text-xl p-5">
            <p class="text-2xl">{{ movie.title }}</p>
            <section class="details flex items-center">
                <p class="pr-3">{{ movie.year }}</p>
                <div class="pr-3 flex items-center">
                    <img class="h-10 pr-1" src="../assets/imdb.png" alt="">
                    <p class="">{{ movie.imDbRating }}</p>
                </div>
                <div class="flex flex-nowrap items-center">
                    <img class="h-5" src="../assets/star-icon.png" alt="" />
                    <img class="h-5" src="../assets/star-icon.png" alt="" />
                    <img class="h-5" src="../assets/star-icon.png" alt="" />
                    <img class="h-5" src="../assets/star-icon.png" alt="" />
                    <img class="h-5" src="../assets/star-icon.png" alt="" />
                    <p class="">({{ movie.imDbRatingVotes }})</p>
                </div>
            </section>
        </div>
            <div class="poster">
                Poster
            </div>
        <div class="fullCast">
            <div class="directors" v-for="directors in movie.fullCast" :key="directors.index">
                <div v-for="director in directors.items" :key="director.id" class="flex">
                    <p>{{ director.name }}</p>
                </div>
            </div>
        </div>
        <div class="reviews">Reviews</div>
    </div>
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const movie = ref({})
const reviews = ref({})
const route = useRoute()
const requestOne = axios.get(`https://imdb-api.com/en/API/Title/k_qpymkukz/${route.params.id}/Posters,FullCast`)
const requestReviews = axios.get(`https://imdb-api.com/en/API/Reviews/k_qpymkukz/${route.params.id}`)

onBeforeMount(() => {
  axios.all([requestOne, requestReviews]).then(axios.spread((...responses) => {
    movie.value = responses[0].data
    reviews.value = responses[1].data
  })).catch(errors => {
    console.log(errors)
  })
//   try {
//     axios.get(`https://imdb-api.com/en/API/Title/k_6fg5u00c/${route.params.id}/Posters,FullCast,Ratings`)
//       .then(res => {
//         movie.value = res.data
//       })
//   } catch (error) {
//     console.log(error)
//   }
})
</script>
