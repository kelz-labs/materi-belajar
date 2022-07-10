// Contoh javascript perbandingan
// Ingat bahwa js tidak memerlukan titik koma di belakang. Opsional aja, tapi mending dipake dan konsisten!!
// (==) berarti dia akan membandingkan berdasarkan nilai, bukan tipe datanya.
// (===) berart dia akan membandingkan berdasarkan nilai dan tipe datanya.
// Misal:

let perbandingan = 500 == "100"; // false karena nilainya tidak sama
let perbandinganBaru = 500 == "500"; // true karena nilainya sama, dalam hal ini string akan diubah ke integer
let perbandinganTerbaru = 500 === "500"; // nanti dia akan false karena dia walaupun nilainya sama, tapi dia tidak sejenis, atau lebih tepatnya dia tidak diubah menjadi integer
console.log(perbandingan, perbandinganBaru, perbandinganTerbaru);

// perbandingan dengan tanda (>) lebih dari dan (<) kurang dari

let lebihDari = 500 > 100; // true karena 500 itu memang lebih dari 100
let kurangDari = 500 < 100; // false karena 500 kurang dari 100
console.log(lebihDari, kurangDari);

// perbandingan dengan tanda (>=) lebih dari sama dengan dan (<=) kurang dari sama dengan

let lebihSama = 500 >= 100; // true karena lebih dari atau sama dengan 100
let kurangSama = 500 <= 100;// false karena 500 kurang dari atau sama dengan 100
console.log(lebihSama, kurangSama);

// perbandingan dengan tanda (!=) yang berarti tidak sama dengan secara nilai dan (!==) yang berarti tidak sama secara nilai dan tipe data

let tidakNilai = 500 != "500"; // bernilai false karena saat stringnya diubah ke integer, ternyata nilainya sama, bukannya tidak sama, jadi false
let tidakNilaiTipe = 500 !== "500"; // bernilai true karena string nya tidak diubah ke dalam integer
console.log(tidakNilai, tidakNilaiTipe);

/*
Catatan: "sama" dan "identik" itu dua hal yang mirip tapi sebenarnya berbeda.
Dalam artian kalau sama itu dia secara nilainya saja.
Kalau identik itu sama secara tipe data dan nilai.
*/
