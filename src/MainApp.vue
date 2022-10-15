<template>
  <Navbar />
  <router-view />
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'MainApp',
    components: {
      Navbar
    }
  }
</script>

<style scoped>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>