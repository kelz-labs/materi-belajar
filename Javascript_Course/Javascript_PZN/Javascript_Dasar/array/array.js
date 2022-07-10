/*Materi tipe data array
Array adalah kumpulan dari data-data. Pada dasarnya, array di setiap bahasa pemrograman itu sama.
Array di javascript bersifat dinamis dan mirip dengan php. Apa arti dinamis? Dinamis artinya data bisa bertambah dengan sendirinya saat kita memasukkan data ke dalam array.
Setiap data yang disimpan di array akan disimpan berurutan, mulai yang paling awal sampai akhir.

Hal-hal yang harus diingat:
- Data di dalam array itu tidak ada batasannya. Jadi kita bisa memasukkan apapun ke dalam array. Bahkan kita juga bisa memasukkan array dalam array yang kita inginkan.
Contoh:
*/
const kendaraan = ['Honda Vario', 'Honda PCX', 'Yamaha Jupiter MX']; // Kita punya sebuah data yang diberi nama "kendaraan" yang memuat tiga macam motor

console.log(kendaraan[2]); // Ingat bahwa array dimulai dari angka 0, 1, dan seterusnya. Urutan di array disebu dengan index. Disini hasilnya adalah Jupiter MX

// Contoh lain
const arrayString = "Jerapah"; // String
const arrayNumber = 200; // Number
const arrayNumber2 = 500; // Number
const arrayBoolean = arrayNumber2 < arrayNumber; // Boolean

const kumpulanArray = [arrayString, arrayNumber + arrayNumber2, arrayBoolean];// Di dalam array, kita bisa melakukan operasi apapun yang kita inginkan.

// Jika kita ingin menambahkan nilai atau variable ke dalam array yang telah dideklarasikan, maka kita bisa memakai <namaVariable>.push()
kumpulanArray.push("Jawa Tengah", 1 + 99);
console.log(kumpulanArray);

/* console.table digunakan untuk memprint array ke dalam bentuk tabel. Nanti hasilnya seperti ini:
┌─────────┬───────────────┐
│ (index) │    Values     │
├─────────┼───────────────┤
│    0    │   'Jerapah'   │
│    1    │      700      │
│    2    │     false     │
│    3    │ 'Jawa Tengah' │
│    4    │      100      │
└─────────┴───────────────┘
*/
console.table(kumpulanArray);

// Untuk mendapatkan rentang/panjang suatu array, kita bisa menggunakan perintah array.length. Contoh:
console.log(kumpulanArray.length);

// Untuk mendapatkan letak index dalam array, kita bisa memakai perintah array[index]. Contoh:
console.log(kumpulanArray[3]);

// Untuk mengubah nilai suatu index dalam array, kita bisa memakai perintah array[index] = value. Contoh:
console.log(kumpulanArray[3] = "Gigachad");

// Untuk menghapus suatu index dalam array, kita bisa memakai perintah delete array[index]. Dengan catatan walaupun menghapus suatu index, bukan berarti index yang lain juga pindah posisi. Contoh:
console.log(delete kumpulanArray[3]);
console.log(kumpulanArray[3]); // Lihat. Setelah index 3 didelete, maka apabila kita ingin mendeteksi baris ketiganyam dia akan menghasilkan "undefined" atau tidak terdefinisi


// Challange:
// Buat program menampilkan 5 looping(terserah mau pake number atau string) dengan if () else, for loop, dan menampilkan jumlah array dengan length, merubah nilai index dalam array, dan menampilkan tabel array

const buah = ["Anggur", "Kiwi", "Alpukat", "Nanas", "Nangka"];
const sayur = ["Tomat", "Timun", "Sawi", "Daun Singkong", "Terong"];
let hargaSayur = 2000;
hargaSayur += 200;

if (hargaSayur < 2500 ) {
  for (let hargaSayur = 2500; hargaSayur <= 2510; hargaSayur++){
    console.log(hargaSayur, "Untung banyak boss");
  }
}

else {
  console.log("Dino Ajur");
}

console.log(sayur.push("Jengkol"));
console.log(buah.length);
console.log(buah[3] = "Dino Ajur");
console.table(buah);
/*
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│    0    │  'Anggur'   │
│    1    │   'Kiwi'    │
│    2    │  'Alpukat'  │
│    3    │ 'Dino Ajur' │
│    4    │  'Nangka'   │
└─────────┴─────────────┘
*/
console.log(delete buah[3]);
/*
 ─────────┬───────────┐
│ (index) │  Values   │
├─────────┼───────────┤
│    0    │ 'Anggur'  │
│    1    │  'Kiwi'   │
│    2    │ 'Alpukat' │
│    4    │ 'Nangka'  │
└─────────┴───────────┘
*/
console.table(buah);

// Kita juga bisa memasukkan array ke dalam array. Array seperti ini disebut multidimensional array
const array2 = [1, 2, 3, buah];
console.log(array2);

// Lihat. Tidak ada batasan untuk menambahkan array ke dalam array.
const array3 = [4, 5, 6, array2];
console.log(array3);


