// Materi anonymous function
/*
Sebelumnya kita selalu membuat function dengan nama.
Namun, kita juga bisa membuat function tanpa nama, atau istilahnya anonymous function.
Kita bisa membuat anonymous function dengan dua cara, yakni ke dalam variable atau bisa juga kita buat ketika mengisi parameter
*/

// Contoh anonymous function dalam variable
const say = function(info) {
  console.log(`Halo, ${info}`);
}
say('Haikel');


let myFunc = function(webdev) {
  console.log(webdev);
}
myFunc('Front End Dev')


let konstan = function(fisika, kimia) {
  console.log(fisika, kimia);
}
konstan('Mantrap', 'Mantrap');
// Jadi, jika fungsinya itu sederhana, kita bisa menggunakan anonymous function alias fungsi tanpa nama


// Contoh langsung ke parameter
function bahasa(internasional) {
  internasional('Bahasa Inggris', 'Bahasa tuatunu'); // kita bisa memasukkan parameter ke dalam function
}

bahasa(function(name, nama) { // disini name itu menampung Bahasa Inggris dan nama menampung Bahasa Tuatunu
  console.log(name, nama);
});

function laptop(lenovo, asus) {
  lenovo('Thinkpad', 'Zenbook');
}

laptop(function(merek1, merek2) {
  console.log(merek1, merek2);
});

let myFunc = function(webdev) {
  console.log(webdev);
}

myFunc('Front End Dev')
