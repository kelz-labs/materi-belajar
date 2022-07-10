// Spread Operator
// Berfungsi memecah iterables menjadi single element
// const mhs = ['Yuuki', 'Megumi', 'Sakura'];

// console.log(...mhs); // dari awalnya array, dipecah menjadi per element dengan spread(...)
// console.log(...mhs[0]);


// Menggabungkan 2 array dengan spread operator
// const mhs = ['Yuuki', 'Megumi', 'Sakura'];
// const dosen = ['John', 'Xina', 'Xi'];

// Spread
// Dalam spread juga bisa menambahkan nilai baru
// const daftar = [...mhs, 'Adi', ...dosen].join(' ');

// atau bisa juga dengan method concat
// const daftar2 = mhs.concat(dosen).join(' ');

// console.log(daftar);
// console.log(daftar2);


// Mengcopy array

// Cara yang kurang tepat
const mhs = ['Yuuki', 'Megumi', 'Sakura'];
const mhsCopy = mhs.join(', '); // variable mhs dicopy ke variable baru(mhsCopy)

console.log(mhsCopy); // walau hasilnya sama, tapi dia tidak benar benar mengcopy, hanya mereferensikan ke variable utama saja


// Cara yang lebih tepat
const mhs1 = [...mhs].join(', ');

console.log(mhs1);


// Mengganti nilai array
const mhsArr = [...mhs]; // mesti pakai spread
mhsArr[2] = 'Asuna'; // mengganti nilai index kedua

console.log(mhsArr.join(', '));


//
const listMhs = document.querySelectorAll('li');
const arr = [];

console.log(listMhs)

// dengan for biasa
for (let i = 0; i < listMhs.length; i++) {
  arr.push(listMhs[i].textContent);
}

console.log(arr.join(', '));

// dengan map
// karena map peruntukannya untuk array, ubah listMhs nya ke array
const mhsMap = [...listMhs].map(m => m.textContent);
console.log(mhsMap);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join(' ');
nama.innerHTML = huruf;

console.log(huruf);
