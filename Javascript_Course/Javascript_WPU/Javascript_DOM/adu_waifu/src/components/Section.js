function getComputer() {
  const computer = Math.random();

  if (computer < 0.34) return 'nino';
  if (computer >= 0.34 && computer < 0.67) return 'yui';
  return 'kaori';
};

function getHasil(computer, player) {
  if (player == computer) return 'Seri';
  if (player == 'nino') return (computer =='yui') ? 'Waifumu Menang!' : 'Waifumu Kalah!';
  if (player == 'yui') return (computer == 'nino') ? 'Waifumu Kalah!' : 'Waifumu Menang!';
  if (player == 'kaori') return (computer == 'yui') ? 'Waifumu Kalah!' : 'Waifumu Menang!';
};

function random() {
  const gambar = ['nino', 'yui', 'kaori'];
  const imageCom = document.querySelector('.imgKomputer');
  let i = 0;

  const waktuMulai = new Date().getTime();
  setInterval(function() {
    if (new Date().getTime() - waktuMulai > 1000) {
      
      return clearInterval;
    }
    imageCom.setAttribute('src', '../img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  }, 100);
};

const pilihan = document.querySelectorAll('.image'); // img yang hanya ada di li
pilihan.forEach(function(daftar) {
  daftar.addEventListener('click', function() {
  const pilihanComputer = getComputer();
  const pilihanPlayer = daftar.className;
  const hasil = getHasil(pilihanComputer, pilihanPlayer);

  random();
  const gambarKomputer = document.querySelector('.imgKomputer');
  gambarKomputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

  const keterangan = document.querySelector('.info');
  keterangan.innerHTML = hasil;
  });
});


function Section () {

  return (

    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img className="imgKomputer lg:w-2/6 md:w-3/6 w-3/4 mb-10 object-cover object-center rounded-full" alt="hero" src="../img/nino.png"/>
    <div className="text-center lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Adu Waifu</h1>
      <p className="mb-8 leading-relaxed">Pilih salah satu Waifu yang tersedia, untuk diadu melawan pilihan random dari computer.</p>
    </div>
  </div>

        <div className="info"></div>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Pilihan Waifu</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Ada 3 waifu yang bisa kalian pilih. Nino, Yui, dan Kaori.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="image nino w-full h-full object-cover object-center" src="../img/nino.png"/>
        </div>
      </div>
      <div className="image lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="image yui absolute inset-0 w-full h-full object-cover object-center" src="../img/yui.png"/>
        </div>
      </div>
      <div className="image lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="image kaori absolute inset-0 w-full h-full object-cover object-center" src="../img/kaori.png"/>
        </div>
      </div>
    </div>
  </div>
</section>
  );

}

export default Section;
