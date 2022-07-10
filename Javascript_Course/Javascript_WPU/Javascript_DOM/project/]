// event handler
// ada dua, yaitu dengan mengisinya di html. atau langsung di js

// Mendfinisikan variable
const p3 = document.querySelector('.p3');

function warna() {
  p3.style.backgroundColor = '#2e3440';
  p3.style.color = 'white';
}



const p2 = document.querySelector('.p2');

function warna2() {
  p2.style.backgroundColor = '#2e3440';
  p2.style.color = 'white';
}

p2.onclick = warna2;




const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
  const ul = document.querySelector('section#b ul'); // tentukan induk
  const li = document.createElement('li');
  const teks = document.createTextNode('Item Baru');
  li.appendChild(teks); // buat element baru dan rangkai
  ul.appendChild(li); // masukkan elemen baru ke dalam induk
});




// perbedaan antara event handler dengan event listener adalah kalau handler, setiap ada function baru, dia malah menimpa function yang ada.
// Sedangkan event listener menambahkannya
const pbaru = document.querySelector('.p3');

pbaru.onclick = function() {
  pbaru.style.backgroundColor = '#2e3440';
}

pbaru.onclick = function() {
  pbaru.style.color = 'white';
}






