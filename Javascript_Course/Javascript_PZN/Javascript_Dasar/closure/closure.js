/* Materi closure
- Closure adalah kombinasi function dan bundel referensi ke data sekitarnya
- Kita sudah tau bahwa local scope itu tidak bisa diakses dari luar scope.
- Dengan kemampuan closure, kita bisa membuat sebuah function di local scope dan referensi ke data di sekitar local scope tersebut, keluar scopenya
*/

// Misalnya:
let nama = 'Haikel';


function ubahNama() {
  console.log(nama); // panggil dulu namanya
}

nama = 'Yuuki'; // Kita ubahh namanya

ubahNama(); // kemudian kita panggil fungsinya

// atau kita juga bisa rubah nama nya dua kali
nama = 'Megumi';

ubahNama();


// Contoh lain
function fungsiLuar(variableLuar) {
  const a = 'a';
  return function fungsiDalam(variableDalam){
    console.log('fungsi luar' + variableDalam);
    console.log('fungsi dalam' + variableLuar);

    // bisa juga memprint variable yang berada di scope lain walau diprintnya di scope yang berbeda
    console.log(a);

    const b = 'b';
    console.log(b);
  }
}

const anime = ' shigatsu wa kimi no uso';

const fungsiBaru = fungsiLuar(anime); // apabila kosong, maka hasilnya akan undefined
fungsiBaru(' Ingformatika');


// studi kasus dengan fetch url di axios
function outerFunction(url) {
  fetch(url), then(() => {
    console.log(url);
  })
}

const newUrl = outerFunction('https://github.com');
newUrl('https://reddit.com');
