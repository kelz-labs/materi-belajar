// Materi rest parameter
/*
- rest parameter itu adalah fitur dimana kita bisa mengirim data sebanyak-banyaknya pada satu parameter,
dan secara otomatis akan dikonversi ke array

- Untuk membuat rest parameter ini ada ketentuan
- rest parameter hanya boleh ada satu di function, dan tidak boleh lebih dari satu
- rest parameter hanya boleh berada di posisi paling akhir. Tidak boleh ada di depan, juga di tengah.
  Kecuali kalau memang cuma ada satu(1) parameter.
- Di bahasa lain, ada juga yang bilang ini adalah variable argument
*/

// REST parameter diawali dengan titik tiga(...)
function daerah(provinsi, kota, ...kabupaten) {

  // Dengan rest parameter, kita bisa melakukan perulangan
  for (let item = 1; item < 5; item++) {
    console.log(item);
  }

  console.log(`Nama kabupaten: ${provinsi}, ${kota}, ${kabupaten}`);
}

daerah('Jakarta', 'Jakarta', 'Jakarta Timur', 'Jakarta Selatan', 1+7);

function sum(name, ...data) {
  /*let total = 0;

  for (const same of data) {
    total += same;
  }
  */
  console.log(`${name} aku ${data}`);
  }

  sum('Mengapa', 'begini');

