<template>
    <main>
        <div class="manjbuku" style="text-align: center">
            <h1>Menu Manajemen Buku</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel.
                Selain itu juga anda dapat mencari, menambah, mengubah, serta menghapus data buku yang ada di website
                ini.</p>
            <hr><br>
            <div id="formTambah">
                <form class="form-row" @submit.prevent="submitAdd">
                    <div class="row input-group">
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.judul">
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                                <input type="text" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.pengarang">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="input-group input-group-sm">
                                <span class="input-group-text"><i
                                        class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                <input type="number" aria-label="First name" class="form-control form-control-sm"
                                    placeholder="Isi data.." v-model="newBook.tahun">
                            </div>
                        </div>
                        <div class="col-2">
                            <button type="submit" class="btn btn-sm btn-warning col-12"><i
                                    class="bi bi-journal-plus me-1"></i>Tambah</button>
                        </div>
                    </div>
                </form>
            </div><br>
            <table class="table table-warning table-striped">
                <thead class="table bg-dark text-white">
                    <tr>
                        <th scope="col">ID</th>
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
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"
                                        data-bs-toggle="modal" data-bs-target="#EditModal" @click="showEdit(book, index)">
                                        <i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"
                                        data-bs-toggle="modal" data-bs-target="#HapusModal" @click="showHapus(book, index)"><i
                                            class="bi bi-journal-x me-1"></i>Hapus</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="input-group">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                    <div class="input-group">
                        <input type="text" class="form-control form-control-sm formin-group" aria-label="Search"
                            placeholder="Cari data buku..">
                        <button type="button" class="btn btn-sm btn-success"><i
                                class="bi bi-search me-1"></i>Cari</button>
                    </div>
                </div>
            </div><br>
        </div>
    </main>

    <div class="modal fade" id="EditModal" tabindex="-1" aria-labelledby="EditModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title fw-bold text-dark" id="EditModalLabel"><i
                            class="bi bi-journal-medical me-1"></i> Ubah
                        Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="formEdit">
                        <form class="form-row" @submit.prevent="submitChange">
                            <div class="row input-group">
                                <div class="col-12">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text col-3 text-primary"><i
                                                class="bi bi-journal-richtext me-1"></i>Buku</span>
                                        <input type="text" aria-label="First name" class="form-control form-control-sm"
                                            placeholder="Ubah judul buku..." v-model="updatedBook.judul">
                                    </div>
                                </div>
                            </div><br>
                            <div class="row input-group">
                                <div class="col-12">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text col-3 text-primary"><i
                                                class="bi bi-people-fill me-1"></i>Pengarang</span>
                                        <input type="text" aria-label="First name" class="form-control form-control-sm"
                                            placeholder="Ubah pengarang buku..." v-model="updatedBook.pengarang">
                                    </div>
                                </div>
                            </div><br>
                            <div class="row input-group">
                                <div class="col-12">
                                    <div class="input-group input-group-sm">
                                        <span class="input-group-text col-3 text-primary"><i
                                                class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                                        <input type="number" aria-label="First name"
                                            class="form-control form-control-sm" placeholder="Ubah tahun terbit buku..."
                                            v-model="updatedBook.tahun">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer bg-warning mt-2">
                    <a type="button" class="btn btn-secondary btn-sm text-light" data-bs-dismiss="modal"><i
                            class="bi bi-x-square me-1"></i> Batal</a>
                    <button type="submit" class="btn btn-primary btn-sm text-light"><i
                            class="bi bi-check2-square me-1"></i>
                        Setuju</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="HapusModal" tabindex="-1" aria-labelledby="HapusModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title fw-bold text-dark" id="HapusModalLabel"><i class="bi bi-journal-x me-1"></i>
                        Hapus Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span class="span-text-center">Apakah anda yakin ingin menghapus data ini ?</span>
                </div>
                <div class="modal-footer bg-warning mt-2">
                    <a type="button" class="btn btn-secondary btn-sm text-light" data-bs-dismiss="modal"><i
                            class="bi bi-x-square me-1"></i> Batal</a>
                    <button type="submit" class="btn btn-primary btn-sm text-light"><i
                            class="bi bi-check2-square me-1"></i>
                        Setuju</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MainApp',
    props: ["bookList"],
    bookIndex: "",
    updateBook: {
        _id: "",
        judul: "",
        pengarang: "",
        tahun: ""
    },
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
        },
        showEdit(book, index){
            this.bookIndex = index;
            this.updatedBook._id = book._id;
            this.updatedBook.judul = book.judul;
            this.updatedBook.pengarang = book.pengarang;
            this.updatedBook.tahun = book.tahun;
        },
        deleteBook(book, index) {
            this.$emit("delete", book, index);
        }
    },
    data() {
        return {
            newBook: {
                judul: "",
                pengarang: "",
                tahun: ""
            }
        }
    }
}
</script>