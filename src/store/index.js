import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    movies: []
  },
  getters: {
    getMovies: (state) => state.movies
  },
  mutations: {
    SET_Movies (state, movies) {
      state.movies = movies
    }
  },
  actions: {
    async fetchMovies ({ commit }) {
      try {
        const data = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_6fg5u00c')
        commit('SET_Movies', data.data)
      } catch (error) {
        console.log(error)
      }
    }
    // async searchMovie ({ commit }) {
    //   try {
    //     const data = await axios.get(`https://imdb-api.com/en/API/SearchMovie/k_6fg5u00c/${title}`)
    //     commit('SET_Movie', data.data)
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }
  }
})
