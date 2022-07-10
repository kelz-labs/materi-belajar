// untuk button pencarian
// Note: sebenernya, lebih bagus pakai fetch bawaan JS ketimbang jquery.

$('.search-button').on('click', function () {

  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=f298ba8c&s=' + $('.input-keyword').val(),
  success: results => {
    const movies = results.Search;
    let cards = '';

    movies.forEach(mov => {
      cards += showCards(mov);
    });
    $('.movie-container').html(cards);

  // Ketika tombol detailnya di klik
  $('.modal-detail-button').on('click', function() {
    $.ajax({
        url: 'http://www.omdbapi.com/?apikey=f298ba8c&i=' + $(this).data('imdbid'),
        success: mov => {
          const moviesDetail = showMovieDetail(mov);
        $('.modal-body').html(moviesDetail);
        },
        error: (err) => {
          console.log(err.responseText);
        }
      })
  });
},

  error: (err) => {
    console.log(err.responseText);
  }
});

});

// Menampilkan cards atau daftar film
function showCards(mov) {
  return `<div class="col-md-4 my-3">
      <div class="card">
       <img src="${mov.Poster}" class="card-img-top" alt="">
          <div class="card-body">
<h5 class="card-title">${mov.Title}</h5>
<h6 class="card-subtitle mb-2 text-muted">${mov.Year}</h6>
<a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${mov.imdbID}">Show details</a>
          </div>
      </div>
    </div>
`
}

// Keterangan film
function showMovieDetail(mov) {
  return `
<div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
<img src="${mov.Poster}" class="img-fluid" alt="">
            </div>
            <div class="col-md">
              <ul class="list-group">
<li class="list-group-item"><h4>${mov.Title} ${mov.Year}</strong></h4></li>
<li class="list-group-item"><strong>Director: </strong>${mov.Director}</li>
<li class="list-group-item"><strong>Actors: </strong>${mov.Actors}</li>
<li class="list-group-item"><strong>Writer: </strong>${mov.Writer}</li>
<li class="list-group-item"><strong>Genre: </strong>${mov.Genre}</li>
<li class="list-group-item"><strong>Plot:</strong> ${mov.Plot}</li>
             </ul>
            </div>
          </div>
        </div>
`
}
