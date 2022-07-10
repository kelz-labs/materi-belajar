// Ambil semua element Video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// Pilih hanya yang "Javascript Lanjutan"
let jsLanjutan = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// Ambil durasi masing-masing video, lanjut chaining
.map(item => item.dataset.duration)

// Ubah durasi video menjadi integer, ubah menit menjadi detik
.map(waktu => {
  // split
  const split = waktu.split(':').map(part => parseFloat(part));
  return (split[0] * 60) + split[1];
})

// Jumlahkan semua detik

.reduce((total, detik) => total + detik);
// ubah formatnya jadi jam menit detik

// Menggunakan math.floorr untuk mengambil pembulatan ke bawah. Misal nilai 3.4 dibulatkan jadi 3
// math.ceil = pembulatan ke atas
// math.round = pembulatana ke yang paling dekat
const jam = Math.floor(jsLanjutan / 3600);
jsLanjutan = jsLanjutan - jam * 3600;

const menit = Math.floor(jsLanjutan / 60);

const detik = jsLanjutan - menit * 60;

// Durasi
const durasi = document.querySelector('.total-durasi');
durasi.textContent = `${jam} jam, ${menit} menit, ${detik} detik`;

const jmlVid = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

const pJmlVid = document.querySelector('.jumlah-video');
pJmlVid.textContent = `${jmlVid} Video.`;
// simpan di DOM
console.log(jsLanjutan);


