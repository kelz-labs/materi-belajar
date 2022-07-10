// Materi function generator
/*
- Function generator adalah function yang digunakan untuk membuat data generator
- Generator adalah data yang bisa diiterasi seperti array
- Untuk membuat function generator, kita perlu menggunakan tanda * (bintang) setelah kata function.
- Dan untuk mengembalikan data di tiap iterasi, kita bisa menggunakan kata kunci yield kemudian diikuti datanya
*/

// Contoh function generator yang simple
function* createNames() {
  yield 'Sakura';
  yield 'Yuuki';
  yield 'Whyred';
}

const names = createNames();
for (const name of names) {
  console.log(name);
}


function* nama() {
  yield 'sakura';
  yield 'yuuki';
  yield 'whyred';
}

const name = nama();
  for (const names of name) {
    console.log(names);
}



function* laptop() {
  yield 'thinkpad';
  yield 'vivobook';
  yield 'rog';
}

const merk = laptop();
for (const barang of merk) {
  console.log(barang);
}

// function generator lebih kompleks
function* buatGanjil(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      yield i;
    }
  }
}

const angkaGanjil = buatGanjil(50);
for (const angka of angkaGanjil) {
  console.log(angka);
}


