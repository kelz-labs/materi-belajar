function getComputer() {
  const computer = Math.random();
  console.log(computer);
  if (computer < 0.30) return 'nino';
  if (computer >= 0.30 && computer < 0.65) return 'yui';
  return 'russian';
}

function random() {
  const gambar = ['nino', 'yui', 'russian'];
  const imageCom = document.querySelector('.img');
  let i = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 2000) {
      return clearInterval;
    }
    imageCom.setAttribute('src', 'assets/img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 50);
}

const pilihan = document.querySelectorAll('.button');
pilihan.forEach(function(daftar) {
  daftar.addEventListener('click', function() {
  const pilihanComputer = getComputer();

  random();
  const gambarKomputer = document.querySelector('.img');
  gambarKomputer.setAttribute('src', 'assets/img/' + pilihanComputer + '.png');
  });
});
