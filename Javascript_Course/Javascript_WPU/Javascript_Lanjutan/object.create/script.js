// Materi object.create
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

// dengan object.create(), kita tidak perlu lagi memanggil atau mendaftarkan objectnya satu-satu, cukup kita definisikan di function
function siswaz(nama, energi) {
  let siswaz = object.create(objectSiswa);
  siswaz.nama = nama;
  siswaz.energi = energi;

  return siswaz;
}

let budi = siswaz('budi', 10); // hasilnya sama aja dengan yang tidak dipisah, tapi tanpa duplikasi
