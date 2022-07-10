/*
reduce 

Struktur dari reduce: 

arr.reduce((total, value, index, array) => {
  // something 
}, initialValue)

- total yaitu nilai awal (initial value) atau akumulasi dari perhitungan sebelumnya.
- value yaitu isi dari tiap elemen yang diproses. 
- index (optional) yaitu nomor index tiap elemen.
- array (optional) yaitu array itu sendiri.
- initialValue (optional) yaitu nilai awal yang akan di passed sebagai initial value di poin 1. Dapat diisi apa saja (nomor, teks, array, atau object)
*/

// example
let arr = [1,2,3,4,5,6,7]; 
let arrReduce = arr.reduce((total, value) => {
  return total + value; 
}, 10); 

console.log(arrReduce); // expected: 38 

/*
let arr2 = [1,2,3,4]; 
let arrReduc = arr2.reduce((total, value) => {
  console.log(value); 
  value += 1; 
  return total + value; 
})

console.log(arrReduc); 
*/

/*
Contoh kasus: dalam Fetch API 

Kita dapet data berupa array, dan kita ingin mengubahnya ke object. 
*/

let data = ["Makan", "Ngoding", "Olahraga", "Nonton Anime", "Kerja", "Turu"]; 

let dataList = data.reduce((data, kegiatan) => {
  if(data[kegiatan]){
    data[kegiatan] = data[kegiatan] + 1; 
  } else {
    data[kegiatan] = 1; 
  }

  return data; 
}, {})

console.log(dataList);

// Latihan 
let nilai = [100, 80, 80, 70, 90];

let jumlahNilai = nilai.reduce((total, item) => {
    return total + item; 
})

let rataRata = jumlahNilai / nilai.length; 
console.log(rataRata)
