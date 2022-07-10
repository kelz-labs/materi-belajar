// console.log("Halo, saya lagi belajar typescript loh"); 
/*
General types
*/
var person = {
    name: "Haikel"
};
// person(); // akan menyebabkan error, karena kita memanggilnya seperti function padahal si person itu object
console.log(person.name);
/*
unknown

Note: jika ada nilai yang belum diketahui tipe datanya, lebih baik pakai unknown ketimbang any
*/
var nilaiUjian;
nilaiUjian = 100;
console.log(typeof (nilaiUjian));
if (typeof nilaiUjian === "number") {
    var nilaiAkhir = (nilaiUjian + 100) / 2;
    console.log("Nilai ujian: ".concat(nilaiUjian, ", nilai akhir: ").concat(nilaiAkhir));
}
