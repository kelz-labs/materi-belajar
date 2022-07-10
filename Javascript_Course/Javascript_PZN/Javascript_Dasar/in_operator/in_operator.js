// Materi inoperator
// Nanti hasil in operator ini berupa boolean (true jika ada property di object, atau false jika tidak ada property di object)
// Contoh:

const makanan = {
  sayuran: "daun katuk",
  buah: "anggur"
};

console.log(`${"buah" in makanan}`); // Hasilnya true

const kerupuk = {
  kerupukManis: "kerupuk coklat",
  kerupukAsin: "kerupuk ikan, kerupuk ayam"
};

console.log(`${"kerupukAsin" in kerupuk}`); // Hasilnya true

const kucing = {
  kucingKampung: "oren, coklat, putih",
  kucingElite: "anggora, persia, coons"
};

// Contoh pake if else
if ("kucingElite" in kucing) {
  console.log(`${"kucingElite" in kucing}`)
}

else {
  console.log("Tidak ada");
}

// Contoh yang false
const laptop = {
  asus: "rog, zenbook, vivobook",
  lenovo: "thinkpad, thinkbook, ideapad"
};

console.log(`${"axioo" in laptop}`); // Hasilnya false karena dia malah menunjuk ke objecct yang tidak pernah ada

// Contoh pemakaian di array
const susu = ["sgm", "anlene", "zee"];
console.log(1 in susu); // hasilnya true karena ada index ke 1 di susu
console.log(3 in susu); // Hasilnya false karena tidak ada index ke 3 di susu

// Contoh pemakaian jika dia null atau undefined
const nilai = [null, undefined];
const hasil = 0 in nilai;
console.log(`${hasil}`);
console.log(1 in nilai);
/*
Peringatan!

- in operator hanya mengecek apakah sebuah index atau object itu ada atau tidak, dan bukan valuenya
- Jadi andaikan saja sebuah object itu bernilai null atau undefined, maka tetap dianggap true oleh in operator
*/
