// Penggunaan expression pada string template
// Selain menambah variabel, kita pun bisa melakukan menambahkan berbagai operator seperti perbandingan, aritmatika, dan lain-lain. Contoh:

const objek = "Siswa";

// Nilai
const nilaiAbsen = 80;
const nilaiUjian = 90;

// Standar lulus. Disnilah penggunaan expression
const standarAbsen = `Jika dilihat, anak ini ${nilaiAbsen > 80}`;
const standarUjian = `Jika dilihat, anak ini ${nilaiUjian > 80}`;
const lulus = ((nilaiAbsen + nilaiUjian) / 2) > 80;

// Lulus absen dan ujian
console.log(`Apakah anak ini lulus secara kehadiran? ${standarAbsen}`);
console.log(`Apakah anak ini lulus secara nilai? ${standarUjian}`);
// Dan ternyata, string template juga bisa dipakai di dalam console.


// Lulus atau tidak lulus
if (lulus == true) {
  console.log("Selamat, kamu lulus");
}

else {
  console.log("Maaf, kamu belum lulus");
}
