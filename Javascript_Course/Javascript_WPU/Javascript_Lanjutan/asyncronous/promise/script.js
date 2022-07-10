// Materi promise
// Gunanya promise adalah untuk mencegah callback hell


// Review ulang materi callback
// Dalam callback, kita bisa menggunakan jquery atau juga dengan vanilla javascript
// Contoh dengan jquery
/*$.ajax({
  url: 'http://',
  success: film => console.log(film), // apabila sukses, tampilkan film nya
  error: console.log(film.responseText) // apabila error, tampilkan pesan errornya
});

// Contoh dengan vanilla js
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = () => {
  if (xhr.status === 200) {
    if (xhr.readystate === 4) {
      console.log(JSON.parse(xhr.response));
    }
  } else {
    console.log(xhr.responseText);
  }
}

xhr.open('get', 'http://');
xhr.send;

// Ada yang lebih simpel ketimbang cara diatas, yakni menggunakan fetch
fetch('http://')
.then(response => response.json())
.then(response => console.log(response));
// fetch disini mengembalikan promise


// Materi promise/janji
// Promise adalah sebuah object yang menandakan keberhasilan atau kegagalan dari sebuah event yang asynchronous di masa yang akan datang
// janji bisa berupa dua hasil, yakni terpenuhi, atau ingkar janji

// janji yang terpenuhi yaitu states (fulfilled)
// janji yang tidak terpenuhi yaitu states(rejected)
// janji dalam statu menunggu yaitu states(pending)
*/

// contoh 1
/*let janji = false;

// parameter 1 = keadaan resolve, parameter 2 => keadaan reject
// Nilai defaultnya: resolve atau ditepati
const janji1 = new Promise((resolve, reject) => {
  if(janji) {
    resolve('Janji sudah ditepati');
  } else {
    reject("Kamu ingkar janji") ;
  }
});

//console.log dengan metode then dan catch
// dimana then untuk menangkap janji yang benar
// dan catch apabila menangkap janji yang salah
janji1
  .then(response => console.log('Iya: ' + response))
  .catch(response => console.log('Tidak: ' + response));
*/

// contoh 2
/*let janji = true;
const janji2 = new Promise((resolve, reject) => {
  if(janji) {
    // disini kita mencoba membuat janji yang ditepati, namun dengan jangka waktu alias kita memakai setTimeOut
    setTimeout(() => {
      resolve('Janji ditepati setelah beberapa saat');
    }, 5000);
  } else {
    setTimeout(() => {
      reject('Janji tidak ditepati setelah beberapa saat');
    }, 3000);
  }
});

console.log('Mulai');
//console.log(janji2.then(() => console.log(janji2))); // diperlukan then agar proses pendingnya selesai
janji2
  .finally(() => console.log('Selesai menunggu!'))
  .then(response => console.log('Iya: ' + response))
  .catch(response => console.log('Tidak: ' + response));
console.log('Selesai');
// Sesuai prinsip asynchronus, dimana janji2 akan dinyatakan belakangan karena dioper dulu ke Web API
*/


// Dalam promise ada method yang namanya all()
const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Avengers',
      sutradara: 'yuuki, yuu',
      pemeran: 'Joko, Sugeng'
    }])
  }, 1000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kabupaten: 'Bangka',
      motto: 'Sepintu sedulang',
      temp: 32,
      kondisi: 'Panas terik'
    }])
  }, 500);
});

//film.then(response => console.log(response));
//cuaca.then(response => console.log(response));

// atau kita juga bisa memakai promise.all untuk mencakup semuanya
// Hasilnya sama saja dengan yang satu satu
Promise.all([film, cuaca])//.then(Response => console.log(Response));
// atau jika tidak ingin dalam bentuk array, kita bisa memecahnya jadi satu-satu
.then(Response => {
    const [film,cuaca] = Response;
    console.log(film);
    console.log(cuaca);
  })
