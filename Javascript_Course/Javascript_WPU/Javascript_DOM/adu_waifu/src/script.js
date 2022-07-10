function getComputer() {
  const computer = Math.random();

  if (computer < 0.34) return 'nino';
  if (computer >= 0.34 && computer < 0.67) return 'yui';
  return 'kaori';
}

function getHasil(computer, player) {
  if (player == computer) return 'Seri';
  if (player == 'nino') return (computer == 'orang') ? 'Waifumu Menang!' : 'Waifumu Kalah!';
  if (player == 'yui') return (computer == 'gajah') ? 'Waifumu Kalah' : 'Waifumu Menang!';
  if (player == 'kaori') return (computer == 'orang') ? 'Waifumu Kalah!' : 'Waifumu Menang!';
}

function random() {
  const gambar = ['nino', 'yui', 'kaori'];
  const imageCom = document.querySelector('.img-komputer');
  let i = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1000) {

      return;
    }
    imageCom.setAttribute('src', '../img/' + gambar[i++] + '.png');
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
  gambarKomputer.setAttribute('src', '../img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
  });
});
