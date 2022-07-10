// indexOf
/*
Pada dasarnya array menyimpan tiap elemen di dalamnya menggunakan penomoran index. Untuk melakukan pengecekan apakah terdapat data yang kita cari dalam elemen array yang kita punya, kita dapat menggunakan method .indexOf(). .indexOf() melakukan iterasi elemen array dari kiri ke kanan kemudian memberikan nilai balik berupa nomor index dari elemen yang dicari atau mengembalikan -1 jika tidak ditemukan.

.indexOf() memiliki 2 argumen pada callback function yang dapat digunakan sesuai kebutuhan:

value yaitu nilai elemen pada array yang ingin dicari
startIndex (optional) yaitu titik awal pencarian
Struktur kode dari .indexOf():

arr.indexOf(value, startIndex); 
*/

// Example, kita mau dapetin kata apel di urutan awal, bukan yang terakhir
let arrBuah = [ "jeruk", "apel", "semangka", "apel" ]; 
// let indexApel = 0;

/*arrBuah.forEach((item, index) => {
  if(item == "apel") {
    indexApel = `${item} + ${index}`; 
  }
})

console.log(indexApel); // expected: 3 */
// Mengapa dapetnya yang terakhir? Karena forEach akan mengiterasi semua data, jadi yang bakal keluar yakni yang terakhir

// Dengan indexOf 
let indexApel = arrBuah.indexOf("apel"); 
console.log(indexApel);

// Latihan 
let hewan = ["Ayam", "Domba", "Ayam", "Rubah"];

let indexAyam = hewan.indexOf("Ayam");
console.log(indexAyam);
