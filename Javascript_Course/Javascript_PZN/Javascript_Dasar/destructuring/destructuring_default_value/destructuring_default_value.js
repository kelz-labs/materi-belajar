/*
- Yang paling menarik di destructuring adalah kita bisa menambahkan default value
- Jadi misal kita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
- Begitu juga pada object, jika ternyata property nya tidak ada, maka kita bisa menambahkan default value

*/

// Contoh
const nama = ['Sakura', 'Yuuki', 'Hagura']; // Jika suatu nilai di dalam array itu tidak ada, maka akan diganti default value, jika semua nilai malah tidak ada, juga beserta nilai defaultnya maka nilainya undefined
const [namaPertama = 'void', namaTerakhir = 'void', namaTengah = 'void'] = nama;

console.log(namaPertama, namaTerakhir, namaTengah);
