// Materi destructuring assignment/variable
// Dimana, kita bisa membuat nilai dalam array menjadi variable yang terpisah. Jadi tidak dalam bentuk array lagi.
// Contoh pada array:

/*const array = [1,2,3,4,5,6];

// Menggunakan teknik biasa
console.log(array[0]);
console.log(array[5]);

// Dengan destructuring, juga bisa menskip item
const [a,b,c,d, , , g] = array;

console.log(g); // Hasilnya undefined jika si variable memang tidak ada nilainya di dalam array

// swap items

console.log('swap items');
let e = 1;
let f = 2;

console.log(e); // 1
console.log(f); // 2

// Penukaran nilai e dan f
[e, f] = [f, e];

console.log(e); // 2
console.log(f); // 1

// return value pada function
function test() {
  return [1, 2];
}

const [satu, dua] = test();
console.log(satu); // 1
console.log(dua); // 2
*/

// rest parameter (...)
const [a, b, ...c] = [1,2,3,4,5];
console.log(a);
console.log(b);
console.log(c); // jika menggunakan rest parameter, maka sisa dari array akan dimasukkan sebagai array lagi

// Contoh pada object, harus sama dengan property nya
/*const obj = {
  nama: 'Megumi',
  umur: '19 Tahun',
  alamat: 'Toboali, Tokyo Selatan'
}

const {nama, umur, alamat} = obj;
console.log(nama, umur, alamat);*/


// Assignment tanpa deklarasi object
/*({nama, umur, alamat} = {
  nama: 'Megumi',
  umur: '19 tahun',
  alamat: 'Toboali, Tokyo Selatan'
});

console.log(`Hai, saya ${nama}, umur ${umur}, alamat di ${alamat}`);*/


// Assignment ke variable baru
/*const obj = {
  nama: 'Megumi',
  umur: '19 Tahun',
  alamat: 'Toboali, Tokyo Selatan'
}

const {nama: namez, umur: age, alamat: address} = obj;
console.log(namez); */


// memberikan default value
/*const obj = {
  nama: 'Megumi',
  umur: '19',
}

const {nama, umur, email = 'megumi@mugu.com'} = obj;

console.log(email);*/


// Memberi nilai default dan assign ke dalam variable baru
/*const obj = {
  nama: 'Joko',
  umur: '40 Tahun',
  alamat: 'Simpang Katis'
}

const {nama: namazz, umur: age, alamat: address, email: gmail = 'joko@gmail.com'} = obj;
console.log(namazz, age, address, gmail);*/


// Memakai rest parameter
/*const obj = {
  nama: 'Pohon',
  umur: '10 tahun',
  email: 'tetapcool@tocool.com'
}

const {nama, ... value} = obj;
console.log(nama, value);*/


/*const obj = {
  nama: 'Pohon',
  umur: '10 Tahun',
  eamil: 'tetapcool@tocoll.com'
}

function object(obj) {
  return obj.nama;
}

console.log(object(obj));*/


// Mengambil field pada object, setelah dikirim sebagai parameter untuk function
const obj = {
  nama: 'Pohon',
  umur: '10 Tahun',
  email: 'tetapcool@tocool.com'
}

// assignmentnya dilakukan pada parameter, saat mereturn, kita tidak perlu menulis obj.nama lagi
function object({nama}) {
  return nama;
}

console.log(object(obj));

const barang = {
  jenis: 'Sayuran',
  keterangan: 'Sayur mayur untuk makan',
  olahan: 'Sup'
}

function makanan({jenis, keterangan, olahan}) {
  return `Hari ini, ada ${jenis}, keterangannya ${keterangan}, dan akan kita jadikan ${olahan}`;
}

console.log(makanan(barang));
