<template>
    <main>
        <div class="katalog" style="text-align: center">
            <h1>Menu Katalog</h1>
            <p class="text-muted">Pada menu ini anda dapat melihat data buku yang direpresentasikan melalui tabel. 
                Selain itu anda juga dapat melakukan pencarian untuk menemukan data buku yang ada di website ini.</p><hr><br>
            <div class="input-group">
                <div class="col-md-8"></div>
                <div class="col-md-4">
                    <div class="input-group">
                        <input type="text" class="form-control form-control-sm formin-group" aria-label="Search"
                            placeholder="Cari data buku..">
                        <button type="button" class="btn btn-sm btn-success"><i class="bi bi-search me-1"></i>Cari</button>
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
                    </tr>
                </thead>
                <tbody>
                    <tr class="table-active">
                        <th scope="row">1</th>
                        <td>Things 1</td>
                        <td>David Williams</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Things 2</td>
                        <td>Robert San Diego</td>
                        <td>2019</td>
                    </tr>
                    <tr class="table-active">
                        <th scope="row">3</th>
                        <td>Things 3</td>
                        <td>John Thomson</td>
                        <td>2020</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Things 4</td>
                        <td>Napoleon Davinchi</td>
                        <td>2021</td>
                    </tr>
                    <tr class="table-active">
                        <th scope="row">5</th>
                        <td>Things 5</td>
                        <td>Stephanus Eoyone</td>
                        <td>2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'MainApp'
    }
</script>