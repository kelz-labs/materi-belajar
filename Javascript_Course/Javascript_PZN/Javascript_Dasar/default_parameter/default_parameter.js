// materi default parameter
/*
Selain opsional, parameter juga bisa kita beri nilai default.
Artinya, jika ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined,
maka secara otomatis parameter tersebut akan diisi oleh default value.

*/

function register(nama, kelamin = " Tidak Diketahui") {
  console.log(nama + kelamin);
}

register("Andi");
register("Anton", " Laki-laki");

// Bagaimana jika memanggil function tanpa ada parameter?
register(); // Maka hasilnya akan undefined

// Jika nilainya undefined?
register("Budi", undefined);

// Jika nilainya null?
register("Zed ", null); // Mengapa hasilnya null bukannya default value? Karena null dianggap sudah mempunyai nilai, tapi nilainya kosong.

