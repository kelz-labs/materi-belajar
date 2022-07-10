// Materi destructuring function
// Urutan sangat berpengaruh
/*function kalkulasi(a, b) {
  return [a + b, a - b, a * b];
}

//const jumlah = penjumlahanPerkalian(2,3); // Mengambil semuanya
const jumlah1 = kalkulasi(5,6)[1]; // Untuk mengambil index ke 2, yakni perkalian 5 dan 6
const jumlah2 = kalkulasi(2,3)[0]; // Untuk mengambil index ke 0, yakni penjumlahan 2 dan 3

// destructuring function, dan penggunaan nilai default
// Antara nilai const, dan di dalam console haruslah sama. Jika tidak, maka dia hasilnya tidak berurutan
const [kurang, tambah, kali, bagi = 2 / 3 ] = kalkulasi(2,3);

console.log(`
  ${tambah}
  ${kurang}
  ${kali}
  ${bagi}
  ${jumlah1}
  ${jumlah2}
`);
*/
// bisa dilihat, hasil tambahnya malah -1, padahal seharusnya 5
// Ini dikarenakan dalam const, kita tambah itu ke dalam urutan min, sehingga kebagiannya 2 - 3, bukannya 2 + 3


// Agar urutan tidak berpengaruh, maka kita bisa mereturn object
/*function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b
  }
}

const {kurang, tambah, bagi, kali} = kalkulasi(5,4);

console.log(`
  ${tambah}
  ${kurang}
  ${kali}
  ${bagi}
`);
*/

// Studi kasus
/*const sate = {
  kacang: 'Kacang Tanah',
  daging: 'Ayam',
  bumbu: 'Bumbu kecap',
  lontong: 'Lontong daun'
}

function satukan(kacang, daging, bumbu, lontong) {
  return `${kacang} + ${daging} + ${bumbu} + ${lontong} = sate`;
}

console.log(satukan(sate.kacang, sate.daging, sate.bumbu, sate.lontong));
*/


// Atau dengan object
/*const sate = {
  kacang: 'Kacang Tanah',
  daging: 'Ayam',
  bumbu: 'Bumbu Kecap',
  lontong: 'Lontong Daun'
}

function satukan(sate) {
  return `${sate.kacang} + ${sate.daging} + ${sate.bumbu} + ${sate.lontong} = Sate`;
}

console.log(satukan(sate));*/

const sate = {
  kacang: 'Kacang Tanah',
  daging: 'Ayam',
  bumbu: 'Bumbu Kecap',
  lontong: 'Lontong Daun'
}

function satukan({kacang, daging, bumbu, lontong}) {
  return `${kacang} + ${daging} + ${bumbu} + ${lontong} = Sate
`;
}

console.log(satukan(sate));

// Contoh lain, dan ada object di dalam object

const teh = {
  air: 'Bolesa',
  jenisTeh: 'Teh Celup',
  merk: {
    enak: 'SariWangy'
  },
  keadaan: 'Dingin'
}

// nested destructuring
function buat({air, jenisTeh, keadaan, merk: {enak} }) {
  return `Panas-panas gini enaknya minum teh ${keadaan}, pake air ${air} ama ${jenisTeh} merk ${enak}, dah jadi deh`;
}

console.log(buat(teh));
