// Materi if
// Pada dasarnya, semua if di bahasa pemrograman itu sama saja, dimana jika suatu kondisi terpenuhi, maka program akan jalan. JIka tidak, maka dia tidak jalan. if berbentuk boolean atau benar salah. Misal:

const nilaiUjian = 100;
const nilaiAbsen = 50;

const kkmUjian = 80;
const kkmAbsen = 80;

const hadiah = ["Sepeda", "motor", "Handphone", "Voucher Bootcamp Gratis"];

if (nilaiUjian > 80 && nilaiAbsen > 80) { // Jika nilaiUjian lebih dari 80, dan nilaiAbsen lebih dari 80, maka bernilai true. Kalau salah satunya tidak terpenuhi, maka akan false
  console.log(hadiah);
}

else {
  console.log("Tak getok kepalamu iki"); // Jika kondisi di atas tidak terpenuhi, maka dia akan bernilai false.
}
