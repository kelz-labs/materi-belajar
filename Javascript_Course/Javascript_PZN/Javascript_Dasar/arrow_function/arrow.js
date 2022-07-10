// Materi arrow function
/*
- Arrow function (=>) adalah alternatif pembuatan function yang lebih sederhana dari function pada umumnya
- Namun terdapat limitasi(pembatasan) dan juga tidak bisa digunakan di semua situasi
Kekurangan arrow function:

a. tidak memiliki fitur arguments object
b. tidak bisa menggunakan function generator
c. tidak bisa mengakses this
d. tidak bisa mengaksees super

Arrow function ini mirip-mirip dengan anonymous function, dimana dia mesti dimasukan ke dalam variable atau parameter dan tidak bisa berdiri sendiri
Contoh:
*/

const sayHello = (name) => {
  const say = `Hello, ${name}`;
  console.log(say);
}

sayHello('Sakura');

const jepang = (anime) => {
  const genre = 'Romance, Horror, Slice of Life';
  const namaAnime = 'Natsume, Komi-San, Takagi-San';
  console.log(genre, namaAnime);
}

jepang();
