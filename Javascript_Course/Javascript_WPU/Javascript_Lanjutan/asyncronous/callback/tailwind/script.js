// untuk button pencarian
// Note: sebenernya, lebih bagus pakai fetch bawaan JS ketimbang jquery.

$('.search-button').on('click', function () {

  $.ajax({
    url: 'http://www.omdbapi.com/?i=tt3896198&apikey=f298ba8c&s=' + $('.input-keyword').val(),
  success: results => {
    const movies = results.Search;
    let cards = '';

    movies.forEach(mov => {
      cards += showCards(mov);
    });
    $('.movie-container').html(cards);
},

  error: (err) => {
    console.log(err.responseText);
  }
});

});

// Menampilkan cards atau daftar film
function showCards(mov) {
  return `
  <div class="modal w-full md:w-1/2 xl:w-1/3 px-4" id="movieDetailModal" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
            <div class="bg-white rounded-lg overflow-hidden mb-10">
               <img
                  src="${mov.Poster}"
                  alt="image"
                  class="w-full h-80"
                  />
               <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                  <h3>
                     <a
                        href="#"
                        class="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                     ${mov.Title}
                     </a>
                  </h3>
                  <p class="text-base text-body-color leading-relaxed mb-7">${mov.Year}</p>
                  <a
                     href="#"
                     class="
                     show-modal
                     modal-detail-button
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-white
                     transition
                     "
                     >
                  View Details
                  </a>
               </div>
            </div>
         </div>
`
}
