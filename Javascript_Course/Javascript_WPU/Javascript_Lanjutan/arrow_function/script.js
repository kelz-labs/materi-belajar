// Materi arrow function
// Jadi, arrow function itu semacam shorthand atau jalan pintas untuk pemakaian function, dimana disimbolkan dengan panah atau =>

// Contoh function declaration biasa
/*function pesan(nama) {
  alert(`Halo, ${nama}`);
}

pesan('Sakura');
*/

/* Contoh dengan function expression dengan mendefinisikan function ke dalam variable
let pesan = function(nama) {
  alert(`Halo, ${nama}`);
}

pesan('Sakura');
*/

/* let pesan = (nama) => {
  alert(`Halo, ${nama}`);
}

pesan('Sakura');
*/

// Dengan arrow function
pesan = (nama) => {
  alert(`Halo, ${nama}`);
}

pesan('Sakura');

/*list = (barang) => {
  return `Stok Barangnya ada ${barang}`;
}

console.log(list(100));*/


// atau kita bisa juga pakai return untuk menyatakannya
list = (barang) => {
  console.log(`Stok barangnya ada ${barang}`);
}

list(100);


// Misal parameternya lebih dari dua
/*const tampilNama = (nama, umur) => {
  return `Selamat pagi, ${nama}, umur ${umur} tahun`;
}

console.log(tampilNama('Void', '10'));*/


// Contoh implisit return
// const tampilNama = nama => `Selamat malam, ${nama}`;
// console.log(tampilNama(`testing`));

// Bahkan ada cara yang lebih ringkasnya lagi tanpa return
// tampilNama = name => console.log(`Selamat datang, ${name}`);
// tampilNama('Sakura');

tampilNama = name => `Selamat datang, ${name}`

console.log(tampilNama('Logi'));


// Contoh studi kasus: dimana kita ingin menghitung jumlah kalimat di bawah dan mengembalikannya dalam bentuk array
let siswa = ['Andi', 'Budi', 'Bobon'];

/*let jumlahHuruf = siswa.map(function (nama) {
  return nama.length;
})

console.log(jumlahHuruf);*/

// let jumlahHuruf = siswa.map(nama => {
// nama.length;
// })

// console.log(jumlahHuruf);

// Atau bisa pakai yang lebih singkat lagi, hasilnya juga sama saja
// let jumlahHuruf = siswa.map(nama => nama.length);
// console.log(jumlahHuruf);

// Misal kita ingin mengembalikan object
let jumlahHuruf = siswa.map(nama => ({
  nama: nama,
  jumlahHuruf: nama.length
}));

console.table(jumlahHuruf); // Maka yang akan direturn berupa object
