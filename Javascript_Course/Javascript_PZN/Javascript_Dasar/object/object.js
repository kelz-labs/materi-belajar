// Tipe data object
/* Jadi sebenarnya, tipe data asli yang dimasukkan ke array itu adalah number.
Tapi kok string juga bisa? itu karena si string diubah ke model object oleh javascript. Jadi tetap terbaca. Mungkin okelah untuk pribadi, tapi jika di dalam tim, tentu ini bisa sangat menyulitkan.

Tipe data object itu mirip dengan array. Bedanya, index pada tipe dat a object boleh menggunakan string, tidak hanya number.
Perbedaan utama antara array dan object ada di tandanya dimana array memakai kurung kotak [] dan object dengan kurung kurawal {}.
*/

const orang = {}; //Keadaan sekarang dia kosong karena belum ada isinya.
orang["nama"] = "Haikel";
orang["umur"] = "18";
orang["alamat"] = "Bangka Belitung";
orang["bilangan"] = (1 + 0) < 1; // Contoh dengan tipe data number dengan operasi boolean dan aritmatika

console.log(orang); // Dan sekarang sudah ada isinya karena sudah ditambahkan nilai.

delete orang["umur"]; // Menghapus salah satu index dengan string/nama yang sudah ditentukan
console.table(orang);

// Sekarang kita pakai cara yang sedikit berbeda dengan melalui pendekatan json(JavaScript Object Notation Script)
const json = {
  nama : "Anime",
  asal: "Bangka Belitung",
  hobi: "Belajar hal baru",
  umur: 18,
  "profesi": "siswa/mahasiswa", // sesuai fungsinya, kita bisa mengganti arraynya dengan string. Dengan catatan mesti diapit petik dua
  "Spek Perangkat": "Asus X441NA, Celeron N3350, singleboot artix linux, xanmod kernel, 4gb of RAM, 500GB + 160GB HDD"
}

console.log(json);

// Mengakses Property object. Cara seperti ini lebih direkomendasikan karena mudah
console.info(`Nama: ${json.nama}`);
console.info(`Asal: ${json.asal}`);
console.info(`Hobi saya: ${json.hobi}`);
console.info(`Umur: ${json.umur}`);
console.info(`Profesi saat ini: ${json["profesi"]}`); //Ini contohnya jika indexnya berupa string

console.log(`Spek Perangkat: ${json["Spek Perangkat"]}`);



