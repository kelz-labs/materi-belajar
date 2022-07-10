// Materi for of dan for in

/*
1. for of

for of adalah sebuah looping yang bisa mengulang atau menelusuri object-object yang iterable.

Contoh iterable object:
- String
- Array
- Arguments/NodeList
- TypedArray
- Map
- Set
- User-defined iterables
*/



/*
2. for in

for in itu sebuah looping yang bisa dilakukan untuk property


*/
// Studi kasus:
const mhs = ['Andi', 'Budi', 'Galih'];

console.log('for biasa');
// for biasa
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

console.log('forEach');
// forEach
mhs.forEach((e,i) => {
  console.log(`Nama ${e} orang ke-${i+1}`);
});


const perulangan = mhs.map((a,b) => {
  return `Nama ${a}, orang ke-${b}`;
})

console.log(perulangan.join(`
`)); // Join berfungsi untuk merapikan daftar array


console.log('forOf');
// for of
for(const varBaru of mhs) {
  console.log(varBaru);
}



// Looping string
const nama = 'Megumi';
for (const n of nama) {
  console.log(n);
}

// Mengakali for of agar ikutan looping indexnya, bukan elementnya saja dengan method entries
const nama2 = ['Yuuki']; // mesti dijadikan array
for (const m of nama2.entries()) {
  console.log(m);
}


// DOM
//const liNama = document.querySelectorAll('li');

// dengan forEach
// liNama.forEach(n => console.log(n.textContent));

// dengan for of
//for(n of liNama) {
//  console.log(n.innerHTML);
//}


// Arguments
function result() {
  //return arg.reduce((a, i) => {
  //  console.log(a + i);
  //});
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }

  return jumlah;
}

console.log(result(1,2,3,4,5));



// for in, untuk looping property
const obj = {
  nama: 'Mei',
  umur: 20,
  email: 'mei@zonk.com'
}

for (a in obj) {
  console.log(a);
}


// cara mengambil valuenya, bukan hanya propertynya saja

for (b in obj) {
  console.log(obj[b]);
}
