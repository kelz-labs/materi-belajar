// Materi scope
/*
- Scope merupakan area akses sebuah data.
- Ada dua jenis scope, yakni global scope dan local scope.
- Setiap kita membuat function, maka kita akan membuat local scope untuk function tersebut
- Data di global scope bisa kita akses dari local scope, namun data di local scope hanya bisa diakses di local scope
  tersebut atau di scope local dibawahnya (sama seperti kasus function di dalam function)
*/

// global scope
let counter = 0;

function hitMe() {
  // local scope function hitMe
  counter++; // kita bisa aksess
}

hitMe();
hitMe();


// Contoh dengan nested function
console.log(counter);

let belajar = 0;

function sukses() {
  let motivasi = 0;

  // Contoh memakai dua function di dalam function, jadi local scopenya ada 3
  function doa() {
    motivasi++;
  }
  doa();
  doa();
  console.log(motivasi);

  function doa() {
    motivasi++;
  }
  doa();
  doa();
  console.log(motivasi);

  belajar++;
}

sukses();
sukses();
console.log(belajar);


// Contoh lain

function first() {
  // ini local scope pertama
  let firstVariable = 'first';
}

function second() {
  // ini local scope kedua
  let secondVariable = 'second';
}

first();
second();


// Contoh program membunuh lima ekor tikus

// global scope
// Misal tikus didefinisikan ada 5
let tikus = 5;
let kucing = 1;

function makan() {
  if(kucing === 1) {
    tikus--;
  }

  console.log(`Setelah dimakan kucing, tikus tinggal tersisa ${tikus} tikus`);
}

makan();
makan();

// Sebagai catatan, local scope hanya bisa diakses di local, yang artinya dia tidak bisa diakses dari luar scope, ataupun dari scope lain

