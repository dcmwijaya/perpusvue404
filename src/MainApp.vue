<template>
  <Navbar />
  <router-view :bookList="booksData" @store="storeData"/>
  <Footer />
</template>

<script>
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue';

  export default {
    name: 'MainApp',
    components: {
      Navbar, Footer
    },
    methods: {
      storeData(bookCreated){
        console.log(bookCreated);
        alert("Data berhasil ditambahkan!");
      }
    },
    data() {
      return {
        booksData: [
          {_id: 1, judul: "Things 1", pengarang: "David Williams", tahun: "2018"},
          {_id: 2, judul: "Things 2", pengarang: "Robert San Diego", tahun: "2019" },
          {_id: 3, judul: "Things 3", pengarang: "John Thomson", tahun: "2020" },
          {_id: 4, judul: "Things 4", pengarang: "Napoleon Davinchi", tahun: "2021" },
          {_id: 5, judul: "Things 5", pengarang: "Stephanus Eoyone", tahun: "2022" }
        ]
      }
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