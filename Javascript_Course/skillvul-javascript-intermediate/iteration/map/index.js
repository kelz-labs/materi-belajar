/* 
map

Jadi, map digunakan untuk melakukan perulangan sambil mengecek operasi pada setiap elemen array, lalu memberikan nilai return berupap array baru 

Format: arr.map((value, index, array) => {
  // something
})
*/

// example: 
let arr = [1,2,3,4]; 

let arrMap = arr.map(value => {
    return value + 2;
})

// sebenarnya forEach bisa juga dipake untuk menghasilkan output seperti di atas: 
let arr2 = [1,2,3,4]; 
let arrBaru = []; 

arr2.forEach((value) => {
    arrBaru.push(value  + 2); 
})

console.log(arrBaru);



// Latihan
let makanan = ["Nasi", "Ayam", "Pisang"];

let gorengMakanan = makanan.map((item) => {
    return item + " Goreng";
}); 

console.log(gorengMakanan); 
