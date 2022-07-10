// function makan bisa disebut higher order function
/* function makan(makanan, selesai) {
  console.log(`Dia memakan ${makanan} itu.`);
  selesai();
}

function selesai() {
  alert(`Selamat makan!`);
}

makan('Bakwan', selesai);

function salam(waktu) {
  return function(nama) {
    console.log(`Halo, ${nama}, selamaat ${waktu}, semoga harimu lancar!`);
  }
} */

//let malam = salam('Malam');

//console.dir(malam(`Mogu`));



// Andai misal looping biasa
/*for (let i = 1; i <= 10; i++) {
  console.log(i);
}
// Jika ingin mengubah nilainya, maka kita harus mengganti nilai 10 nya.
// Nah bagaimana cara mengubah nilainya tanpa mengotak atik nilai di dalam perulangannya?


// Disinilah peran function. Kita masukkan perulangannya ke function
function perulangan(n) {
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

perulangan(10);
// Tentu jika masukkan ke function, hal ini akan terasa lebih simple

function loop(aksi, nilai) {
  for (let i = 0; i <= nilai; i++) {
    aksi(i);
  }
}

loop(console.log, 10);



// - array.prototype.filter
/*
Bayangannya: misal ada suatu array yang berisi bahan membuat hotdog.
Nah kemudian kita ingin mensortir/memfilter nya menjadi array yang hanya berisi sayuran saja.
Otomatis, index seperti roti dan daging tidak akan masuk.
Dan ini akan membuat array baru berdasarkan kriterianya tadi.
*/

// - array.prototype.map
/*
Konsep mapping mirip-mirip dengan for each. Bedanya adalah kalo for each tidak menghasilkan array baru, sedangkan mapping menghasilkan array baru
Setiap anggota di dalam array akan diberi function sendiri
*/

// - array.prototype.reduce
/*
Jadi, setelah array tadi dimapping, maka saatnya menggabungkannya. Ibarat bahan-bahan hotdog yang sudah dipecah.
Maka digabung atau disatukan lagi agar menjadi sebuah hotdog
*/

const array = [1, 2, 4, 3, 6, 5, -1, -2, -10, 10];

// Kasus mencari angka >= 3

// Contoh dengan looping biasa

/*const newArray = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] >= 3) {
    newArray.push(array[i]);
  }
}

console.log(newArray);

// Latihan
const newArr = [];
for (let i = 0; i < array.length; i++) {
  if (array[i] > 1) {
    newArr.push(array[i]);
  }
}

console.log(newArr);*/


/* Contoh jika pakai filter
const newArr = array.filter((arr) => {
  return arr >= 3;
});

console.log(newArr);*/

// Contoh jika pakai mapping
// "Petakan semua elemen array dengan fungsi yang baru"
// const newArr = array.map((arr) => {
//  return arr * 2;
// })

// console.log(newArr);


// Contoh jika pakai reduce
// Dalam reduce, ada dua parameter, yaitu:
// - Accumulator, yaitu hasil dari proses
// - currentValue, yaitu element array yang sedang dilooping
const newArr = array.reduce((accumulator, currentValue) => {
  return accumulator + currentValue, 1; // pemberian nilai awal di bagian terakhir, defaultnya adalah 0
});

console.log(newArr);


// Method Chaining(berantai)
// Contoh kasus: cari angka 5, kemudian kalikan 3, dan jumlahkan
const hasil = array.filter(arr => arr > 5) // Hasilnya 6 dan 10
.map(arr => arr * 2) // Hasilnya 12 dan 20
.reduce((accumulator, currentValue) => accumulator + currentValue); // 12 + 20, hasilnya 32

console.log(hasil);

// ada sedikit perbedaan jika dia pakai shorthand
const newArr2 = array.reduce((accumulator, currentValue) => accumulator + currentValue, 20);
console.log(newArr2);


// Mengubah value dan menambahkan value baru di object
const object = {
  nama: 'Yugi',
  umur: {}
}

object.umur = 13; // Mengubah value umur
object.alamat = 'Jalan Jalan'; // Mengubah value alamat

console.log(object);
