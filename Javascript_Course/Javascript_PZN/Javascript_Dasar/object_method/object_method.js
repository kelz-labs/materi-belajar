/*Materi object method
- Pada tipe data object, kita sudah membahas tentang property di object
- Karena sebenarnya function juga merupakan salah satu tipe data, jadi function pun sebenarnya bisa ditambahkan sebagai property di object
- Cara pembuatannya pun sama dengan function sebagai value
- Function di object kadang disebut sebagai object method
*/

// contoh menambah method ke object yang sudah tersedia
/*const person = {
  nama: 'Haikel'
};

person.sayHello = function (nama) {
  console.log(`Hello, ${nama}`);
}

person.sayHello('Sakura');
*/
const person = {
  name: 'Yuuki'
};

person.sayHello = function (name) {
  console.log(`Lenovo ${name}`);
}

person.sayHello('Thinkpad');

const barang = {

  // disini mulai functionnya, dimana dia dimasukkan ke dalam object
  pernyataan: function (merk) {
    console.log(`Wah, mantap kali ${merk} mu`);
  }
};

barang.pernyataan('Thinkpad');


