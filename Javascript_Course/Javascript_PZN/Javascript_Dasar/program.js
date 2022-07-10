// Syarat naik kelas
// Dengan catatan: Absen 10%, Tugas 20%, UTS 30%, UAS 40%.
// Pertama-tama, definisikan terlebih dahulu
// Misal nilai siswa dalam hal ini:
let nilaiAbsen =100;
let nilaiTugas = 90;
let nilaiUTS = 100;
let nilaiUAS = 100;

const lulusAbsen = (nilaiAbsen * (10/100));
const lulusTugas= (nilaiTugas * (20/100));
const lulusUTS = (nilaiUTS * (30/100));
const lulusUAS = (nilaiUAS * (40/100));

const lulus = lulusAbsen + lulusTugas + lulusUTS + lulusUTS;

console.log(`Apakah dia lulus secara Absen? ${nilaiAbsen > 80}`);
console.log(`Apakah dia lulus secara Tugas? ${nilaiTugas > 80}`);
console.log(`Apakah dia lulus secara nilai UTS? ${nilaiUTS > 80}`);
console.log(`Apakah dia lulus secara nilai UAS? ${nilaiUAS > 80}`);

if (lulus > 80) {
  console.log("Selamat, anda lulus!");
}

else {
  console.log("Maaf anda belum lulus");
}

