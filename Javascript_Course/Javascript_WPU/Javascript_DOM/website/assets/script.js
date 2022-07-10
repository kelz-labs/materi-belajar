// Percobaan membuat dark mode

const button = document.getElementById('tombol');

button.onclick = function ubah() {
  // document.body.style.backgroundColor = '#2e3440';
  document.body.classList.toggle('warna');
  if (button.innerHTML === 'Night Mode <i class="far fa-moon"></i>') {
    button.innerHTML = 'Light Mode <i class="far fa-sun"></i>';
  }

  else {
    button.innerHTML = 'Night Mode <i class="far fa-moon"></i>';
  }
}

const tombol = document.createElement('button');
const isi = document.createTextNode('Pencet Saya');

tombol.appendChild(isi);
tombol.setAttribute('type', 'button');
button.after(tombol);
button.style.marginRight = '25px';

tombol.addEventListener('click', function() {
  // Belajar Math
  // Dalam rumus pembulatan, ada beberapa. Yaitu: round, floor(pembulatan ke bawah), ceil(pembulatan ke awas)

  const merah = Math.round(Math.random() * 255 + 1);
  const hijau = Math.round(Math.random() * 255 + 1);
  const biru = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb('+ merah +', '+ hijau +', '+ biru +', 0.7)'
});


// definisikan slidernya
const slider_merah = document.querySelector('input[name=merah]'); // jika ingin menangkap name pada input, bisa pakai kurung siku diikuti dengan name
const slider_hijau = document.querySelector('input[name=hijau]');
const slider_biru = document.querySelector('input[name=biru]');

// buat function agar lebih ringkas
function slider() {
  const merah = slider_merah.value;
  const hijau = slider_hijau.value;
  const biru = slider_biru.value;
  document.body.style.backgroundColor = 'rgb('+ merah +', '+ hijau +', '+ biru +')';
}

// slider_merah
slider_merah.addEventListener('input', function() {
  slider();
});

// slider_hijau
slider_hijau.addEventListener('input', function() {
  slider();
});

// slider_biru
slider_biru.addEventListener('input', function() {
  slider();
});


// menambahkan efek mouse saat bergerak
// document.body.addEventListener('mousemove', function(event){
  // posisi mouse
  // event.clientX;
  // ukuran browser
  // window.innerWidth
//  const xpos = Math.round((event.clientX / window.innerWidth) * 255);
//  const ypos = Math.round((event.clientY / window.innerHeight) * 255);
//  document.body.style.backgroundColor = 'rgb('+ xpos +', '+ ypos +', 100)';
// });
