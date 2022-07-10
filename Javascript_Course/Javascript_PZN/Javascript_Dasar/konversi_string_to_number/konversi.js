// Konversi tipe data string ke number
/*
Bisa menggunakan fungsi berikut:
- parseInt(string) -> Untuk mengkonversi dari string ke number (bilangan bulat)
- parseFloat(string) -> Mengkonversi dari string ke number (bilangan pecahan)
- Number(string) -> Mengkonversi dari string ke number (bilangan bulat atau pecahan)
- number.toString() -> Mengkonversi dari number ke string

Konversi ini berguna untuk mencegah ketidakvalidan dalam operasi.
Contoh:
*/
const string = 20;
const string2  = "20";
console.log(string + string2);// Lihat, hasilnya 2020, mengapa? Karena javascript menganggapnya sebagai string, bukan sebagai integer.

// parseInt
let kalimat = parseInt("1");
let number = kalimat + kalimat;
console.log(number);// hasilnya 2 dan fungsi ini tidak bisa mencetak float karena peruntukkannya untuk bilangan bulat saja

// parseFloat
let kalimatFloat = parseFloat("2.9");
let numberFloat = kalimatFloat + kalimatFloat;
console.log(numberFloat);// Hasilnya 5.8, karena memang sesuai namanya untuk mencetak bilangan float

// Number
let kalimatNumber = Number("12.2");
let numberNumber = kalimatNumber + kalimatNumber;
console.log(numberNumber);// Nanti hasilnya 24.4 karena fungsi Number dapat mencetak tipe float atau pecahan maupun bilangan bulat

// number.toString
let kalimattoString = 12;
let numbertoString = kalimattoString.toString() + kalimattoString.toString();
console.log(numbertoString); // nanti hasilnya adalah 1212 karena tipe data numbernya telah diubah jadi string, sehingga tidak dijumlahkan melainkan digabungkan

// Ada tambahan lagi, yakni number NaN
// NaN dapat muncul apabila data string yang kita coba ubah itu ternyata tidak valid.
// Jika memang tidak valid, maka hasilnya adalah Not a Number (NaN). NaN termasuk number spesial dalam javascript
// Contoh:

let kalimatNan = parseInt("1 salah");
console.log(kalimatNan); //Hasilnya tetap satu karena parseInt mentolerir kesalahan yang terjadi dengan hanya mengambil data number yang ada di depan. Jika kesalahan terdapat di depan, maka ia tidak bisa mentolerir dan hasilnya pun NaN

kalimatNan = parseFloat("1.1 salah");
console.log(kalimatNan); // Hasilnya tetap 1.1 karena parseFloat mentolerir kesalahan yang terjadi dengan hanya mengambil data number yang ada di depan. Jika kesalahan terdapat di depan, maka ia tidak bisa mentolerir dan hasilnya pun NaN

kalimatNan = Number("1 Haikel Ilham");
console.log(kalimatNan); // Nanti ini hasilnya adalah NaN. Dia tidak bisa seperti parseInt dan parseFloat yang bisa mentolerir kesalahan. Salah ya salah

kalimatNan = 29;
console.log(kalimatNan);

// Operasi pada NaN. Jika hasilnya sudah NaN, mau diakalin pakai cara apapun, dia akan tetap NaN.
const first = Number("salah");
const totalNumber = first + 100;
console.log(totalNumber);

// fungsi isNaN(), untuk mengecek apakah sebuah number itu termasuk NaN atau tidak. Outputnya berupa true apabila termasuk NaN atau false apabila tidak termasuk NaN.  Contoh:
console.log(isNaN(totalNumber)); // true karena string bukan number
console.log(isNaN(kalimatNan)); // false karena dia tipe data number
console.log(isNaN(NaN)); // true karena dia memuat NaN itu sendiri
