/*
Materi find 

Pencarian merupakan salah satu algoritma dasar pada pemrograman. Dimulai dari melakukan iterasi pada sekumpulan data dan kemudian mengembalikan nilai jika sesuai dengan kondisi yang dicari. Array pada JavaScript juga memiliki built-in method ** .find() yang dapat digunakan untuk melakukan pencarian**.
.find() memberikan nilai balik berupa nilai tunggal (single value) dari elemen pertama yang ditemukan jika memenuhi suatu kondisi pada return statement.
Callback function pada .find() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

1. value yaitu isi dari tiap elemen yang diproses
2. index (optional) yaitu nomor index tiap elemen
3. array (optional) yaitu array itu sendiri

Struktur kode dari .find():

arr.find((value, index, array) => {
  // something
}
*/

// Example 
let people = [
  {
    name: "Haikel", 
    age: 18, 
  }, 
  {
    name: "John", 
    age: 23, 
  }, 
]; 

let findHaikel = people.find(value => value.name === "Haikel"); 
let findJohn = people.find(value => value.name === "John"); 

console.log(findHaikel);
console.log(findJohn);

// menemukan angka yang lebih dari 3 
let arr = [1,2,3,4,5]; 

let findAngka = arr.find(angka => angka > 3); // expected: [4]
let filterAngka = arr.filter(angka => angka > 3); // expected: [4, 5]

console.log(findAngka); 
console.log(filterAngka); 


// Latihan 
let hewan = ["Harimau", "Gajah", "Jerapah", "Ular"];

/* 
logic codenya: 

Kita akan mengembalikan hewan yang berawalan J dan akhiran h, maka dari itu untuk dapetin index terakhir, 
kita bisa kurangin length si array dengan -1(index array selalu dimulai dari nol)
*/

let cariHewan = hewan.find((item) => {
    return item[0] === "J" && item[item.length - 1] === "h"; 
})

console.log(cariHewan); 

// Latihan 
let angka = [14, 24, 55, 60, 32, 85];

let cariIndexAngka = angka.findIndex((item) => {
    // tambahkan suatu kondisi untuk mendapatkan nilai item yang akan habis jika dibagi dengan 5 dan 10(tanpa menggunakan if).
    return item % 5 == 0 && item % 10 == 0; 
})

console.log(cariIndexAngka);
