<template>
    <div calssName="movieCard">
                <div className="w-60 min-h-full mb-5">
                    <div className="w-full flex flex-col justify-between shadow hover:shadow-lg transition duration-300 ease-in-out cursor-pointer group">
                        <div className="overflow-hidden relative w-full">
                            <img className="w-full h-80 object-fill transition duration-700 ease-in-out group-hover:opacity-60" :src='url(movie.image)' :alt='movie.title' />
                        </div>
                        <div className="px-4 py-3">
                            <a href="#" className=""><h1 className="text-gray-800 font-semibold text-lg hover:text-red-500 transition duration-300 ease-in-out">{{ movie.fullTitle }}</h1></a>
                        <div className="flex py-2">
                            <p className="mr-2 text-xs text-gray-600">{{ movie.imDbRating }}</p>
                        </div>
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
