// Materi rest parameter
// Rest parameter mempresentasikan argument pada function
// dengan jumlah yang tidak terbatas menjadi sebuah array.
// Rest parameter hanya bisa digunakan di akhir parameter, tidak bisa di awal ataupun di tengah
// Contoh:
function myFunc(a, ...b) {
  return `Anime ke-${a}, sisanya ${b}`;
}

console.log(myFunc(1,2,3,4,5));

// Jika kita ingin menangkap semuanya
function myMy(...args) {
  return `${args}`;
}

console.log(myMy());

// return dari arguments
function func() {
  //return Array.from(arguments);
  // atau
  return [...arguments];
}

console.log(func(1,2,3).join());

// Menjumlahkan seluruh parameter
function jumlah(...argum) {
  //let total = 1;
  //for (const a of argum) {
  //  total += a;
  //}

  //return total;

  // atau bisa juga dengan reduce
  return argum.reduce((a,b) => a + b);
}

console.log(jumlah(1,2,3,4,5));


// rest param saat array destructuring
function team() {
  const kelompok1 = ['Ayu', 'Dewi', 'Dodi', 'Dinda', 'Brian'];

// rest parameternya
const [ketua, wakil, ...anggota] = kelompok1;

  console.log(ketua, wakil, anggota.join());
}

team();


// rest param pada object
function dev() {
  const tim = {
    pm: 'Dion',
    frontEnd: 'Haikel',
    backEnd: 'Alul',
    uiux: 'Kevin',
    devOps: 'Ihsan'
  };

  const {pm, ...anggota} = tim;
  console.log(tim);
}

dev();



// Filtering
function filter(type, ...nilai) {
  return nilai.filter(a => typeof a === type);
}

console.log(filter('string', 1,2,'Megumi', '10', false, true, 'Dedi'));
