// Materi forEach
// forEach digunakan untk looping array. Konsepnya memang mirip-mirip dengan mapping

/*let number = [1,2,3,4,5];
let kata = ['Andi', 'Budi', 'Galih', 'Jay'];

const cetak = function(a,b) {
  console.log(`${a} orang ke ${b + b}`);
}


// a untuk element, b untuk index
kata.forEach(cetak);

const cetak2 = function(c,d) {
  console.log(`${c} index ke {d}`)
}

number.forEach(cetak2);

*/

// atau langsung masukkan function ke dalam forEach

let number = [1,2,3,4,5];
let kata = ['Andi', 'Budi', 'Galih', 'Jay'];


// Note: a = element, b = index ke berapa
kata.forEach(function(a, b) {
  console.log(`${a} orang ke-${b+1}`);
})

number.forEach(function(c,d) {
  console.log(`${c} index ke ${d}`);
})

// Mapping
const mapping = kata.map(function(e, i) {
  return `${e} orang ke-${i+1}`;
})

console.log(mapping.join( `
` ));


// Latihan forEach dan map
let angka = [2,90,100,30,50];
let kalimat = ['Sate', 'Soto', 'Lontong', 'Teh Manis', 'Nasi'];

// angka dulu
angka.forEach(function(o,p) {
  console.log(`Angka ke-${o}, urutan ke-${p+1}`);
})

console.log(`
`);

const print = angka.map(function(q,r) {
  return `Angka ke-${q}, index ke-${r}`
})

console.log(print.join());
console.log(`
`);


// kalimat
kalimat.forEach(function(element, index) {
  console.log(`Nama makanan: ${element}, urutan ke-${index+1}`);
})

const print2 = kalimat.map(function(elm, ind) {
  return `Nama makanan: ${elm}, urutan ke-${ind+1}`;
})

console.log(print2.join(`
`));
