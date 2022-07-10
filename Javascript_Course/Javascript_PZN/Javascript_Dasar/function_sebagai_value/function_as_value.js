// Materi function as value
/*
Function itu tidak hanya bisa digunakan sebagai kode program yang dieksekusi, tapi juga bisa sebagai value
Artinya, function bisa disimpan ke dalam variable, bisa juga dikirim melalui parameter ke function yang lainnya.
*/

// Membuat function
function anime(romance, sliceOfLife) {
  console.log(`Siap, ${romance}, ${sliceOfLife}`);
}

// Mendefinisikan function anime itu ke dalam const japan
const japan = anime;

// Memasukkan nilai function melalui si japan, bukan lagi dengan anime
japan('Gotoubun', 'Natsume');

// Pake anime pun bisa
anime('Gotoubun', 'Natsume');


// function di parameter
function tokyo(midnight) {
  midnight('Hai....', 'kamu'); // ibarat pake anime()
}

tokyo(japan);  // tokyo(anime), sama saja karena japan sudah didefinisikan sebagai anime
tokyo(anime);
