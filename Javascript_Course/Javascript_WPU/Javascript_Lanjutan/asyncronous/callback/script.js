// Materi callback
// Callback adalah function yang dikirimkan sebagai parameter pada function yang lain
//

function func(param1, param2, ...args) {
    return `${param1},${param2}, ${args}`;
}

setTimeout(() => {console.log(func(1,2,3,4,5))}, 5000); // ini akan jalan belakangan, sesuai prinsip asynchronous, dimana ini masuknya ke Web API(Application Programming Interface)

function func2(param3, param4, ...argm) {
    return `${param3}, ${param4}, ${argm}`;
}

console.log(func2(1, 2, '3', '4', '5')); // yang jelas, ini akan jalan duluan, sesuai prinsip asynchronous, dimana ini masuknya ke stack


// Synchronous param(jarang digunakan)
//function halo(param) {
//  alert(`Halo, ${param}`);
//}

//function pesan(callback) {
//  const nama = prompt(`Masukkan Nama: `);
//  callback(nama);
//}

//pesan(halo);

function warungMakan(makanan) {
  alert(`Halo, pelanggan! Mau ${makanan}?`);
}

function daftar(back) {
  const pesanan = prompt(`Pilih makanannya `);
  back(pesanan);
}

daftar(warungMakan);



// Pemahaman
const obj = [
  {
    'nama': 'Izuma',
    'nrp': '123123',
    'email': 'izumi@izumi.com',
    'jurusan': 'Teknik perkapalan',
    'idDosenWali': '2'
  },

  {
    'nama': 'Izumi',
    'nrp': '123123',
    'email': 'izumi@izumi.com',
    'jurusan': 'Teknik perkapalan',
    'idDosenWali': '2'
  },

  {
    'nama': 'Izumu',
    'nrp': '123123',
    'email': 'izumi@izumi.com',
    'jurusan': 'Teknik perkapalan',
    'idDosenWali': '2'
  },

  {
    'nama': 'Izume',
    'nrp': '123123',
    'email': 'izumi@izumi.com',
    'jurusan': 'Teknik perkapalan',
    'idDosenWali': '2'
  },

  {
    'nama': 'Izumo',
    'nrp': '123123',
    'email': 'izumi@izumi.com',
    'jurusan': 'Teknik perkapalan',
    'idDosenWali': '2'
  }
];

// Synchronous
// Biasanya dengan forEach, parameternya udah callback
// Menampilkan namanya saja
//console.log('Mulai');
//obj.forEach(m => {
//  for (let i = 0; i < 10000000; i++) {
//    let date = new Date();
//  }
//  console.log(m.nama);
//})
//console.log('Selesai');



// Asynchronous callback
// Note: kalo AJAX, mesti pakai Web Server kayak XAMPP
function getDataMhs(url, success, error) {
  let ajax = new XMLHttpRequest();

  ajax.onreadystatechange = function() {
    if (ajax.readyState === 4) {
      if (ajax.status === 200) {
        success(ajax.response);
      } else if (ajax.status === 404) {
        error();
      }
    }
  }

  ajax.open('get', url);
  ajax.send();
}

getDataMhs("mhs.json", results => {
  console.log(results);
}, () => {

});


// Dengan jquery

