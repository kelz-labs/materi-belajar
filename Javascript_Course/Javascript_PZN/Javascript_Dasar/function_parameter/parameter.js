// Materi function parameter
// Kita bisa mengirim informasi ke function yang ingin kita panggil
// Untuk melakukan hal tersebut, kita perlu menambahkan parameter atau argument di function yang sudah kita buat.
// Parameter ditempatkan di dalam kurung () di deklarasi method
// Parameter bisa lebih dari, jika lebih dari satu, makaharus dipisah dengan menggunakan tanda koma
// Contoh:

function tontonan(anime, manhwa) {
  console.log(`${anime} ${manhwa}`);
}

// Sesuai urutan, maka 1 itu punya anime, yang kedua punya manhwa
tontonan("Kimi no uso", "Bokutachi wa remake");// kimi no uso akan masuk anime, dan bokutachi untuk manhwa
tontonan("Ga tau", "Ga tau bang");// sama seperti yang di atas, "ga tau" akan masuk ke anime, dan "ga tau bang" akan masuk ke manhwa
// Hasilnya nanti akan berurutan dari anime, kemudian manhwa

function mobil(lcgc, suv) {
  console.log(`${lcgc} ${suv}`);
}

mobil("sigra", "fortuner");
mobil("xenia", "rush");

// Contoh jika parameternya lebih dari dua

function hp(xiaomi, oppo, vivo, sony) {
  console.log(`${xiaomi}, ${oppo}, ${vivo}, ${sony}`);
}

hp("Redmi note 8", "Redmi note 9", "Mi 10", "Mi 9");
hp("a37", "a57", "f1", "f3s");
hp("y53", "y81"); // dia akan bernilai undefined bila salah satunya tidak didefinisikan
hp("Xperia miro", "Xperia X Compact", "Xperia X Performance", "Xperia Z5");
