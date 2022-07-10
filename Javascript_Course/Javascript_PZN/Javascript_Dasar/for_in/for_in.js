// Materi for in
// for in merupakan perulangan for yang digunakan mengiterasi seluruh data property di object atau index di array
// Jadi dia akan memeriksa property dalam sebuah object ataupun memeriksa index pada sebuah array
// Note: Iterasi itu kayak semacam sifat tertentu dimana suatu urutan atau lebih langkah algoritmik dilakukan di loop program
// Contoh:

// Ini kalo dia pake property
const orang = {
  namaDepan: "Yuuki",
  alamat: "Tokyo",
  blok: "14"
}

for (const property in orang) {
  console.log(`${property} = ${orang[property]}`);
}

// Ini kalo dia pake array
const person = ["Yuuki", "Sakura"];

for (const index in person) {
  console.log(`${index} = ${person[index]}`);
}
