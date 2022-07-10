/*
Materi strict mode

- Secara default, javascript berjalan di mode non strict, alias sloopy mode
- Pada ECMASCRIPT 5, diperkenalkan mode strict, dimana ketika strict mode dijalankan, maka akan merubah beberapa cara kerja di Javascript, seperti:
  * merubah beberapa javascript error dari yang tadinya silent error, menjadi throw error(terlihat)
  * memeperbaiki beberapa kesalahan engine javascript untuk optimasi
  * Menolak beberapa kode perintah yang kedepannya akan digunakan di ECMAScript

- Cara menyalakan user strict cukup simpel, tinggal kasih 'use strict' di awal file js
*/

// strict
'use strict';

/*function useStrict() {
  const orang = {
    namaPertama: 'ginkgo'
  }
  with (orang) {
    console.log(namaPertama);
  }
}

useStrict();*/

function daftar() {
  const person = {
    nama: 'ginkgo'
  }
  with (another) {
    console.log(nama)
  }
}

daftar();

// Hasilnya akan error karena ada with statement saat strict modee
