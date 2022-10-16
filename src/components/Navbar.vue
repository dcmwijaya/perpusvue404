<template>
   <nav class="navbar navbar-expand-lg navbar-bg">
    <div class="container-fluid">
      <a class="navbar-brand me-5" href="#" style="pointer-events: none">
        <img src="favicon/favicon-32x32.png" alt="Logo" width="30" height="24" class="d-inline-block align-text-top"/>
        perpusvue404
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <router-link to="/" class="nav-link active me-3 navbar-link" aria-current="page"><i class="bi bi-house-fill me-1"></i>Beranda</router-link>
          <router-link to="/Katalog" class="nav-link active me-3 navbar-link" aria-current="page"><i class="bi bi-journal-bookmark-fill me-1"></i>Katalog</router-link>
          <router-link to="/ManajemenBuku" class="nav-link active navbar-link" aria-current="page"><i class="bi bi-book-half me-1"></i>Manajemen Buku</router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
      name: 'MainApp'
  }
</script>