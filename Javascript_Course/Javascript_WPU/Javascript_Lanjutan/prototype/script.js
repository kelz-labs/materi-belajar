// Materi prototype
// Materi object.create
/* const objectSiswa = {
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
};*/

// dengan object.create(), kita tidak perlu lagi memanggil atau mendaftarkan objectnya satu-satu, cukup kita definisikan di function
/*function siswaz(nama, energi) {

  this.nama = nama;
  this.energi = energi;
}

siswaz.prototype.makan = function(porsi) {
  this.energi += porsi;
  return `Selamat makan, ${this.nama}`;
}

siswaz.prototype.turu = function (jam) {
  this.energi += jam * 2;
  return `Selamat tidur, ${this.nama}`;
}

siswaz.prototype.gaming = function(jam) {
  this.energi -= jam;
  return `Tidak, cepat kerjakan prmu, ${this.nama}`;
}

let budi = new siswaz('budi', 10); // hasilnya sama aja dengan yang tidak dipisah, tapi tanpa duplikasi
*/

// JS OOP
class siswaz {
  constructor(nama, energi, mineral) {
    this.nama = nama;
    this.energi = energi;
    this.mineral = mineral;
  }

  makan(porsi) {
    this.energi += porsi;
    return `Selamat makan, ${this.nama}`;
  }

  gaming(jam) {
    this.energi -= jam * 1.5;
    return `Selamat gaming, ${this.nama}`;
  }

  turu(jam) {
    this.energi += jam * 2;
    return `Selamat turu, ${this.nama}`;
  }

  minum(liter) {
    this.mineral += liter * 1.2;
    return `Selamat minum, ${this.nama}`
  }
}

let budi = new siswaz('Budi', 10);

class karyawan {
  constructor(nama, poin) {
    this.nama = nama;
    this.poin = poin;
  }

  absen(daftar) {
    this.poin += daftar;
    return `Social Credit++`;
  }

  bolos(daftar) {
    this.poin -= daftar *2;
    return `Social credit--`;
  }

  sakit(daftar) {
    this.poin == daftar;
    return `Social Credit`;
  }
}

let andi = new karyawan('Andi', 100);

/* class mobil {
  constructor(spedometer, bensin) {
    this.spedometer = spedometer;
    this.bensin = bensin;
  }

  pemanasan(lama) {
    this.spedometer == 0;
    this.bensin -= lama *0.01;
  }

  jalan(lama) {
    this.spedometer += lama;
    this.bensin -= lama * 0.1;
  }

  spbu(liter) {
    this.bensin += liter;
  }
}

let panther = new mobil(0, 100);
*/

let array = [1,2,3,4,5];

// sort() untuk mengurutkan
// reverese unntuk membalikkan
const sort = array.sort();
const reverse = array.reverse();
const length = array.length;
console.log(sort, reverse, length);

function orang(nama, domisili, sekolah) {
  this.nama = nama;
  this.domisili = domisili;
  this.sekolah = sekolah;
}

let zaki = new orang('zaki', '~~~', 'SMKN 1 Tokyo');
