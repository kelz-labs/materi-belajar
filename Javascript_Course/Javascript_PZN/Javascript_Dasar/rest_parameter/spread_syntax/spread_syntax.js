// Materi spread syntax
/*
Kadang kita terlanjur memiliki data berupa array.
Tapi untungnya kita juga bisa mengirim aray ke Rest parameter.
Kita bisa gunakan ...(titik tiga kali) diikuti dengan arraynya ketika memanggil function.
Fitur ini dinamakan spread syntax

Contoh:
*/

function makanan(mie, nasi, ...gorengan) {
  let total = 0;

  for (const item of gorengan) {
    total += item;
  }

  console.log(`Ada ${mie}, ${nasi}, ${gorengan}`);
}

makanan('Mie sedap', 'Nasi goreng', ...[1,2,2,3,4,5,7+100,6]); // Jadi kita bisa juga memasukkan array ke dalam rest parameter


/*Tambahan
Sebelum rest parameter, ada yang namanya arguments object.
Kurang lebih seperti ini
*/

function lama() { // ga usah pake argumen
  let old = 0;

  for (const argLama of arguments) {
    old += argLama;
  }

  console.log(`Totalnya adalah ${old}`);
}

lama(1,2,3,4,5,6); // Masalahnya adalah, di arguments object ini kita ga bisa menentukan urutan parameternya, misal a no 1, atau b no 2, itu ga bisa.
