// Materi lazy evaluation
// Generator itu sifatnya lazy
// Jadi artinya jika kita tidak/belum mengambil data dari generator, maka yield selanjutnya tidak akan dieksekusi
// Contoh:

// Sifat lazy, dimana dia baru diiterasi jika data diambil dari generator(alias selang seling)
function* buatGanjil(value) {
  for (let i =1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Value ke ${i}`);
      yield i;
    }
  }
}


// Perbandingannya dengan menggunakan array yang memiliki Sifat eager, dimana akan dibuat dulu semuanya baru diiterrrasi
function buatGanjilArray(value) {
  const result = [];
  for (let i =1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Value ke ${i}`);
      result.push(i);
    }
  }
  return result;
}

// Iterasinya
const numbers = buatGanjilArray(100);
for (const number of numbers) {
  console.info(number);
}


// Contoh lebih lanjut
function* buatGanjilLanjut(value) {
  for (let i = 1; i <= value; i++) {
    if (i % 2 === 1) {
      console.info(`Perulangan ke ${i}`);
      yield i;
    }
  }
}

const angkaGanjilLanjut = buatGanjilLanjut(100);
console.log(angkaGanjilLanjut.next().value);
console.log(angkaGanjilLanjut.next().value);
console.log(angkaGanjilLanjut.next().value);
