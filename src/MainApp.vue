<template>
  <Navbar />
  <Content />
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'MainApp',
  components: {
    Navbar, Content, Footer
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
