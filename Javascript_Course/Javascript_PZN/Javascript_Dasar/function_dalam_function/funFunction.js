// Materi function di dalam function
/*
- Tidak ada batasan dimana kita bisa membuat function
- Termasuk jika kita ingin membuat function di dalam sebuah function, kita bisa melakukannya
- Function yang ada di dalam, kita sebut inner function
- Inner function hanya bisa diakses di tempat kita membuat functionnnya, tidak bisa diakses di luar

Contoh:
*/
function outer(kartun) {

  function inner(anime) {
    function innerLagi(genre) {
      console.log(genre);
    }

    innerLagi('Romance');
    console.log(anime);
  }

  console.log(kartun);
  inner('Oregairu');
}

outer('Anime');
inner('True mint'); // inner is not defined, karena kita memanggilnya malah di luar, bukannya di tempat functionnya buat
