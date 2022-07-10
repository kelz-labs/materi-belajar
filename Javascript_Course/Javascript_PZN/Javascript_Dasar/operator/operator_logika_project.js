const nilaiAbsen = 50;
const nilaiUjian = 90;

const lulusAbsen = nilaiAbsen > 80;
const lulusUjian = nilaiUjian > 80;

const lulus = ((nilaiAbsen + nilaiUjian) / 2) > 80;

console.log("Apakah dia lulus secara Absen?", lulusAbsen);
console.log("Apakah dia lulus secara nilai ujian?", lulusUjian);

console.log("Apakah dia lulus secara keseluruhan?", lulus);




