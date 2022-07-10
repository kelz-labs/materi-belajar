// 1. HTML Fragments

/* const obj = {
  nama: 'Zong Xina',
  umur: '40',
  no: '143454',
  email: 'zongxina@zong.com'
};

const fragments = `<div class="obj">
  <h2>${obj.nama}</h2>
  <span class="no">${obj.no}</span>
</div>`;

console.log(fragments);

document.body.innerHTML = fragments;*/

// 2. Looping
/*const obj = [
  {
    nama: 'Zong Xina',
    umur: '40',
    no: '143454',
    email: 'zongxina@zong.com'
  },
  {
    nama: 'The Pooh',
    umur: '40',
    no: '143454',
    email: 'pooh@zong.com'
  },
  {
    nama: 'Ing',
    umur: '40',
    no: '143454',
    email: 'inging@zong.com'
  }
];

const elements = `<div class="obj">
  ${obj.map(m => `<ul>
    <li>${m.nama}</li>
    <li>${m.email}</li>
  </ul>`).join('')} // agar stringnya hilang, pakai method join
</div>`
document.body.innerHTML = elements;*/


// 3. Conditionals, bisa pakai ternary

/*const lagu = {
  judul: 'Doaku',
  penyanyi: 'Haddad Alwi',
  feat: 'Haddad Alwi'
}

const elements = `<div clas="lagu">
<ul>
  <li>${lagu.penyanyi}</li>
  <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
</ul>
</div>`;*/

// Logikanya: jika ada feat, maka dia akan memprint feat tersebut. Dan jika tidak ada feat, maka akan menampilkan string kosong.
// Jika tidak dibuat kondisi seperti ini, maka akan bernilai undefined

const obj = {
  nama: 'Zong Xina',
  semester: '1',
  mataKuliah: [
    'Rekayasa Web',
    'Analisis dan Perancangan Sistem Informasi',
    'Pemrograman Sistem Interaktif',
    'Perancangan RPL'
  ]
};

function cetakMK(mataKuliah) {
   return `
<ol>
${mataKuliah.map(mk => `<li>${mk}</li>`).join('')}
</ol>
`;
}

const elements = `<div class="obj">
  <h2>${obj.nama}</h2>
  <span class="semester">Semester: ${obj.semester}</span>
  <h4>Mata Kuliah: </h4>
  ${cetakMK(obj.mataKuliah)}
  <ul></ul>
</div>`
document.body.innerHTML = elements;


