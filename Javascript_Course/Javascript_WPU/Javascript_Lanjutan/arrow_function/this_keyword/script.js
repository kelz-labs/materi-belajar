// Materi this function

/* const mahasiswa = function () {
  this.nama = 'Hirakawa',
  this.umur = '~~~',
  this.salam = function() {
    console.log(`Selamat datang, ${this.nama}, ${this.umur}`);
  }
}

const hirakawa = new mahasiswa();*/


// versi arrow function
// Note: tidak bisa mengubah constructor function dengan arrow function
/*const mahasiswa = function() {
  this.nama = 'Hirakawa',
  this.gender = 'Laki-laki',
  this.salam = () => {
    console.log(`Selamat datang, ${this.nama}, gender ${gender}`);
  }

  console.log(this);
}

const hirakawa = new mahasiswa();*/


// jika dengan object literal
// Harusnya, dalam arrow function itu tidak ada this. Jika di scope terdekat ataupun global gak ada this, maka dia akan undefined
const mhs1 = {
  nama: 'Hirakawa',
  hobi: 'catur',
  alamat: '~~~',
  // function biasa
  salam: function() {
    console.log(`Hai, ${this.nama}, hobimu bermain ${this.hobi}, alamatmu di ${this.alamat}`);
  },
  // berbeda jika pake arrow function, dalam arrow function tidak ada konsep this
  salam2: () => {
    console.log(`Hai, ${this.nama}, hobimu bermain ${this.hobi}, alamatmu di ${this.alamat}`);
  },

  salam3: () => {
    console.log(`Hai, ${this.nama}`);
  }
}


const mahasiswa = function () {
  this.nama = 'Megumi';
  this.umur = 33;
  this.salam = function() {
    console.log(`Halo, nama saya ${this.nama}, umur ${this.umur}`);
  }

  // inget, dalam arrow function tidak ada konsep this. Dan jika pada kodingan dibawah tidak dipakai arrow function, maka hasilnya NaN(Not a Number)
  setInterval(() => {
    console.log(this.umur++);
  }, 500);
}

const megumi = new mahasiswa();


// menambahkan effect size, warna
const box = document.querySelector('.box');
box.addEventListener('click', function() {

  let satu = 'size';
  let dua = 'caption';

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);

  // agar this nya tidak berisi window, maka kita bisa mengakalinya dengan arrow function
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
})
