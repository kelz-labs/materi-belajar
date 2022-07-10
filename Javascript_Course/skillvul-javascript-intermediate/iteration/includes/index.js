/* 
Materi includes 

.includes() digunakan untuk memeriksa apakah terdapat salah satu data yang kita ingikan dalam elemen array yang kita terima, jika tidak ada maka .includes() akan membalikan nilai false dan menjadi true jika sebaliknya.
Struktur kode dari .includes():

array.includes("--data yang kita cari--");

Agar dapat memahami lebih baik, maka kita dapat melihat contoh di bawah ini:

const foods = ['siomay', 'dimsum', 'gyoza', 'pangsit'];

const isThereDimsum = foods.includes('dimsum');
const isTherePizza = foods.includes('pizza');

console.log(isThereDimsum); 
// Output: true
console.log(isTherePizza); 
// Output: false

Dari contoh di atas, kita melakukan pengecekan makanan dari list data array foods, apakah ada pizza atau dimsum di dalam array foods. Dapat kita lihat bahwa .includes() hanya me-return nilai boolean. Ada cara lain yang dapat digunakan untuk memeriksa ketersediaan data, seperti:

console.log(!!foods.find(data => data === 'dimsum'))  // Output: true --> menggunakan find

Namun, .includes() memberikan kemudahan penulisan kode dalam pengecekan elemen array dan memberikan hasil balikan boolean.

📝  Catatan:

Sebagai info tambahan, dari kode di atas, kita dapat melihat penulisan tanda double negasi !!, ini adalah trik penulisan kode JavaScript yang artinya, tanda seru pertama (negasi pertama) mengubah data (tipe data apapun) ke bentuk boolean, lalu tanda seru kedua (negasi kedua), mengubah boolean menjadi nilai boolean yang kita harapkan.

Sebagai contoh untuk melihat fungsi dari operator double negasi !!:

const pizza = foods.find(data => data === 'pizza')); 

console.log(pizza); 
// Output: undefined

// Jika undefined diberi negasi
console.log(!undefined);
// Output: true --> sedangkan kita mengharapkan jika undefined, berarti kondisi false.

// maka agar hasilnya negatif, kita beri double negasi
console.log(!!undefined);
// Output: false
Penulisan double negasi ini bermanfaat untuk mempersingkat penulisan saja. Tapi hal ini dikembalikan ke preferensi masing-masing programmer.
*/

// Example
let makanan = [
  "batagor", 
  "pempek kapal selam", 
  "mie kuah ikan", 
  "ngjan", 
  "bujan"
]

let includeBujan = makanan.includes("bujan"); 
console.log(includeBujan); // expected: true, karena bujan beneran ada di array


// Latihan
const foods = ['siomay', 'dimsum', 'gyoza', 'pangsit'];

/*
Di dalam function checkFood(), buatlah dua variabel yang masing-masing akan di-assign dengan nilai boolean hasil dari kondisi yang ada yaitu:

isNotEmptyString untuk memastikan foodName bukan string kosong "" menggunakan operator !==,
foodIsIncluded untuk mengecek keberadaan foodName di dalam array foods menggunakan .includes().

Lalu buat sebuah if-else-statement untuk mengecek kebenaran dari dua variabel yaitu isNotEmptyString dan foodIsIncluded menggunakan operator &&.
*/

function checkFood(foodName) {
    let isNotEmptyString = foodName !== "";

    let foodIsIncluded = foods.includes(foodName);


    if(isNotEmptyString && foodIsIncluded) {
        console.log("Makanan sudah tersedia"); 
    } else {
        foods.push(foodName); 
        console.log(foods);  
    }
}

checkFood("Kwetiaw"); 
