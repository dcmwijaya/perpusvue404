<template>
    <div class="modal fade" id="ModalEdit" tabindex="-1" aria-labelledby="ModalEditLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title fw-bold text-dark" id="ModalEditLabel"><i class="bi bi-journal-medical me-1"></i>
                        Ubah
                        Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <!-- <div id="formEdit">
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
                                        <input type="number" aria-label="First name" class="form-control form-control-sm"
                                            placeholder="Ubah tahun terbit buku..." v-model="updatedBook.tahun">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div> -->
                </div>
                <div class="modal-footer bg-warning mt-2">
                    <a type="button" class="btn btn-secondary btn-sm text-light" data-bs-dismiss="modal"><i
                            class="bi bi-x-square me-1"></i> Batal</a>
                    <button type="submit" class="btn btn-primary btn-sm text-light"><i class="bi bi-check2-square me-1"></i>
                        Setuju</button>
                </div>
            </div>
        </div>
    </div>
    
    <div class="modal fade" id="ModalHapus" tabindex="-1" aria-labelledby="ModalHapusLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header bg-warning">
                    <h5 class="modal-title fw-bold text-dark" id="ModalHapusLabel"><i class="bi bi-journal-x me-1"></i>
                        Hapus Data</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <span class="span-text-center">Apakah anda yakin ingin menghapus data ini ?</span>
                </div>
                <div class="modal-footer bg-warning mt-2">
                    <a type="button" class="btn btn-secondary btn-sm text-light" data-bs-dismiss="modal"><i
                            class="bi bi-x-square me-1"></i> Batal</a>
                    <button type="submit" class="btn btn-primary btn-sm text-light"><i class="bi bi-check2-square me-1"></i>
                        Setuju</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'MainApp'
    }
</script>