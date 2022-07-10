/* 
Materi findIndex

Jika sebelumnya kamu telah belajar menggunakan .find() untuk mendapatkan suatu nilai elemen yang dicari pada sebuah array, topik kali ini kamu akan belajar mengenai .findIndex() yang digunakan untuk mendapatkan nomor index dari elemen yang dicari.
.findIndex() memberikan nilai balik berupa nomor index dari elemen pertama yang ditemukan jika memenuhi kondisi pada return statement atau -1 jika tidak ditemukan.

Callback function pada .findIndex() memiliki 3 parameter yang dapat digunakan sesuai kebutuhan:

1. value yaitu isi dari tiap elemen yang diproses
2. index (optional) yaitu nomor index tiap elemen
3. array (optional) yaitu array itu sendiri

Struktur kode dari .findIndex():

arr.findIndex((value, index, array) => {
  // something
});
*/

let arr = [1,2,3,4,5]; 
let getIndex = arr.findIndex(value => value > 3);

console.log(getIndex); // expected: 3(karena ini index);

// another example
let hewan = ["kucing", "gajah"]; 
let getHewan = hewan.findIndex(value => value[value.length - 1] === "h");

console.log(getHewan); // expected: 1

/* 
Pada kode di atas, pencarian dilakukan berdasarkan suatu kondisi yang diinginkan. 
Tiap elemen akan ditelusuri dan dikembalikan nilai index-nya jika elemen tersebut memiliki akhiran "h";


*/
