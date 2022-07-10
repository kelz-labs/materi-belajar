import '../App.css';

function Section() {
  const thumbnail = document.querySelector('.container');
const banner = document.querySelector('.banner');
const thumbs = document.querySelectorAll('.thumb');
thumbnail.addEventListener('click', function(event) {
  // Mengecek thumb
  if (event.target.className == 'thumb') {
    banner.src = event.target.src
    banner.classList.add('fade');

    // Logikanya: jika fadenya sudah ditetapkan, maka cuma gambar satu yang diberi efek, sedangkan gambar yang selanjutnya tidak.
    // Dengan memanfaatkan setTimeout, kita membuat efek fed refresh setiap setengah detik(500)
    setTimeout(function() {
      banner.classList.remove('fade');
    }, 500);

    thumbs.forEach(function(thumb) {
      // if (thumb.classList.contains('active')) {
        // thumb.classList.remove('active');
      // }

      // atau ada cara yang lebih mudahnya
      thumb.className = 'thumb';
    })

    event.target.classList.add('active');


  }
})
  return (
    <section className="container text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="lg:w-2/3 mx-auto">
      <div class="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
        <img alt="gallery" class="banner w-full object-cover h-full object-center block absolute inset-0" src="../img/girl.png"/>
        <div class="text-center relative z-10 w-full">
          <h2 class="text-2xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
          <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
          <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
            </div>
    </div>
      <div class="flex flex-wrap -mx-2">
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="thumb w-full object-cover h-full object-center block absolute inset-0" src="../img/Blue.jpg"/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="px-2 w-1/2">
          <div class="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
            <img alt="gallery" class="thumb w-full object-cover h-full object-center block absolute inset-0" src="../img/book.jpg"/>
            <div class="text-center relative z-10 w-full">
              <h2 class="text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
              <p class="leading-relaxed">Skateboard +1 mustache fixie paleo lumbersexual.</p>
              <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
};

export default Section;
