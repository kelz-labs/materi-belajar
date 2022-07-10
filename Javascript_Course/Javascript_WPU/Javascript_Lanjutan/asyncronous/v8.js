// Di dalam v8 engine, ada yang namanya heap dan stack

// Heap itu untuk memory allocation
// Stack itu untuk function dan eksekusi script

// Stack

function kalikan(a, b) {
  return a * b;
}

function hitungLuas(sisi) {
  return kalikan(sisi, sisi);
}

function cetakLuasKotak(sisi) {
  const luas = hitungLuas(sisi);
  console.log(luas);
}

cetakLuasKotak(8);


function anime(genre, ...judul) {
  return `${genre}, ${judul}`;
}

function makanan(nama, ...rasa) {
  return `${nama}, ${rasa}`;
}

// Contoh cara kerja asynchronous multi threaded
console.log('Proses satu');

setTimeout(() => {
  console.log(anime('Romance, school', 'Your lie in april', 'Horimiya'));
}, 5000);
setTimeout(() => {
  console.log(makanan('Pempek kapal Selem', 'Mantap', 'Rasanya joss'));
}, 5000);

console.log('Proses dua');
