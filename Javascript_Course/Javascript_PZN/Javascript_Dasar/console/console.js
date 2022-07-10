// Materi console
// Jadi, console adalah sebuah fitur yang ada di javascript yang bisa melakukan logging(mencatat suatu proses) tanpa mengganggu alur kerja aplikasi dan interaksi antara user. Atau bisa diartikan juga, console ini memprint suatu pernyataan ke kode javascriptnya, bukan ke html nya. Jadi, jika pakai console di html, maka otomatis dia tidak akan muncul. Kalau ingin melihat hasilnya, harus inspect terlebih dahulu.
// dalam console, ada console error, log, info, dan warn. Sama-sama bisa memprint suatu pernyataan atau nilai, tapi berbeda tujuan.

// Dalam logging itu ada tingkatannya. Makin ke bawah, maka makin besar tingkatannya
console.debug("halo dunia"); // debug berfungsi untuk menampilkan informasi yang detail atau yang kecil. Secara default, debug tidak ditampilkan di console. Tapi bisa kita tampilkan dengan merubah settingan default level consolenya pada browser.
console.info("halo dunia"); // info berfungsi untuk menampilkan informasi
console.warn("halo dunia");// Berfungsi untuk memberi peringatan
console.error("halo dunia"); // Berfungsi untuk memberitahu tentang error
console.table("halo dunia"); // Berfungsi untuk memberi informasi dalam bentuk tabel

// Tip: jangan terlalu banyak memakai console demi menghindari penurunan performa javascript


