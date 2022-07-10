/* 
lastIndexOf

Fungsinya mirip-mirip ama indexOf, bedanya ini mengambil elemen terakhir, sesuai namanya.
.lastIndexOf() memiliki 2 argumen yang dapat digunakan sesuai kebutuhan:

1. value yaitu nilai elemen pada array yang ingin dicari
2. startIndex (optional) yaitu titik awal pencarian

Struktur kode: 

arr.lastIndexOf(value, startIndex); 
*/

// Example
let arrBuah = ["pisang", "apel", "semangka", "pisang"];

let indexPisang = arrBuah.lastIndexOf("pisang");
console.log(indexPisang);

// Latihan 
let arrBuah2 = ["Jeruk", "Apel", "Semangka", "Apel"];

// Buat kode kamu di bawah ini
let indexApel = arrBuah2.lastIndexOf("Apel");
console.log(indexApel); 
