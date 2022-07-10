// Materi closure

/*function init() {
  let nama = 'selena';
  let umur = '12';

  function tampilNama() {
    // Jika ada nama di local, maka yang dipakai adalah yang paling terdekat, yaitu local
    // let nama = 'nama';
    console.log(nama);
    console.log(umur)
  }

  tampilNama();
}

init();*/

/*
function init() {
  let nama = 'hiks';

  function tampilNama() {

    console.log(nama);
  }

  return tampilNama;
}

let initz = init();
initz();*/

/*function init() {
  return function (nama) {
    console.log(nama);
  }
}

let namaNama = init();
namaNama('Info');
namaNama('Infi');*/

/* Lexical closure
function salam(waktu) {
  return function(nama) {
    console.log(`Halo, ${nama}, Konnichiwa`);
  }
}

let pagi = salam('Pagi');
let siang = salam('Siang');
let malam = salam('Malam');

console.dir(malam('Yuuki'));*/

 let add = (function add() {
let counter = 0;
  return function() {
    return ++counter;
  }
})();

counter = 100; // tidak akan menggangu function nya
console.log(add());
console.log(add());
console.log(add());
