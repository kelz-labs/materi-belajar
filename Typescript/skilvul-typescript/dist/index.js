"use strict";
let arr = [];
arr.push(1, 2, 3, 4, 5);
let jumlahArr = arr.map((a) => a).reduce((accumulator, currentValue) => accumulator + currentValue);
function tampilArr(arr) {
    return arr;
}
let matrix;
matrix = [
    [1, 2, 3],
    [1, 2, 3],
];
console.log(tampilArr(arr));
console.log(jumlahArr);
console.log(matrix[0]);
// console.log("Halo, saya lagi belajar typescript loh"); 
/*
General types
*/
let person = {
    name: "Haikel",
};
// person(); // akan menyebabkan error, karena kita memanggilnya seperti function padahal si person itu object
console.log(person.name);
/*
unknown

Note: jika ada nilai yang belum diketahui tipe datanya, lebih baik pakai unknown ketimbang any
*/
let nilaiUjian;
nilaiUjian = 100;
console.log(typeof (nilaiUjian));
if (typeof nilaiUjian === "number") {
    let nilaiAkhir = (nilaiUjian + 100) / 2;
    console.log(`Nilai ujian: ${nilaiUjian}, nilai akhir: ${nilaiAkhir}`);
}
// boolean 
let benarAtauSalah = true;
// type literal, yakni kita mendefinisikan tipe data secara lebih detail. Contoh: 
let benar = true;
let salah = false;
/*
benar = false;
salah = true;
*/
// let sumBool = benar + salah; // operator "+" cannot be applied to boolean
// number dan bigint
let harga1 = 10000;
let harga2 = 20000000;
let harga3 = 100;
console.log(harga3.toString().charAt(0));
// let angkaGede: number = 100n; // bigint not assignable to type number
let angkaKecil = 100n;
const username = "haikelz";
console.log(username.charAt(0));
console.log(username.toUpperCase());
// symbol 
let a = Symbol('a');
let b = Symbol('a');
console.log(a === b);
