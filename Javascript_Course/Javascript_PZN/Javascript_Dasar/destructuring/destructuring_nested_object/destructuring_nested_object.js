// Materi destructuring nested object

const barang = {
  firstStuff: 'Laptop',
  middleStuff: 'Asus',
  lastStuff: '2005',
  tempat: {
    jalan: 'ga tau',
    provinsi: 'entah'
  },
  anime: 'Romance'
};

// Contoh nya dengan destructuring nested, alias destructuring di dalam destructuring
let {firstStuff, middleStuff, tempat: {jalan, provinsi}, ...others} = barang;
console.log(barang);
console.log(jalan);

