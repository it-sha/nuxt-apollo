<template>
  <div class="menu">
    <nuxt-link to="/"> Home (tests) </nuxt-link>
    <nuxt-link to="/test"> New page </nuxt-link>
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

    &:hover {
      color: black;
    }
  }
}
</style>
