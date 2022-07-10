// Belajar operator aritmatika, misal:
let tahunKemarin = 2021;
let tahunIni = 2022;
let aktivitas = "Alhamdulilah, sekarang lanjut Ngoding, belajar hal baru, dan olahraga";
let nganggur = "Tidur, menghalu";

if (tahunIni > tahunKemarin) {
  console.log(aktivitas);
}

else {
  console.log(nganggur);
}

// Belajar operator unary
// + menandakan nilai positif, - menandakan nilai negatif, ++(increment) menandakan naik 1 angka, dan --(decrement) menandakan turun 1 angka. Contoh penggunaan:

let hasil = +1; // 1 nilainya positif

hasil++;
console.log(hasil); // 1 ditambah 1 = 2

hasil--;
console.log(hasil); // hasil increment tadi(2) dikurang 1 = 1

hasil = -hasil;
console.log(hasil); // hasil decrement tadi yang awalnya bernilai positif dijadikan bernilai negatif.

