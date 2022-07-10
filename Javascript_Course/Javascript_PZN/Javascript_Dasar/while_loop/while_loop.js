/* while loop
Jadi, while loop itu adalah versi perulangan yang lebih sederhana dibandingkan for loop
di while loop, hanya terdapat kondisi perulangan. Jadi ga ada init statement dan post statement
Jika hanya butuh perulangan sederhana, maka while jawabannya
Contoh:
*/

let i = 200;

while (i <= 210) {
  console.log(i++);
}
// disini, dia akan melakukan perulangan sampai 10 kali dan melakukan increment dari 200 sampai increment
// Bagaimana jika dia tanpa increment?

//let a = 200;

//while (a <= 200) {
//  console.log(a);
//}
// nilainya akan konstan alias tetap 200 tanpa adanya increment atau decrement, tapi akan melakukan infinity loop karena selalu memenuhi kondisi

// Bisa juga increment nya kita taruh di pernyataan
let b = 1;

while (b <= 10) {
  console.log(`Perulangan ke ${b++}`)
}

//atau incremen nya kita taruh setelah pernyataan? Bisa
let c = 1;

while (c <= 10) {
  console.log(`Perulangan ke ${c}`);
c++;
}
