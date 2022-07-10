// Materi for of
// Kalo for in itu digunakan untuk melakukan iterasi property atau index, berbeda dengan for of.
// for of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti array, string, dan lain-lain
// for of tidak bisa digunakan untuk melakukan iterasi data di object, karena object bukanlah iterable. Contoh:

const names = ["Yuuki", "Sakura", "Megumi"];
// disini, ada 3 array, nah nanti yang diprint itu semua array ini sebanyak 3 kali, karena ya jumlah nilai di dalam array nya juga ada 3

for (const name of names) {
  console.log(`${names}`);
}

const karakter = "Haikel Sakura"; // Berbeda dengan array, kalo di string, dia akan memprint, sesuai jumlah kata.


for (const char of karakter) {
  console.log(`${karakter}`);
}

// for of ini tidak bisa dipakai untuk object. Kalau dipakai untuk object, dia akan error.
/*const person = {
  firstName: "Sakura",
  lastName: "Yuuki"
};

for (const orang of person) {
  console.log(`${person}`);
}
*/
// TypeError: person is not iterable

const mouse = ["Logitech", "Keychron", "Sades", "Keychron"];

for (const ms of mouse) {
  console.log(`${mouse[0]}`); // kita juga bisa mengambil berdasarkan index. Jadi index tersebut akan dinyatakan sebanyak 4 kali sesuai jumlah nilai di array
}
// Hasilnya dia memprint index 0 di array sebanyak 4 kali
