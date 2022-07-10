// Multiline string. Jadi maksudnya disini string template bisa dimasukkan enter untuk memberi jarak atau ke kalimat baru.
// Cukup dengan memencet enter dan kita sudah memberi jarak. Contoh:

const objek = "Azim";

console.log("Azim ingin menonton Anime Romance. Apakah rekomendasi yang akan kita berikan?");

let rekomendasi1 = "Kimi no nawa, Your lie in april, dan Koe no katachi";
let rekomendasi2 = "Nisekoi, Ao Haru Ride, dan Oregairu";

console.log(
  `Apa saja rekomendasinya?

  1. ${rekomendasi1}
  2. ${rekomendasi2}
  `
);

console.log(
  `Azim pun mengambil rekomendasi 1, yaitu ${rekomendasi1}`
);

// Hanya tanda backtick(``) saja yang support multiline, selain itu tidak.
