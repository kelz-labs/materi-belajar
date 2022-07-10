/*
Materi manipulasi node

- document.createElement()
- document,createTextNode()
- node.appendchild()
- node.insertBefore()
- parentNode.removeChild()
- parentNode.replaceChild()
- dan lainnya
*/

// Prosesnya: bikin tag -> bikin isinya -> masukin isinya ke dalam tag
// createElement dan appendChild

const pBaru = document.createElement('p'); // ini ibarat vas
const isi = document.createTextNode('Paragraf Node'); // ini ibarat bunganya

// simpan tulisan ke dalam paragraf

pBaru.appendChild(isi); // ini ibarat proses masukin bunga ke dalam vasnya

// simpan pBaru di akhir section a
const a = document.querySelector('section#a'); // section#a ibarat ruang tamunya
a.appendChild(pBaru);


// insertBefore
const vas = document.createElement('li'); // buat vasnya
const bunga = document.createTextNode('Paragraf 1'); // buat isinya

vas.appendChild(bunga);

const ul = document.querySelector('section#b ul'); // ruang
const li = ul.querySelector('li:nth-child(2)'); // spesifik tempatnya

ul.insertBefore(vas, li);
