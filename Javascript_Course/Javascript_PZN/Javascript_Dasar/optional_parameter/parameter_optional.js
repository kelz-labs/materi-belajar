// Materi optional parameter
/*
- Secara default, parameter di function itu bersifat optional
- Artinya kita tidak wajib mengisi value nya ketika memanggil function
- Jika tidak ada value yang kita kirim ke paramter ketika memanggil function, maka
secara otomatis parameter tersebut akan bernilai undefined

Contoh:
*/

function halo(firstName, middleName, lastName) {
  console.log(firstName);
  console.log(middleName);
  console.log(lastName);
}

halo("Haikel");
// Mungkin di bahasa lain, ini akan error karena tidak didefinisikan, tapi kalo di javascript, ini tidak error dan akan bernilai undefined

// Tapi bagaimana jika parameternya kelebihan?
function sayHalo(siapa, dimana, alamat) {
  console.log(siapa);
   console.log(dimana);
   console.log(alamat);
}

sayHalo("sakura", "lagi di jalan", "ga tau", "mangsud");
// Maka, yang ditampilkan hanya parameter yang sesuai saja, sedangkan yang kelebihan atau tidak sesuai, tidak akan ditampilkan
