/*
Materi manipulasi node

- document.createElement()
- document.createTextNode()
- node.appendchild()
- node.insertBefore()
- parentNode.removeChild()
- parentNode.replaceChild()
- dan lainnya

Manipulasi node(method baru)

- parentNode.append()
- parentNode.prepend()
- childNode.before()
- childNode.after()
- childNode.remove()
- childNode.replaceWith()
- ...
*/

/*// Prosesnya: bikin tag -> bikin isinya -> masukin isinya ke dalam tag
// createElement dan appendChild

const pBaru = document.createElement('p'); // ini ibarat vas
const isi = document.createTextNode('Paragraf Node'); // ini ibarat bunganya

// simpan tulisan ke dalam paragraf

pBaru.appendChild(isi); // ini ibarat proses masukin bunga ke dalam vasnya

// simpan pBaru di akhir section a
const a = document.querySelector('section#a'); // section#a ibarat ruang tamunya
a.appendChild(pBaru);


// Bagian insertBefore
const vas = document.createElement('li'); // buat vasnya
const bunga = document.createTextNode('Anime'); // buat isinya

vas.appendChild(bunga);

const ul = document.querySelector('section#b ul'); // ruang
const li = ul.querySelector('li:nth-child(2)'); // spesifik tempatnya

ul.insertBefore(vas, li);


// Bagian removeChild
const link = a.querySelector('a');
a.removeChild(link);


/* Bagian remove, dimana kita akan mencoba remove semuanya
const paragraf = document.querySelectorAll('section#b ul > li'); // disini kita mencoba menghapus li, tanpa menghapus a href nya, juga kita bisa menghapus dua bagian sekaligus

for (let i = 0; i < paragraf.length; i++) {
  paragraf[i].remove();
}

const p = document.querySelector('section#b p');
p.remove();


const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');


//p4.remove();

const h2 = document.createElement('h2');
const isih2 = document.createTextNode('Haikel');

h2.appendChild(isih2);
sectionB.replaceChild(h2, p4); // node baru mereplace node lama. node baru -> node lama

let penanda = pBaru;
penanda.style.backgroundColor = '#5E81AC';
*/

// Menghapus p yang di awal
const paragraf = document.querySelector('section#a');
const p = document.getElementsByTagName('p')[0];

// menambahkan h2
const h2 = document.createElement('h2');
const isih2 = document.createTextNode('Hai, ini h2');

h2.appendChild(isih2);
paragraf.replaceChild(h2, p);

// atau bisa juga sebenarnya dengan metode remove, tapi h2nya akan berada di akhir
