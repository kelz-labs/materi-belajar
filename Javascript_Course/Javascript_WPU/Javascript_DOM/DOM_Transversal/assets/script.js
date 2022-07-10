/*
Method dalam DOM Transversal
- parentNode = node
- parentElement = element
- nextSibling = node
- nextElementSibling = element
- previousSibling = node
- previousElementSibling = element

*/

/* const tutup = document.querySelector('.close');
const card = document.querySelector('.card');

// Logikanya: Jika tombol close diklik, maka akan menjalankan function:
tutup.addEventListener('click', function () {
  // card.style.display = 'none';
  // Atau bisa juga dengan DOM Manipulation
  card.remove();
});*/

// Jika ingin menghapus keempat card
// const tutup = document.querySelectorAll('.close');
// const card = document.querySelectorAll('.card');

/*for (let i = 0; i < tutup.length; i++) {
  tutup[i].addEventListener('click', function(event) {
    // Menghilangkannya dengan css, tapi ini tidak menerapkan DOM Transversal
    // card[i].style.display = 'none';
//    tutup[i].parentElement.style.display = 'none';
    event.target.parentElement.style.display = 'none'; // print tentang informasi
  })
}*/

// atau kita bisa juga dengan menggunakan for each
/*tutup.forEach(el => { // pake arrow function untuk mempersingkat, jadi => = function()
  el.addEventListener('click', function(event) {
    event.target.parentElement.style.display = 'none';

    // Belajar preventDefault
   // Contoh kasus seperti tag a, dimana a ini defaultnya itu bersifat redirect.
    event.preventDefault();

    // stopPropagation, dimana karena dia berada di dalam function tutup, maka dia akan menghentikan bubling event.
    event.stopPropagation();
  })
});

const cards = document.querySelectorAll('.card');
cards.forEach(function (card) {
  card.addEventListener('click', function(event) {
    alert("Halo semua");
  })
});

// Belajar parent Element
const nama = document.querySelector('.nama'); // selector itu mengambil element yang telah ditentukan hanya urutan pertama ditemukan, jadi tidak semuanya diambil.
console.log(nama.parentNode);
console.log(nama.parentElement.parentElement);
console.log(nama.nextElementSibling); // untuk mengabaikan tanda enter agar tidak keambil, kita memakai elementSibling
console.log(nama.previousElementSibling);
console.log(nama.previousElementSibling.previousElementSibling); // hasilnya akan null, karena sebelumnya dia tidak punya sibling
console.log(nama.nextElementSibling.nextElementSibling);
*/


// javascript mengetahui kita lagi klik apa
const container = document.querySelector('.container');

container.addEventListener('click', function(event) {
  if (event.target.className == 'close') {
    event.target.parentElement.style.display = 'none';
    event.preventDefault();
  }
});
