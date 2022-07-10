// Materi function return value
/*
Secara default, function itu tidak menghasilkan value apapun, namun jika kita ingin,
kita bisa membuat sebuah function yang dapat mengembalikan value

Agar function bisa menghasilkan value, kita bisa menggunakan kata kunci return di dalam function nya

Dan di dalam block function, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu
diikuti dengan data yang kita ingin hasilkan.

Function hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus, kita bisa
menggunakan Array sebagai return valuenya

*/

// Contoh function biasa
function mouse(hewan, penghubung, alat) {
  console.log(hewan, alat); // Misal disini yang dideklarasikan cuma hewan sama alat
}

mouse("Tikus got", "dan", "Mouse komputer");


// Contoh dengan return value
function parameter(anime) {
  const kekuatan = `Anime no ${anime}`;
  return kekuatan; // Andai jika dia tidak direturn, maka nilainya akan undefined
}

const hasil = parameter("Chikara");
console.log(hasil);

function laptop(gaming, slimbook) {
  console.log(gaming,slimbook);
}

laptop("Asus ROG", "Lenovo Thinkpad");

// Function return value lebih dari satu
// return lebih dari sekali itu diperbolehkan, asal penempatannya yang harus tepat
function getValue(value) {
  if (value > 90) {
    return "Sangat Baik";
  }

  else if (value >= 80) {
    return "Baik";
  }

  else if (value >= 60) {
    return "Cukup";
  }

  else {
    return "Kurang";
  }
}

const nilaiMerah = getValue(40);
const nilaiBaik = getValue(80);
const nilaiMantrap = getValue(99);
console.log(nilaiMantrap);


/*Cara menghentikan eksekusi return

Saat kita menggunakan kata kunci return,  maka kode setelah return tersebut tidak akan dieksekusi
Kita bisa menggunakan return untuk menghentikan eksekusi sebuah function
*/
function isContains(array, searchValue) {
  for (const element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

console.log(isContains([1,2,3,4,5,6,7,8,9,10], 5));

// Contoh lagi

