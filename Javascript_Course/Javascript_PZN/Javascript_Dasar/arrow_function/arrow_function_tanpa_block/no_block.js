/* arrow function tanpa block (alias versi sederhana)

- Jika sebuah arrow function itu isinya sederhana, misal hanya satu baris,
  maka kita bisa membuat arrow function tanpa harus menggunakan block
- Arrow function mendukung return value(dengan ketentuan jika pake block, maka butuh kata return. Sedangkan kalo pake no block, maka tidak perlu kata return)

Jika pake function biasa tanpa arrow:
*/

const sayHello = function(name) {
  const orang = 'Laki-laki';
  console.log(orang);
}

sayHello();

// Jika pake arrow function biasa
const makanan = (jenis) => {
  const buah = 'durian, anggur';
  const sayur = 'kol, kecambah';
  console.log(buah);
  console.log(sayur);
}

makanan();

// Jika pake arrow function no block
const bahasa = (indonesia) => console.log('bahasa bangka, bahasa orang toboali');
bahasa();

// Contoh return value menggunakan no block, dimana dia tidak perlu kata return
const sum = (first, second) => first + second;
const hasil = sum(10,10) + 50;
console.log(hasil);

const statis = (website) => website + website;
console.log(statis(10));

// arrow function tanpa kurung parameter
const karakter = char => console.log(`Nama saya adalah ${char}`);
karakter('Megumi');
