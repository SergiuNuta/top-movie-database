<template>
  <div class="movieDetails w-full h-full">
    <div class="headerSection  grid grid-cols-3">
      <div class="movieTitle col-span-1 text-xl p-5">
        <p class="text-2xl">{{ movie.title }}</p>
        <section class="details flex items-center">
          <p class="pr-4">{{ movie.year }}</p>
          <div class="pr-4 flex items-center">
            <img class="h-10" src="../assets/imdb.png" alt="" />
            <p class="pl-1">{{ movie.imDbRating }}</p>
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
        <section class="fullCast py-5 text-base">
          <div class="directors grid grid-cols-6">
            <p class="col-start-1 col-end-1 font-bold text-gray-900">
              Directors
            </p>
            <div class="col-start-2 col-end-7 flex flex-wrap">
              <p v-for="directors in movie.directorList" :key="directors.id">
                {{ directors.name }}
              </p>
            </div>
          </div>
          <div class="writers grid grid-cols-6">
            <p class="col-start-1 col-end-1 font-bold text-gray-900">Writers</p>
            <div class="col-start-2 col-end-7 flex flex-wrap">
              <p v-for="writers in movie.writerList" :key="writers.id">
                {{ writers.name }},&nbsp;
              </p>
            </div>
          </div>
          <div class="actors grid grid-cols-6">
            <p class="col-start-1 col-end-1 font-bold text-gray-900">Actors</p>
            <div class="col-start-2 col-end-7 flex flex-wrap">
              <p v-for="actors in movie.actorList.slice(0, 40)" :key="actors.id">
                {{ actors.name }},&nbsp;
              </p>
            </div>
          </div>
          <div class="movieYear grid grid-cols-6">
            <p class="col-start-1 col-end-1 font-bold text-gray-900">
              Movie year
            </p>
            <p class="col-start-2 col-end-7 flex flex-wrap">
              {{ movie.year }}
            </p>
          </div>
        </section>
      </div>
      <div class="poster col-span-2">
        <div class="grid grid-cols-3 h-full" v-if="posters">
          <div class="posterImage col-span-2 bg-gradient-to-r from-gray-800 to-gray-900">
            <img
              class="h-full w-full object-cover object-top"
              :src="poster.link"
              :alt="poster.id"
              v-for="poster in posters.posters.slice(0, 1)"
              :key="poster.id"
            />
          </div>
          <div class="images col-span-1 flex flex-col gap-4 justify-around p-3 bg-gradient-to-r from-gray-800 to-gray-900">
            <img
              class="object-cover w-full h-64"
              :src="image.image"
              :alt="image.title"
              v-for="image in images.items.slice(0, 3)"
              :key="image.title"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="reviews col-span-2">
      <div class="rev bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full">
        <p class="p-7"></p>
      </div>
      <div class="flex flex-wrap justify-evenly">
        <div
        v-for="review in reviews.items"
        :key="review.username"
        class="my-5 mr-5 relative block overflow-hidden rounded-lg border border-gray-100 p-8 w-1/3"
      >
        <span
          class="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"
        ></span>
        <div class="justify-between sm:flex">
          <div>
            <h5 class="text-xl font-bold text-gray-900">
              {{ review.title }}
            </h5>

            <p class="mt-1 text-xs font-medium text-gray-600">
              {{ review.username }}
            </p>
          </div>
        </div>

        <div class="mt-4 sm:pr-8">
          <p class="text-sm text-gray-500">
            {{ limitText(review.content) }}
          </p>
        </div>

        <dl class="mt-6 flex">
          <div class="flex flex-col-reverse">
            <dt class="text-sm font-medium text-gray-600">Published</dt>
            <dd class="text-xs text-gray-500">{{ review.date }}</dd>
          </div>

          <div class="ml-3 flex flex-col-reverse sm:ml-6">
            <dt class="text-sm font-medium text-gray-600">Rate</dt>
            <dd class="text-xs text-gray-500 relative">
              <span
                class="z-10 inline-flex items-center rounded-full font-semibold"
              >
                {{ review.rate }}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-1.5 h-4 w-4 text-yellow-300"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </span>
            </dd>
          </div>
        </dl>
      </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const movie = ref({})
const reviews = ref({})
const route = useRoute()
const posters = computed(() => {
  return movie.value.posters
})
const images = computed(() => {
  return movie.value.images
})
const limitText = (text) => {
  return text.slice(0, 250) + (text.length > 250 ? '...' : '')
}
const requestMovies = axios.get(
  `https://imdb-api.com/en/API/Title/k_3380b1ze/${route.params.id}/FullCast,Posters,Images`
)
const requestReviews = axios.get(
  `https://imdb-api.com/en/API/Reviews/k_3380b1ze/${route.params.id}`
)

onBeforeMount(() => {
  axios
    .all([requestMovies, requestReviews])
    .then(
      axios.spread((...responses) => {
        movie.value = responses[0].data
        reviews.value = responses[1].data
      })
    )
    .catch((errors) => {
      console.log(errors)
    })
})
</script>

<style scoped>
.headerSection {
    height: 800px;
    width: 100%;
}
.posterImage {
    height: 800px;
    width: 100%;
}
.images {
    height: 800px;
}
</style>
