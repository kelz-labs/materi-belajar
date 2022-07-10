// Materi
/*
// Mulltiline string
const obj = {
  nama: 'zong xina',
  umur: '40',
  no: '102934',
  email: 'zongxina@zong.com'
};

let inner = `<div class="obj">
  <h2>${obj.nama}</h2>
  <span class="no">${obj.no}</span>
</div>`

console.log(inner);

// Expression interpolation
let a = 10;
let b = 15;
console.log(`Jika a = ${a}, dan b = ${b}, maka hasil penjumlahannya adalah ${(a+b) * 2 / 2}`);

const x = 7;

// Menggunakan if biasa
if (x % 2 == 0) {
  console.log('Genap');
} else {
  console.log('Ganjil');
}

console.log(`${(x % 2 == 0) ? 'genap' : 'ganjil'}`); // shorthand if else
*/


// Tagged template
const nama = 'Sakura';
const umur = '23';
const email = 'sakura@zong.com';

// Secara default, tagged template bisa menerima parameter
// Dalam hal ini, jika dia tidak ada parameter default, maka dia akan berupa string,
// Sedangkan jika ada parameternya, maka akan berupa array
// Expression nya masuk sebagai parameter
// function coba(string, nama, umur) {
//  return nama;
// }
// const str = coba`Halo, nama saya ${nama}, umur ${umur} tahun`; //coba disini ibarat parameter, jadi si parameter bakal masuk ke function dan mengembalikan nilai coba. Jadi, stringnya tidak dipakai
// console.log(str);


// rest parameter atau dengan titik tiga(...)
// fungsinya untuk mengambil expression ${}
// function coba(string, ...values) {
//  return values;
//}

//const str = coba`Halo, saya ${nama}, umur ${umur} tahun.`;
//console.log(str);


// menampilkan string yang tersisa
// function coba(strings, ...values) {
  //let result = '';
  //strings.forEach((str, i) => {
  //  result += `${str}${values[i] || ''}`;
  //});
  //return result;

  // pakai reduce, lebih singkat
//  return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '');
//}

//const str = coba`Halo, nama saya ${nama}, saya ${umur} tahun.`;
//console.log(str);


// Highlight
function highlight(strings, ...values) {

  // pakai reduce, lebih singkat
  return strings.reduce((result, str, i) => `${result}${str} <span class="color">${values[i] || ''}</span>`,'');
}

const str = highlight`Halo, nama saya ${nama}, saya ${umur} tahun, dan alamat email saya adalah ${email}`;

// Jadi, yang dihighlight disini adalah values nya, selain itu tidak
// console.log(str)
document.body.innerHTML = str;
