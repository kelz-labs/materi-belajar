// Beda postfix dan prefix
// postfix++ : nilainya akan bertambah 1 jika nilai awalnya diinisialisasikan
// ++prefix : nilainya akan bertambah satu di awal, jadi nilai awal tersebut langsung ditambah, tidak perlu diinisialisasikan terlebih dahulu
// Contoh:
let postfix = 5;

do {
  console.log(postfix++);
} while (postfix > 3);
// Hasilnya: 5, 6, 7, 8, 9, dst....
// Lihat, 5 nya mesti diinisialisasikan terlebih dahulu agar incrementnya jalan


let prefix = 5;

do {
  console.log(++prefix);
} while (prefix > 3);
// Hasilnya: 6, 7, 8, 9, dst...
// Sedangkan ini tidak perlu, nilai awal langsung diincrement
