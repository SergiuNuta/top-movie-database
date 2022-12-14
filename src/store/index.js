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
      state.movies = movies.items
    }
  },
  actions: {
    async fetchMovies ({ commit }) {
      try {
        const data = await axios.get('https://imdb-api.com/en/API/Top250Movies/k_qpymkukz')
        commit('SET_Movies', data.data)
      } catch (error) {
        console.log(error)
      }
    }
  }
})
