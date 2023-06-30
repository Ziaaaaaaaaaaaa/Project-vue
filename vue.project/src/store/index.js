import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    productsData: []
  },
  getters: {
  },
  mutations: {
    setState(state, products){
      state.productsData = products
    }
  },
  actions: {
    async fetchData({commit}){
      const fetchedData = await axios.get('https://ziaaaaaaaaaaaa.github.io/JSON-data/server.json')
      commit('setState', fetchedData.data.products)
    }
  },
  modules: {
  }
})
// dispatch triggers actions and commits triggers mutations and mutations trigger the state