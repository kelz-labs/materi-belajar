// Materi do while
// do while adalah suatu perulangan yang mirip-mirip dengan while
// Hanya saja, untuk statement ditaruh di atas while
// Jadi logikanya seperti ini:
/*
do {
  statement
} while (kondisi);

Contoh:
*/

//do {
//console.log("Haikel");
//} while (100 > 99);
// Disini dia akan melakukan infinity loop karena memenuhi kondisi.
// Bagaimana jika hanya sekali memenuhi kondisi?

do {
  console.log("Yui")
} while (100 > 101);
// Syaratnya aja salah, mengapa bisa melakukan sekali perulangan?
// Karena pengecekan kondisi di do while dilakukan setelah perulangan, jadi otomatis si console.log nya ikut terprint
// Berbeda dengan while biasa yang pengecekan kondisinya ada sebelum perulangan, jadi jika kondisinya salah, maka dia tidak akan melakukan perulangan

