// Operator logika non boolean
// Jadi, di dalam javascript kita bisa menggunakan logika AND dan OR untuk tipe data selain boolean.

// Operator OR (||) di non boolean
/*
- Operator logika membaca dari kiri ke kanan
- Operator ini akan mengambil nilai pertama yang truthy
- Jika tidak ada satupun yang bernilai truthy, maka nilai yang terakhir akan diambil
Contoh:
*/

console.info("Hello" || "Hai");
// Lihat, dia akan mengambil nilai dari yang paling kiri.

console.info("Hello" || "");
// Jika salah satu string itu kosong, maka dia akan mengambil yang ada nilainya, tidak peduli itu di kiri atau di kanan

console.info("" || "Hai");
// Sama seperti di atas, disini dia mengambil nilai yang kanan karena nilai di kirinya kosong.

console.info(null || 0);
// Jika keduanya falsy, makanya dia akan mengambil nilai yang kanan, jadi hasilnya 0

console.info(null || null);
// Hasilnya null karena keduanya null

console.info(false || true);
// Dia akan mengambil nilai true karena true adalah nilai truthy
// Sedangkan false termasuk nilai falsy

console.info(0 || "saya");
// Ingat kalo OR, apabila salah satu true, maka akan diambil yang true. Sama seperti ini, dia akan mengambil nilai "saya" karena stringnya mempunyai nilai

const json = {
  nama: "",
  asal: "",
  gender: "",
  alamat: null
}

const none = json.nama || json.asal || json.gender || json.alamat;
console.log(none);
// Hasilnya null


// Operator AND (&&) di non boolean
// Dimana dia akan mengambil nilai falsy yang pertama
// Jika keduanya maah truthy, maka yang diambil adalah nilai terakhir. Contoh:

console.info("saya" && 0);
// Ingat kalo AND, apabila salah satu false, maka yang diambil juga nilai false.
// Disini dia mengambil nilai 0 yang notabene itu nilai falsy

console.info(null && 0);
// Jika kedua nilai itu falsy, maka sama saja dengan OR, yang diambil itu dari kiri.

console.info("ingfo" && "Anime");
// Jika nilai keduanya truthy, maka konsepnya mirip-mirip dengan OR tadi, yakni dia akan mengambil nilai yang kanan

console.info("boolean" && ["ular", "kucing"]);
// Hasilnya yang ada di dalam array, karena array bernilai true

const data = [
  "ular",
  "macan",
  null,
  0,
  2
]

console.info(data[0] && data[2]);
// Hasilnya null karena index kedua itu bernilai null
