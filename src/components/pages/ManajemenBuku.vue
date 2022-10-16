<template>
    <main>
        <div class="manjbuku" style="text-align: center">
            <h1>Menu Manajemen Buku</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel.
                Selain itu juga anda dapat mencari, menambah, mengubah, serta menghapus data buku yang ada di website ini.</p><hr><br>
            <div class="input-group">
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text"><i class="bi bi-journal-richtext me-1"></i>Buku</span>
                        <input type="text" aria-label="First name" class="form-control form-control-sm formin-group" placeholder="Isi data..">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text"><i class="bi bi-people-fill me-1"></i>Pengarang</span>
                        <input type="text" aria-label="First name" class="form-control form-control-sm formin-group" placeholder="Isi data..">
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="input-group input-group-sm">
                        <span class="input-group-text"><i class="bi bi-calendar-range-fill me-1"></i>Tahun</span>
                        <input type="text" aria-label="First name" class="form-control form-control-sm formin-group" placeholder="Isi data..">
                        <button type="button" class="btn btn-sm btn-warning"><i class="bi bi-journal-plus me-1"></i>Tambah</button>
                    </div>
                </div>
            </div><br>
            <table class="table">
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
                    <tr class="table-active">
                        <th scope="row">1</th>
                        <td>Things 1</td>
                        <td>David Williams</td>
                        <td>2018</td>
                        <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"><i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"><i class="bi bi-journal-x me-1"></i>Hapus</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Things 2</td>
                        <td>Robert San Diego</td>
                        <td>2019</td>
                        <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"><i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"><i class="bi bi-journal-x me-1"></i>Hapus</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="table-active">
                        <th scope="row">3</th>
                        <td>Things 3</td>
                        <td>John Thomson</td>
                        <td>2020</td>
                        <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"><i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"><i class="bi bi-journal-x me-1"></i>Hapus</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Things 4</td>
                        <td>Napoleon Davinchi</td>
                        <td>2021</td>
                        <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"><i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"><i class="bi bi-journal-x me-1"></i>Hapus</button>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="table-active">
                        <th scope="row">5</th>
                        <td>Things 5</td>
                        <td>Stephanus Eoyone</td>
                        <td>2022</td>
                        <td>
                            <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                                <div class="btn-group" role="group" aria-label="First group">
                                    <button type="button" class="btn btn-sm btn-outline-secondary btn-action"><i class="bi bi-journal-medical me-1"></i>Edit</button>
                                    <button type="button" class="btn btn-sm btn-outline-danger btn-action"><i class="bi bi-journal-x me-1"></i>Hapus</button>
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
                        <input type="text" class="form-control form-control-sm formin-group" aria-label="Search" placeholder="Cari data buku..">
                        <button type="button" class="btn btn-sm btn-success"><i class="bi bi-search me-1"></i>Cari</button>
                    </div>
                </div>
            </div><br>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainApp'
    }
</script>