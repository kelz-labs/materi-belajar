const barang = {
  firstStuff: 'Laptop',
  middleStuff: 'Asus',
  lastStuff: '2005',
  tempat: {
    jalan: 'ga tau',
    provinsi: 'entah'
  },
};

const {firstStuff, middleStuff, lastStuff, ...others} = barang;
console.log(barang);

const structure = {
  os: 'Artix Linux',
  wm: 'bspwm',
  kernel: '5.15 zen'
};

const {os, wm, kernel} = structure;
console.log(structure);
