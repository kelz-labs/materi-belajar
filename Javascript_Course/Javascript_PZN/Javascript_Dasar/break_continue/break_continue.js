/* Materi break dan continue
Kita biasanya sudah mengenal si break ini di switch statement, yakni untuk menghentikan perulangan case nya.
Beda dengan continue, kalo continue digunakan untuk menghentikan perulangan saat ini dan melanjutkan ke perulangan yang selanjutnya.

Contoh:
*/

for (let i = 10; i >= 10; i++) {
  console.log(i);
  break;
}
// Nah disini karena dia menggunakan break, jadi dia cuma ngeprint sekali.

// Atau pake metode seperti ini juga bisa
let j = 10;

while (true) {
  console.log(`Perulangan ke ${j++}`);
  if (j > 20) {
    break;
  }
}

/// Bisa juga kita pake do while
do {
  console.log("Perulangan");
  break;
} while (3 > 2);


// Atau bermain-main seperti ini
let belanja = 1+6;

if (belanja > 6) {
  do {
    console.log(`Belanjaan ke-${belanja++}`)
  }
  while (belanja < 10)
}

for (let b = 1; b <= 200; b++) {
  if (b % 2 == 0) {
    continue;
  }
  console.log(`Perulangan Ganjil ke-${b}`);
}

for (let c = 1; c <= 200; c++) {
  if (c % 2 == 0) {
    continue;
  }
  console.log(c);
}
