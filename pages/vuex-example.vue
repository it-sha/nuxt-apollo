<template>
  <div>
    <h1>Vuex Example</h1>
    <div>
      <button @click="loadProducts()">Load products</button>
    </div>
    <div v-for="product in products" :key="product.id">
      Product #{{ product.id }}
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  // data: () => ({
  //   products: [{ id: 1 }, { id: 2 }, { id: 3 }]
  // }),

  async fetch({ store, error }) {
    try {
      await store.dispatch('products/fetchFroducts')
    } catch (e) {
      error({
        statusCode: 404,
        message: "Can't get product list"
      })
    }
  },

  computed: {
    ...mapState({
      products: (state) => state.products.products
    })
  },

  methods: {
    ...mapActions({
      loadProducts: 'products/fetchFroducts'
    })
  }
}
</script>

<style lang="scss" scoped>
button {
  margin: 5px 0;
}
</style>
