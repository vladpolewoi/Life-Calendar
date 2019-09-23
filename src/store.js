import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    birthDate: '',
    lifeLength: 64
  },
  getters: {
    birthDate: state => state.birthDate,
    birthYear: state => new Date(state.birthDate).getFullYear(),
    years: state => {
      const now = new Date().getYear()
      const birthYear = new Date(state.birthDate).getYear()
      return now - birthYear
    },
    lifeLength: state => state.lifeLength
  },
  mutations: {
    SET_BIRTH_DATE(state, date) {
      state.birthDate = date
      localStorage.date = date
    }
  },
  actions: {
    setBirthDate({ commit }, payload) {
      commit('SET_BIRTH_DATE', payload)
    }
  }
})
