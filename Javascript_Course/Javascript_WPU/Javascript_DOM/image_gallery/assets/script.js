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
