/* Materi for loop
for adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan.
Blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi tersebut terpenuhi.

Sintak perulangan for:

for (init statement; kondisi statement; post statement) {
  blok perulangan
}

- init statement akan dieksekusi hanya sekali di awal sebelum perulangan.
- Kondisi akan dilakukan pengecekan dalam setiap perulangan, jika true, maka perulangan dilakukan, jika false maka perulangan dihentikan.
- Post statement akan dieksekusi setiap kali di akhir perulangan
- Init statement, kondisi statement, dan post statement tidak wajib diisi, jika kondisi tidak diisi, berarti kondisi selalu bernilai true.
*/

// Contoh:

// Infinity loop
// for (let i = 1; i >= 1; i++) {
//   console.log(i);
// }
// Untuk keadaan i = 1, i lebih dari atau sama dengan 1, i bertambah satu, maka print i


// Perulangan yang hanya dijalankan sekali
 for (let i = 1; i <= 1; i++) {
   console.log(i);
}

// Perulangan yang jaraknya bisa ditentukan

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let a = 200; a <= 210; a++) {
  console.log(`Perulangan ke ${a}`);
}
