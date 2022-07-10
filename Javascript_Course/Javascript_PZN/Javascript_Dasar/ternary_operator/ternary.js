/// Materi ternary operator
// Jadi, ternary operator itu digunakan pada kondisi yang sangat sederhana. konsepnya mirip-mirip dengan if else, dimana jika dia true, maka dia akan mengambil nilai pertama
// Dan jika false, maka dia akan mengambil nilai kedua. Contoh perbandingannya dengan if else biasa:

// Contoh jika dia pake if else
const nilai1 = 75;
let ucapan1;

if (nilai1 >= 75) {
  ucapan1 = "Selamat, anda lulus";
}
else {
  ucapan1 = "Maaf, nilai kamu belum mencukupi";
}

console.log(ucapan1);

// Contoh dengan ternary operator
const nilai2 = 60;
let ucapan2 = nilai2 >= 75 ? "Selamat, anda lulus" : "Maaf, nilai anda belum mencukupi";

console.log(`${ucapan2}`);
// Terlihat disini, bahwa dengan ternary operator, bisa dipersingkat. Tapi ini hanya berlaku untuk kasus-kasus yang sederhana.
