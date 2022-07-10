// Materi falsy and truthy
// Falsy adalah value yang ketika dalam konteks boolean, dia diangga false.
// Jadi di javascript, kondisi itu tidak hanya bisa boolean, tapi diluar boolean pun bisa. Namun kita harus tahu beberapa data falsy, atau dianggap false.

let nilai;
let string = "";
let nul = null;
let nol = 0;
let nan = Number("were");
let object = {};

// nilai
if (nilai) {
  console.log("benar");
}
else {
  console.log("salah");
}

// string
if (string) {
  console.log("benar");
}
else {
  console.log("salah");
}

//nul
if (nul) {
  console.log("benar");
}
else {
  console.log("salah");
}

//nol
if (nol) {
  console.log("benar");
}
else {
  console.log("salah");
}

// nan
if (nan) {
  console.log("benar");
}
else {
  console.log("salah");
}

// object
if (object) {
  console.log("benar"); // dia hasilnya akan benar karena objectt akan dianggap sebagai true walau tidak ada isinya
}
else {
  console.log("salah");
}
