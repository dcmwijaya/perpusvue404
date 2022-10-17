<template>
    <main>
        <div class="tampilDataKatalog" style="text-align: center">
            <h1>Menu Katalog</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel. 
                Selain itu anda juga dapat melakukan pencarian untuk menemukan data buku yang ada di website ini.</p><hr><br>
            <div id="TombolAksi">
                <div class="row">
                    <div class="col-md-8"></div>
                    <div class="col-md-4">
                        <div class="input-group">
                            <input type="text" class="form-control formin-group" aria-label="Search" placeholder="Cari data buku..">
                            <button type="button" class="btn btn-success"><i class="bi bi-search me-1"></i>Cari</button>
                        </div>
                    </div>
                </div>
            </div><br>
            <table class="table table-warning table-striped">
                <thead class="table bg-dark text-white">
                    <tr>
                        <th scope="col">No</th>
                        <th scope="col" class="col-md-4"><i class="bi bi-journal-richtext me-1"></i>Nama Buku</th>
                        <th scope="col" class="col-md-4"><i class="bi bi-people-fill me-1"></i>Pengarang</th>
                        <th scope="col" class="col-md-2"><i class="bi bi-calendar-range-fill me-1"></i>Tahun</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(book, index) in bookList" :key="index">
                        <td>{{ index + 1 }}</td>
                        <td>{{ book.judul }}</td>
                        <td>{{ book.pengarang }}</td>
                        <td>{{ book.tahun }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainApp',
        props: ["bookList"]
    }
</script>