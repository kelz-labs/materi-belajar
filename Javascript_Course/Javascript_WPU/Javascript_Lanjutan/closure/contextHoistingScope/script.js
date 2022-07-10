// Materi Closure

// perbedaan sekilas var dengan let

// Creation phase, terjadi di global context
/* Yang terjadi pada fase ini adalah js akan mengecek apakah ada keyword var di dalam script.
   Dia tidak akan mempedulikan console.log() yang didefinisikan terlebih dahulu
   nama var = undefined
   nama function = fn()
   hoisting

   object window = global object
   this = window
*/
// console.log(nama);
// console.log(nama1);
// var nama = 'Yuuki';
// let nama1 = 'Haikel';

// console.log(sayHello());

// Hoisting, dimana variabel didefinisikan setelah console.log
/* var nama = 'yuuki';
var umur = 18;

function sayHello() {
  return `Hai, saya ${nama}, umur ${umur} tahun`;
}*/
// pada model seperti ini, dia tidak akan menampilkan apapun karena function nya belum dipanggil

/*var nama = 'yuuki';
var username = '@yuuki';

function url(username) {
  var instagramURL = 'https://instagram.com/';
  return instagramURL + username;
}

console.log(url(username));*/


// Jika modelnya seperti ini, harusnya dia hasilnya Megumi, tapi karena ga ada parameter atau ga ada yang nangkep, maka dia akan mencari variable terdekat, dalam hal ini berada di area global
/*var nama = 'yuuki';
var username = '@yuuki';

function url(username) {
  var instagramURL = 'https://instagram.com/';

  // tapi lihat, apabila di local, usernamenya juga didefinisikan, maka dia akan mengambil di local, walaupun ada parameternya.
  // var username = '@zaki'
  return instagramURL + username;
}

console.log(url('@megumi'));
*/

// Jika model kodingannya begini, maka dia akan memprint dari a, b, baru ke c, alias dari ujung baru ke atas
// Tumpukan eksekusi
/* function a () {
  console.log('ini a');

  function b() {
    console.log('ini b');

    function c() {
      console.log('ini c');
    }

    c();
  }

  b();
}

a();*/

// Latihan

function satu() {
  var nama = 'Hanis';
  console.log(nama);
}

function dua() {
  console.log(nama);
}

console.log(nama);
var nama = 'erik';
satu();

dua('atmint');
console.log(nama);
