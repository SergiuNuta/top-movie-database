<template>
    <div calssName="movieCard h-48">
                <div className="w-60 min-h-full mb-5">
                    <div className="relative w-full flex flex-col justify-between shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer group">
                        <div className="overflow-hidden w-full">
                            <img className="w-full h-80 object-fill transition duration-700 ease-in-out group-hover:opacity-60" :src='url(movie.image)' :alt='movie.title' />
                        </div>
                        <div className="pl-2 py-3 h-28">
                            <router-link :to="`/movie/${movie.id}`">
                                <h1 className="text-gray-800 font-semibold text-base group-hover:text-red-500 transition duration-300 ease-in-out">{{ movie.fullTitle }}</h1>
                            </router-link>
                        </div>
                        <div className="pt-2 pl-2 absolute bottom-0 flex justify-items-center items-baseline">
                                <img className="h-5" src="../assets/star-icon.png" alt="star">
                                <p className="mr-2 text-2xl  text-gray-600">{{ movie.imDbRating }}</p>
                            </div>
                    </div>
                </div>
    </div>
</template>

<script setup>
// eslint-disable-next-line no-undef
defineProps({
  movie: {}
})

const url = (data) => {
  const occurence = data.split('@').length - 1
  const urlCopy = data.split('@')
  if (occurence === 2) {
    return urlCopy[0] + '@@' + '.jpg'
  } else {
    return urlCopy[0] + '@' + '.jpg'
  }
}
</script>
