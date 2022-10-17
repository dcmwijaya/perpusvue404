<template>
    <main>
        <div class="tampilDataKatalog" style="text-align: center">
            <h1>Menu Katalog</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel. 
                Selain itu anda juga dapat melakukan pencarian untuk menemukan data buku yang ada di website ini.</p><hr><br>
            <div id="TombolAksi">
                <div class="row">
                    <div class="col-6"></div>
                    <div class="col-2">
                        <a href="/Katalog" type="button" class="btn btn-secondary">
                            <i class="bi bi-arrow-clockwise me-1"></i> Refresh</a>
                    </div>
                    <div class="col-4">
                        <div class="input-group">
                            <input type="text" class="form-control formin-group" aria-label="Search" placeholder="Cari data buku..">
                            <button @click="search_Data(book, index)" type="button" class="btn btn-success"><i class="bi bi-search me-1"></i>Cari</button>
                        </div>
                    </div>
                </div>
            </div><br>
            <div id="formCari" v-if="formMode == 'search'">
                <form class="form-row">
                    <div class="row">
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    v-model="searchData.judul" disabled readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    v-model="searchData.pengarang" disabled readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i
                                        class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                <input type="number" aria-label="First name" class="form-control form-control-sm"
                                    v-model="searchData.tahun" disabled readonly>
                            </div>
                        </div>
                    </div>
                </form>
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
        props: ["bookList"],
        methods: {
            search_Data(book, index) {
                this.$emit("search", book, index);
                this.formMode = "search";
                this.bookIndex = index;
                this.searchData._id = book._id;
                this.searchData.judul = book.judul;
                this.searchData.pengarang = book.pengarang;
                this.searchData.tahun = book.tahun;
            }
        },
        data() {
            return {
                formMode: "",
                bookIndex: "",
                searchData: {
                    _id: "",
                    judul: "",
                    pengarang: "",
                    tahun: ""
                }
            }
        }
    }
</script>