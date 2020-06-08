<template>
  <div class="container">
    <div>
      <h1>asyncData()</h1>

      <div v-for="product in products" :key="product.id">
        Product #{{ product.id }}
      </div>
    </div>
  </div>
</template>

<script>
// api данные - https://reqres.in/api/products/

export default {
  async asyncData({ $axios, route, error }) {
    try {
      const products = await $axios
        .get('https://reqres.in/api/products/') // эмуляция ошибки: https://reqres2.in/api/products/
        .then((r) => r.data.data)

      return {
        products
      }
    } catch (e) {
      error({
        statusCode: 404,
        message: "Can't get product list"
      })
    } finally {
    }
  },

  data: () => ({
    products: []
  })
}
</script>

<style lang="scss" scoped></style>
