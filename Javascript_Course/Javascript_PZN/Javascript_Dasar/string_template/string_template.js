// Apa itu string template? Jadi, string template memungkinkan kita untuk mensubstitusi data dari luar string ke dalam string, seperti mengambil data variabel, atau bahkan menlakukan operasi matematika.
// Ditandai dengan penggunaan backtick atau (``)
// Fungsi lain dari string template adalah untuk meminimalisir penggunaan tanda (+) yang tentunya agak merepotkan jika membangun program yang kompleks
// Contoh:

const template = "Haikel Ilham Hakim";
const print = `Nama saya adalah ${template}`;
const daerah = `${print}, dan saya berasal dari Pangkalpinang.`;

console.log(print);
console.log(daerah);
