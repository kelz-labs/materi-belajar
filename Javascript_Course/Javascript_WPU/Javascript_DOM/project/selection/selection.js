/*
// Materi DOM selection

// getElementById()
// Untuk membuat DOM, kita terlebih dahulu harus membuat variable
// mengembalikan -> element
const judul = document.getElementById('judul'); // artinya: javascript, tolong carikan element id <nama> yang ada di document

// Merubah style dengan javascript
judul.style.color = '#1f1f28';
judul.style.backgroundColor = 'yellow'; // ingat jika lebih dari satu kata, maka gunakan camelCase
judul.innerHTML = 'Hai, saya Haikel';


// getElementsByTagName()
// Dia menyeleksi berdasarkan tagnya, seperti p, a, div, dll
// mengembalikan -> HTMLCollections
const text = document.getElementsByTagName('p'); // Hasil di console browser: HTMLCollection(4) [p.p1, p.p2, p.p3, p] 0, 1, 2

text[0].style.backgroundColor = 'lightblue'; // menggunakan array dalam menunjukkan elemennya mana yang mesti distyling

// Bagaimana jika ingin menstyling semuanya? Tinggal pake looping
/*for (let i = 0; i < text.length; i++)  {
  text[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1');
h1[0].style.fontSize = '50px';


// getElementByClassName()
// mengembalikan -> HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'Ini dirubah dari javascript ya';
p1.style.color = 'red';
p1.style.fontWeight = '700';


// querySelector()
// mengembalikan -> element
const selector = document.querySelector('#b p');
selector.style.color = 'green';
selector.style.fontSize = '30px';

const li2 = document.querySelector('section#b ul li:nth-child(2)');
li2.style.backgroundColor = 'orange';


// querySelectorAll()
// mengembalikan -> nodeList
const pall = document.querySelectorAll('p');

// Jika ingin memilih semua 'p', maka kita memakai perulangan
for (let i = 0; i < pall.length; i++) {
  pall[i].style.backgroundColor = 'lightblue';
}

console.time('perulangan');
const konstan = document.querySelectorAll('p');

for (let e = 0; e < konstan.length; e++) {
  konstan[e].innerHTML = 'Ingfo geger geden';
}
console.timeEnd('perulangan');
*/


/* mengubah node root menjadi scope local

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelectorAll('p');
p4[0].style.backgroundColor = 'orange';

*/
/* atau bisa juga dengan cara ini
console.time('node');
const sectionB = document.querySelector('section#b');
const p4 = sectionB.getElementsByTagName('p'); // disini node root document diubah menjadi local ke sectionb
p4[0].style.backgroundColor = 'orange';
console.timeEnd('node');
*/
