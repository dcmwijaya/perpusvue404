<template>
    <main>
        <div class="manjbuku" style="text-align: center">
            <h1>Menu Manajemen Buku</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel.
                Selain itu juga anda dapat mencari, menambah, mengubah, serta menghapus data buku yang ada di website
                ini.</p>
            <hr><br>
            <div id="TombolAksi">
                <div class="row">
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-warning col-12" @click="formMode = 'create'">
                            <i class="bi bi-journal-plus me-1"></i>Tambah Buku</button>
                    </div>
                    <div class="col-4"></div>
                    <div class="col-2">
                        <a href="/ManajemenBuku" type="button" class="btn btn-secondary">
                            <i class="bi bi-arrow-clockwise me-1"></i> Refresh</a>
                    </div>
                    <div class="col-4">
                        <div class="input-group">
                            <input type="text" class="form-control formin-group" aria-label="Search" placeholder="Cari data buku..">
                            <button @click="search_Data(book, index)" type="button" class="btn btn-success"><i
                                    class="bi bi-search me-1"></i>Cari</button>
                        </div>
                    </div>
                </div>
            </div><br>
            <div id="formTambah" v-if="formMode == 'create'">
                <form class="form-row" @submit.prevent="submitAdd">
                    <div class="row">
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-create"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.judul">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-create"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.pengarang">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-create"><i
                                        class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                <input type="number" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.tahun">
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="submit" class="btn btn-sm btn-warning col-12">
                                <i class="bi bi-check2-square me-1"></i>Tambah</button>
                        </div>
                    </div>
                </form>
            </div>
            <div id="formEdit" v-if="formMode == 'edit'">
                <form class="form-row" @submit.prevent="submitChange">
                    <div class="row">
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-update"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm" placeholder="Ubah judul buku..."
                                    v-model="updatedBook.judul">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-update"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm" placeholder="Ubah pengarang buku..."
                                    v-model="updatedBook.pengarang">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-update"><i class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                <input type="number" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Ubah tahun..." v-model="updatedBook.tahun">
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="submit" class="btn btn-sm btn-info col-12">
                                <i class="bi bi-check2-square me-1"></i>Ubah</button>
                        </div>
                    </div>
                </form>
            </div>
            <div id="formCari" v-if="formMode == 'search'">
                <form class="form-row">
                    <div class="row">
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm" v-model="searchData.judul" disabled readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm" v-model="searchData.pengarang" disabled readonly>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text bginput-search"><i
                                        class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                <input type="number" aria-label="First name" class="form-control form-control-sm" v-model="searchData.tahun" disabled readonly>
                            </div>
                        </div>
                    </div>
                </form>
            </div><br>
            <div id="tampilDataManajemenBuku">
                <table class="table table-warning table-striped">
                    <thead class="table bg-dark text-white">
                        <tr>
                            <th scope="col">No</th>
                            <th scope="col" class="col-md-4"><i class="bi bi-journal-richtext me-1"></i>Nama Buku</th>
                            <th scope="col" class="col-md-4"><i class="bi bi-people-fill me-1"></i>Pengarang</th>
                            <th scope="col" class="col-md-2"><i class="bi bi-calendar-range-fill me-1"></i>Tahun</th>
                            <th scope="col" class="col-md-2"><i class="bi bi-activity me-1"></i>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(book, index) in bookList" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ book.judul }}</td>
                            <td>{{ book.pengarang }}</td>
                            <td>{{ book.tahun }}</td>
                            <td>
                                <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                    <div class="btn-group" role="group" aria-label="First group">
                                        <button @click="showEdit(book, index)" type="button" class="btn btn-sm btn-outline-secondary btn-action">
                                            <i class="bi bi-journal-medical me-1"></i>Edit</button>
                                        <button @click="HapusBuku(book, index)" type="button" class="btn btn-sm btn-outline-danger btn-action">
                                            <i class="bi bi-journal-x me-1"></i>Hapus</button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: 'MainApp',
    props: ["bookList"],
    methods: {
        submitAdd() {
            const bookCreated = {
                judul: this.newBook.judul,
                pengarang: this.newBook.pengarang,
                tahun: this.newBook.tahun
            };
            this.$emit("store", bookCreated);
            this.newBook.judul = "";
            this.newBook.pengarang = "";
            this.newBook.tahun = "";
        },
        submitChange() {
            const bookChanged = this.updatedBook;
            this.$emit("update", bookChanged, this.bookIndex);
            this.formMode = "";
        },
        showEdit(book, index){
            this.formMode = "edit";
            this.bookIndex = index;
            this.updatedBook._id = book._id;
            this.updatedBook.judul = book.judul;
            this.updatedBook.pengarang = book.pengarang;
            this.updatedBook.tahun = book.tahun;
        },
        HapusBuku(book, index) {
            this.$emit("delete", book, index);
        },
        search_Data(book, index) {
            this.formMode = "search";
            this.$emit("search", book, index);
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
            newBook: {
                judul: "",
                pengarang: "",
                tahun: ""
            },
            updatedBook: {
                _id: "",
                judul: "",
                pengarang: "",
                tahun: ""
            },
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