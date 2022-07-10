// method array Javascript

// 1. Menggabungkan elemen dalam array menjadi string dengan method join()
let arr = ["Ingfo", "Thinkpad", true]; 
console.log(arr.join(", "));

// 2. menambah elemen baru ke posisi terakhir dalam array dengan push()
// Note: dalam push(), kita bisa memasukkan lebih dari satu elemen yang ingin dimasukkan
arr.push("Anime", "Saya tuh", "Gentoo Linux");
console.log(arr.join(", "));

// 3. Menghapus elemen yang ada di posisi terakhir dengan pop()
arr.pop(); 
console.log(arr.join(", "));

/* 4. Kalau tadi untuk elemen terakhir, maka ini bekerja di elemen pertama. 
unshift() untuk menambah elemen baru ke posisi pertama atau awal, 
*/
arr.unshift("No ingfo"); 
console.log(arr.join(", "));

// 5. shift() untuk menghapus elemen pertama
arr.shift(); 
console.log(arr.join(", "));

/* 6. splice() untuk menambahkan elemen baru di posisi tengah
Rumus: splice(indexAwal, mauDihapusBerapa, elemenBaru)
untuk parameter elemenBaru, elemennya bisa lebi dari satu
arr.splice(2, 0, "Tengah");
arr.splice(1, 5, "Oke banh");
console.log(arr.join(", "));
*/ 

/* 7. slice() 
Rumus: slice(indexAwal, indexAkhir)
Note: index terakhir tidak akan ikut slice, jadi ibaratnya cuma pembatas.
dan method slize() akan menghasilkan array baru
*/
let arr2 = arr.slice(0, 3); 
console.log(arr2.join(", "));
