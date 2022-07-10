// Materi with statement
// with statement merupakan fitur yang digunakan untuk menurunkan sebuah scope data.
// Dengan menggunakan with statement, kita bisa mengakses property dalam sebuah object tanpa harus menyebutkan objectnya.
// Contoh:


// Tanpa with statement
const bahasa = {
  frontend: "HTML, CSS, JAVASCRIPT",
  devops: "LINUX, DOCKER",
  backend: "PHP, GOLANG, NODEJS"
}

console.log(bahasa.frontend);
console.log(bahasa.devops);
console.log(bahasa.backend);

// Dengan with statement

with (bahasa) {
  console.log(frontend);
  console.log(devops);
  console.log(backend);
}

// Walau menarik, tapi with statement ini tidak direkomendasikan. Bahkan tidak dibolehkan.
// Karena bisa membuat kode menjadi agak ambigu

// Contoh keambiguan kode dengan with

const person = {
  jenis: "Homo Sapien",
  kelamin: "Laki-laki",
  nama: "Budi"
}

const jenis = "Homo Erectus";
const nama = "Udin";

with (person) {
  console.log(jenis);
  console.log(nama);
}

// Walau yang dinyatakannya memang jenis dan nama yang ada di person, tapi tetap saja ini akan menjadi permasalahan ketika seseorang membaca kodenya.
