// Materi object
// 1. Object Literal
// Problem pada object literal ini adalah tidak efektif apabila objectnya banyak
let siswa = {
  nama: 'Yuuki',
  energi: 10,
  mineral: 10,
  alamat: 'Jalan Melati',
  makan: function(porsi) {
    this.energi = this.energi + porsi;
    console.log(`Selamat makan, ${this.nama}`);
  },

  minum: function(liter) {
    this.mineral = this.mineral + liter;
    if (this.mineral < 20) {
      console.log(`Kamu masih kurang mineral, coba minum lagi`);
    } else {
      console.log(`Kamu sudah cukup mineral`);
    }
    console.log(`Selamat minum, ${this.nama}`);
  }
};


// 2. function declaration. function ini bisa digunakan berkali-kali
/* Make once, use everywhere
// Problemnya adalah dia melakukan duplikasi yang disimpan ke memori.
function Siswa(nama, energi) {
  let siswa = {};
  siswa.nama = nama;
  siswa.energi = energi;

  siswa.makan = function(porsi) {
    this.energi += porsi;
    console.log('Energii kamu bertambah');
  }

  siswa.gaming = function(jam) {
    this.energi -= jam;
    console.log('Energi kamu berkurang');
  }

  return siswa;
}*/
// Untuk mengakali duplikasi, kita bisa membuat object itu terpisah dari function.
const objectSiswa = {
  makan: function(porsi) {
    this.energi += porsi;
    console.log('Energi kamu bertambah');
  },

  gaming: function(jam) {
    this.energi -= jam;
    console.log('Energi kamu berkurang');
  },

  turu: function(jam) {
    this.energi += jam * 2;
    console.log('Energi kamu bertambah karena turu');
  }
};

// Kemudian kita tambahkan ke function nya
function siswaz(nama, energi) {
  let siswaz = {};
  siswaz.nama = nama;
  siswaz.energi = energi;
  siswaz.makan = objectSiswa.makan;
  siswaz.gaming = objectSiswa.gaming;
  siswaz.turu = objectSiswa.turu;

  return siswaz;
}

let budi = siswaz('budi', 10); // hasilnya sama aja dengan yang tidak dipisah, tapi tanpa duplikasi

//let pesertaDidik = Siswa('Megumi', 10);
//let andi = Siswa('andi', 10);
//console.log(pesertaDidik);

// 3. constructor function
// Dimana, inisialisasi dan return nya dihhilangkan
// Tips: biasakan pakai constructor dalam function
function Siswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function(porsi) {
    this.energi += porsi;
    console.log('Energii kamu bertambah');
  }

  this.gaming = function(jam) {
    this.energi -= jam;
    console.log('Energi kamu berkurang');
  }
}

// pada constructor, jika tidak memakai kata kunci <new>, maka dia hasilnya undefined
// Berikut perbandingannya antara memakai new dan tidak memakai new
let pesertaDidik = Siswa('Megumi', 10);
let andi = new Siswa('andi', 10);
console.log(pesertaDidik);

// 4. object.create
