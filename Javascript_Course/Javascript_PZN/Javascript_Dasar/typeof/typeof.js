// Operator typeof
// Jadi, operator typeof itu adalah sebuah operator yang berfungsi untuk mengecek jenis data suatu variable. Apakah number, string, dan lain-lain;
// Contoh:

let nilai;
console.log(typeof nilai); // nah disini dia hasilnya akan undefined karena memang nilainya belum didefinisikan

/*
Daftar hasil operator typeof pada javascript

- undefined -> "undefined"
- null -> "object"
- boolean -> "boolean"
- number -> "number"
- bigint -> "bigint"
- string -> "string"
- symbol -> "symbol"
- function -> "function"
- lainnya -> "object"

*/

let data;
let data1 = 1234
let data2 = "1234";
let data3 = null;
let data4 = 12 < 15;

const tipeData = typeof data;
const tipeData1 = typeof data1;
const tipeData2 = typeof data2;
const tipeData3 = typeof data3;
const tipeData4 = typeof data4;

console.log(tipeData);
console.log(tipeData1);
console.log(tipeData2);
console.log(tipeData3);
console.log(tipeData4);
