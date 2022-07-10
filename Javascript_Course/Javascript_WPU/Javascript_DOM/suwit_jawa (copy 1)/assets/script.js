function getComputer() {
  const computer = Math.random();

  if (computer < 0.34) return 'gajah';
  if (computer >= 0.34 && computer < 0.67) return 'orang';
  return 'semut';
}

function getHasil(computer, player) {
  if (player == computer) return 'Seri';
  if (player == 'gajah') return (computer == 'orang') ? 'Kamu Menang!' : 'Kamu Kalah!';
  if (player == 'orang') return (computer == 'gajah') ? 'Kamu Kalah' : 'Kamu Menang!';
  if (player == 'semut') return (computer == 'orang') ? 'Kamu Kalah!' : 'Kamu Menang!';
}

/*
// Permainan suwit jawa menggunakan konsep window
//
let pertanyaan = true;
while (pertanyaan) {

  // menangkap pilihan dari user
  let p = prompt('Pilih: gajah, semut, atau orang');


  let computer = Math.random();

  // skalanya ini 0 - 1, dimana:
  // < 0.34 = gajah
  // >= 0.34 < 0.67 = orang
  // >= 0.67 = semut

  if (computer < 0.34) {
    computer = 'gajah';
  } else if (computer >= 0.34 && computer < 0.67) {
    computer = 'orang';
  } else {
    computer = 'semut';
  }

  // Menentukan rules
  let hasil = '';
  if (p == computer) {
  hasil = 'SERI';
  } else if (p == 'gajah') {
    hasil = (computer == 'orang') ? 'Menang' : 'Kalah';
  } else if (p == 'orang') {
    hasil = (computer == 'gajah') ? 'Kalah' : 'Menang';
  } else if (p == 'semut') {
    hasil = (computer = 'orang')  ? 'Kalah' : 'Menang';
  } else {
    hasil = 'Kamu memasukkan pilihan yang salah';
  }

  // Hasilnya dengan menggunakan alert
  alert('Kamu memilih: ' + p + ' dan Komputer memilih: ' + computer + '\nmaka hasilnya: Kamu ' + hasil);

  pertanyaan = confirm('Apakah kamu mau main lagi?');
}

alert('Terima Kasih sudah bermain');
*/

function random() {
  const gambar = ['gajah', 'orang', 'semut'];
  const imageCom = document.querySelector('.img-komputer');
  let i = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imageCom.setAttribute('src', 'assets/img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
}

const pilihan = document.querySelectorAll('li img'); // img yang hanya ada di li
pilihan.forEach(function(daftar) {
  daftar.addEventListener('click', function() {
  const pilihanComputer = getComputer();
  const pilihanPlayer = daftar.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  random();
  const gambarKomputer = document.querySelector('.img-komputer');
  gambarKomputer.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
  });
});

/*const gajah = document.querySelector('.gajah');
gajah.addEventListener('click', function() {
  const pilihanComputer = getComputer();
  const pilihanPlayer = gajah.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const gambarKomputer = document.querySelector('.img-komputer');
  gambarKomputer.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
});

const orang = document.querySelector('.orang');
orang.addEventListener('click', function() {
  const pilihanComputer = getComputer();
  const pilihanPlayer = orang.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const gambarKomputer = document.querySelector('.img-komputer');
  gambarKomputer.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
});

const semut = document.querySelector('.semut');
semut.addEventListener('click', function() {
  const pilihanComputer = getComputer();
  const pilihanPlayer = semut.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  const gambarKomputer = document.querySelector('.img-komputer');
  gambarKomputer.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
});*/
