import api from '../servises/api.js'

/* eslint-disable no-unused-vars */
export const state = () => ({
  products: []
})

export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  }
}

export const actions = {
  async fetchFroducts({ commit }) {
    const products = await api.getProducts()
    commit('SET_PRODUCTS', products)
  }
}
