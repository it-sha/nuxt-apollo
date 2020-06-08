<template>
  <div class="container">
    <NavBar />

    <div class="content">
      <nuxt />
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
body {
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
}

.container {
  margin: 0 auto;
  display: flex;
  min-height: 90vh;
}

.content {
  width: 80%;
  padding: 20px;
  padding-left: 30px;
}
</style>
