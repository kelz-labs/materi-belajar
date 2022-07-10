// object 

let obj = {
  name: 'Anggur',
  deskripsi: 'Buah yang biasanya tumbuh di daerah yang teduh dan memiliki curah hujan yang tinggi. Dan memilki rasa yang manis',
  fungsi: 'Menghangatkan tubuh dan vitamin c',
  bahaya: 'Disalahgunakan menjadi bahan minuman bir',
  warna: ['Ungu', 'Hijau'],
  asli: true,
  stock: 200,
  pemilik: 'Haikel'
}

console.log(obj['name']);
console.log(obj.asli);

// Jika kita mengakses property yang tidak ada, kita bisa memberi nilai defaultnya.
console.log(obj.pemilik || ['Haikel', 100]);

// Tapi apabila propertynya ada di object, maka yang ditampilkan itu nilai propertynya, bukan nilai defaultnya

// Sekarang, mengubah properties dalam object ke array. Kita bisa mengubahnya dengan method Object.keys(namaObjectnya)
let objArr = Object.keys(obj);
console.log(objArr);

// Mengubah nilai object menjadi array 
let objValue = Object.values(obj);
console.log(objValue);

let objEntries = Object.entries(obj);
console.log(objEntries);

// Mengubah nilai keduanya sekaligus ke dalam array, jadi ga perlu satu-satu 
/*let objEntries = Object.entries(obj);
console.log(objEntries);

Object.defineProperties; // Mendefinisikan banyak property 
Object.defineProperty; // mendefinisikan satu property saja */

// Kita juga bisa menambahkan property baru ke dalam sebuah object yang sudah ada 
obj.harga = 25000;

// Dan kita juga bisa merubah value dari property yang sudah kita tambahkan
obj.harga -= 45000;
obj.harga *= 2;

// Menghapus object dengan delete 
delete obj.harga;
console.log(obj);
