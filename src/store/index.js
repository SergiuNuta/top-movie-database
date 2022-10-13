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
        const data = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_1asiedt1')
        commit('SET_Movies', data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
