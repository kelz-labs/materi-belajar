// Materi optional chaining
// Optional chaining digunakan untuk mengamankan ketika kita ingin mengakes property sebuah object dari data nuulish
// Jika kita mencoba mengaksees property dari sebuah object dari data nuulish tanpa mmenggunakan optional chaining operator, maka akan terjadi error
// Contoh:

// tanpa optional chaining, hasilnya akan error
/*let nilai = {};
let nilai2 = nilai.address.country;

console.log(nilai2);
*/

// Contoh pengecekan menggunakan if
let person = {};
let nilai4;

if (person.address !== undefined && person.address !== null) {
nilai4 = person.address.country; // disini, nilai country itu undefined, harusnya jika ia tidak pakai optional chaining, maka dia akan error
}

console.log(nilai4); //Lihat, ini hasilnya akan undefined karena kita menggunakan logika if

// Contoh pengecekan menggunakan optional chaining
let person2;
let harga = {};
let nilai5 = person2?.address?.country; // andai saja dalam pengecekan, person atau variable yang paling awal itu nilainya null, maka semuanya akan diganti menjadi null

console.log(nilai5); // Hasilnya undefined

// Lebih simple dan lebih mudah ketimbang pake logika if

// Contoh lain
let orang = {
daerah: "Bangka Belitung",
hobi: {
otomotif: "Motor 2tak seperti Satria hiu",
teknologi: "Yang berhubungan dengan komputer terutama UI/UX, Website, dan Linux"
}

}

let cek = orang?.hobi?.otomotif;
console.log(cek);
