// Undefined
// Undefined adalah sebuah kata kunci di javascript, dimana jika variable tersebut belum diisi dengan nilai, maka hal tersebut disebut Undefined.
// Sesuai namanya, undefined itu tidak terdefinisi. Contoh:

let name; // Nah ini undefined karena belum ada nilainya
console.log(name); // saat diprint pun akan menghasilkan undefined

// Contoh jika dia ingin mengambil data dengan index yang tidak pernah ada
const jurusan = ['IPS', 'MIPA', 'Bahasa'];
console.log(jurusan[3]); // Hasilnya akan undefined

// Contoh jika ia pake if
if (jurusan[3] == undefined) {
  console.log("Tidak Terdefinisi");
}

else {
  console.log("Terdefinisi");
}

let person = {};

if (person.name == undefined) {
  console.info("Tidak terdefinisi");
}

else {
  console.info("Terdefinisi");
}
