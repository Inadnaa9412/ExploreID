// menu
var tombolMenu = $(".tombol-menu");  // Mendapatkan elemen tombol menu dengan class 'tombol-menu'
var menu = $("nav .menu ul");  // Mendapatkan elemen daftar menu di dalam <nav>

// Fungsi untuk menangani klik pada tombol menu dan menu
function klikMenu() {
    tombolMenu.click(function () {  // Ketika tombol menu diklik
        menu.toggle();  // Menampilkan atau menyembunyikan menu
    });
    menu.click(function () {  // Ketika area menu diklik
        menu.toggle();  // Menyembunyikan menu
    });
}

// Ketika dokumen siap, mengecek ukuran jendela dan mengaktifkan menu untuk perangkat kecil
$(document).ready(function () {
    var width = $(window).width();  // Mendapatkan lebar jendela browser
    if (width < 990) {  // Jika lebar jendela lebih kecil dari 990px
        klikMenu();  // Menjalankan fungsi klikMenu untuk perangkat kecil
    }
})

// Menangani perubahan ukuran jendela
$(window).resize(function () {
    var width = $(window).width();  // Mendapatkan lebar jendela browser
    if (width > 989) {  // Jika lebar jendela lebih besar dari 989px
        menu.css("display", "block");  // Menampilkan menu
    } else {
        menu.css("display", "none");  // Menyembunyikan menu
    }
    klikMenu();  // Memanggil fungsi klikMenu untuk perangkat kecil
});

// Efek scroll pada halaman
$(document).ready(function () {
    var scroll_pos = 0;  // Variabel untuk menyimpan posisi scroll
    $(document).scroll(function () {  // Ketika halaman di-scroll
        scroll_pos = $(this).scrollTop();  // Mendapatkan posisi scroll saat ini
        if (scroll_pos > 0) {  // Jika halaman sudah digulir
            $("nav").addClass("putih");  // Menambahkan class 'putih' pada elemen <nav>
            $("nav img.hitam").show();  // Menampilkan gambar dengan class 'hitam'
            $("nav img.putih").hide();  // Menyembunyikan gambar dengan class 'putih'
        } else {
            $("nav").removeClass("putih");  // Menghapus class 'putih' dari elemen <nav>
            $("nav img.hitam").hide();  // Menyembunyikan gambar dengan class 'hitam'
            $("nav img.putih").show();  // Menampilkan gambar dengan class 'putih'
        }
    })
});

// Mendapatkan elemen-elemen yang diperlukan untuk form pemesanan
const paketSelect = document.getElementById('paket');
const pesertaInput = document.getElementById('peserta');
const hariInput = document.getElementById('hari');
const totalHargaDiv = document.getElementById('totalHarga');
const formContainer = document.getElementById('formContainer');
const overlay = document.getElementById('overlay');

// Fungsi untuk menghitung total harga
function calculateTotal() {
    const paketPrice = parseInt(paketSelect.value) || 0;  // Mendapatkan harga paket, jika tidak ada, set ke 0
    const jumlahPeserta = parseInt(pesertaInput.value) || 0;  // Mendapatkan jumlah peserta, jika tidak ada, set ke 0
    const lamaHari = parseInt(hariInput.value) || 0;  // Mendapatkan jumlah hari, jika tidak ada, set ke 0
    const total = paketPrice * jumlahPeserta * lamaHari;  // Menghitung total harga

    totalHargaDiv.textContent = `Total Harga: Rp ${total.toLocaleString()}`;  // Menampilkan total harga dalam format IDR
}

// Fungsi untuk menampilkan form pemesanan paket wisata
function showForm(paket, harga) {
    const namaPaketField = document.getElementById('namaPaket');
    const hargaPaketField = document.getElementById('hargaPaket');

    // Mengisi field nama paket dan harga dengan nilai yang diterima
    namaPaketField.value = paket;
    hargaPaketField.value = `Rp ${harga.toLocaleString()}/hari`;

    // Menghitung total harga jika ada peserta/hari
    calculateTotal();

    // Menampilkan form pemesanan
    formContainer.classList.add('show');
    overlay.classList.add('show');
}

// Fungsi untuk menutup form pemesanan
function closeForm() {
    formContainer.classList.remove('show');  // Menyembunyikan form pemesanan
    overlay.classList.remove('show');  // Menyembunyikan overlay
}

// Menambahkan event listener pada input peserta dan hari untuk menghitung total harga saat input berubah
pesertaInput.addEventListener('input', calculateTotal);
hariInput.addEventListener('input', calculateTotal);

// Mendapatkan elemen-elemen yang diperlukan untuk deskripsi paket wisata
const descriptionContainer = document.getElementById('descriptionContainer');
const descriptionTitle = document.getElementById('descriptionTitle');
const descriptionText = document.getElementById('descriptionText');
const descriptionVideo = document.getElementById('descriptionVideo');

// Fungsi untuk menampilkan deskripsi paket wisata
function showDescription(title, text, videoUrl) {
    descriptionTitle.textContent = title;  // Mengisi judul deskripsi
    descriptionText.textContent = text;  // Mengisi teks deskripsi
    descriptionVideo.src = videoUrl;  // Mengisi URL video untuk ditampilkan
    descriptionContainer.classList.add('show');  // Menampilkan deskripsi
    overlay.classList.add('show');  // Menampilkan overlay
}

// Fungsi untuk menutup deskripsi
function closeDescription() {
    descriptionContainer.classList.remove('show');  // Menyembunyikan deskripsi
    overlay.classList.remove('show');  // Menyembunyikan overlay
    descriptionVideo.src = '';  // Menghentikan video dengan menghapus sumbernya
}
