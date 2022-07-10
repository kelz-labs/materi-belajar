/*
Sebagai front-end developer, terkadang kita memiliki data berbentuk array, namun hanya sebagian dari elemennya saja yang diperlukan. Elemen tersebut diambil berdasarkan kondisi tertentu sesuai dengan kebutuhan tampilan UI (User Interface). Hal ini dapat kamu lakukan menggunakan method .filter() pada variabel array yang kamu miliki. .filter() berfungsi untuk membuat sebuah array baru dengan memperhatikan kondisi tertentu pada setiap elemen dari array yang sudah ada.

Callback function pada .filter() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

value yaitu isi dari tiap elemen yang diproses.
index (optional) yaitu nomor index tiap elemen.
array (optional) yaitu array itu sendiri.

Struktur kode dari .filter():

arr.filter((value, index, array) => {
  // kode program
});
*/

// Example
let arr = [1,2,3,4,5]; 

// disini kita mau memfilter datanya, misal disini saya maunya yang keluar nantinya cuma bilangan sampai 3, selain itu tidak. 
let arrFilter = arr.filter((value, index) => {
  return value <= 3; 
})

console.log(arrFilter); // expected: [1,2,3]

// kalo cuma satu, maka kita bisa memakai implicit return (tidak menulis return, karena return sudah diwakilkan oleh simbol arrow pada arrow function)
let implicit = arr.filter((value, index) => value >= 3); 
console.log(implicit); 

let anime = ["slice of life", "school", "action", "romance"]; 
let animeFilter = anime.filter((value, index) => value == "slice of life");
console.log(animeFilter);

// Latihan 
let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Buat kode kamu di bawah ini
let genap = angka.filter((item) => {
    return (item % 2 === 0) // == true ? item % 2 !== 0 : item % 2 === 0;
})

console.log(genap); 
