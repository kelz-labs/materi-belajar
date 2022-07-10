/*
Perulangan forEach pada javascript

format: arr.forEach((value, index, array) => {
  console.log(value, index, array); 
})
*/

let arr = [1, 2, 3, 4, 5, 6]; 
arr.forEach((value, index, array) => {
  console.log(value, index, array);
})

// Latihan
let hewan = ["Ayam", "Buaya", "Cicak", "Domba"];

// Buat kode kamu di bawah ini
hewan.forEach((item) => {
    if(item[0] < 'C') {
        console.log(item)
    }
})
