<template>
  <div class="menu">
    <nuxt-link to="/"> Home (tests) </nuxt-link>
    <nuxt-link to="/api-example"> asyncData() </nuxt-link>
    <nuxt-link to="/vuex-example"> Vuex Example </nuxt-link>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.menu {
  width: 20%;
  border-right: 1px solid #000;
  padding: 20px;
  padding-right: 30px;

  a {
    display: block;
    color: lightgrey;
    text-decoration: none;

    &:hover,
    &.nuxt-link-exact-active {
      color: black;
    }
  }
}
</style>
