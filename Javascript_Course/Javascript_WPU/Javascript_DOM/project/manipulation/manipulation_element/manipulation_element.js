/* Materi manipulasi element

- element.innerHTML = mengganti kata di html nya
- element.style.<property>
- element.setAttribute()
- element.classList
...
*/

/* element.innerHTML(mengubah isi)
const judul = document.getElementById('judul');
judul.innerHTML = '<em>Haikel</em>';

const sectionA = document.querySelector('section#a');
sectionA.innerHTML = 'Seorang biasa dari Bangka Belitung';
*/


/* element.style.<property>
const judul = document.querySelector('#judul');
judul.style.backgroundColor = '#7FB4CA';
*/


// element.attribute

/* element.setAttribute
const judul = document.getElementsByTagName('h1')[0];
judul.setAttribute('class', 'Haikel');

const a = document.querySelector('section#a a');
a.setAttribute('class', 'link');
*/


/* element.getAttribute
const a = document.querySelector('section#a a');
a.getAttribute('href');
*/

/* element.removeAttribute
const a = document.querySelector('section#a a');
a.removeAttribute('href');
*/


/*element.classList
Dalam classlist, ada

- classList.add
- classList.remove
- classList.toggle
- classList.item
- classList.contains
- classList.replace

*/


// element.classList.add
const a = document.querySelector('section#a p');
a.classList.add('Anime');

// element.classList.remove
a.classList.remove('Anime');

// element.classList.toggle = fungsinya untuk toggle, mekanisme nya seperti on-off.
// a.classList.toggle('Anime');
// document.body.classlist.toggle('#2e3440')

// element.classList.item = jika true, maka suatu kelas itu memang ada. Jika false, maka kelas itu memang tidak ada
// a.classList.item('p1');

// element.classList.replace = jika true, maka suatu kelas itu sudah diganti. Jika false, berarti ada yang salah
// a.classList.replace('p1', 'p0');
