<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Welcome msg=""/>
</template>

<script>
import Welcome from './components/Welcome.vue'

export default {
  name: 'MainApp',
  components: {
    Welcome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
