// Operator logika adalah operator untuk dua buah data boolean. Hasil dari operator logika adalah boolean lagi
// Contoh proses penentuan piala AFF Final:

let Indonesia;
let Malaysia;

Indonesia = 5;
Malaysia = 5;

const injuryTime = 10;

Indonesia = 6;
Malaysia = 6;

if (Indonesia == Malaysia) {
  console.log("Pertandingan akan dilanjutkan dengan penalti. ");
}

else {
  console.log("Salah satu pihak menang");
}

// Contoh pemakaian operator unary (!) atau kebalikan nilai

let mangga = 100;
let jeruk = 200;

if (mangga < jeruk) {
  console.log(!false); // Walau nilainya false, tapi karena di depannya ada operator unary, maka hasilnya dibalikin jadi true
}
