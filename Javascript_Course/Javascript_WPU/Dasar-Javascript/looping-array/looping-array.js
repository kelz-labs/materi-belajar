// Looping pada array javascript

/* 1. looping dengan foreach(). foreach = untuk setiap elemen
 Rumus: variable.foreach((element, index) => {
    console.log(element, index); 
})*/
let a = [4, 3, 10, 2, 1]; 

a.forEach((e, i) => {
    console.log(`Anak ke-${e} index ke-${i}`); 
})

/* 2. looping dengan map(). Apa bedanya dengan foreach? map bisa mengembalikan array
Rumusnya sama aja dengan yang diatas
*/
let b = a.map((e) => {
    return e * 2; 
})

console.log(b.join(", ")); 

/* 3. sort() untuk mengurutkan isi array yang tidak berurutan*/
b.sort();
console.log(b.join(", ")); 

// untuk mengurutkan angka yang nilainya > 9, maka kita perlu melakukan seperti ini: 
b.sort((a, b) => {
    return a - b;
})

console.log(b.join(", "));

/* 4. filter() untuk menemukan element dalam array. Bisa mengembalikan banyak element*/
let c = a.filter((e) => {
    return e > 2;
})
console.log(c);

/* 5. find() untuk menemukan element dalam array. Mengembalikan hanya satu element*/
// apabila saat proses find, element yang dituju tidak ditemukan, maka dia akan mengembalikan undefined
let d = a.find((e) => {
    return e < 4; 
})
console.log(d);