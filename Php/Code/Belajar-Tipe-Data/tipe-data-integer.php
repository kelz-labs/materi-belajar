<?php

// Tipe data integer
echo "integer: "; 

// var_dump yang berfungi untuk mengecek tipe data. 
// Contoh jenis-jenis data integer number

echo "Decimal: ";
var_dump(1234);  // Tipe data number decimal

echo "Octal: "; 
var_dump(01234); // Tipe data number octal, dimulai dari nol 

echo "hexadecimal: "; 
var_dump(0x1A); // Tipe data number Hexadecimal

echo "binary: "; 
var_dump(0b11111111); // Tipe data number binary(terdiri dari 0 dan 1)

echo "Underscore di number: "; 
var_dump(1_234_567_8); // Penggunaan underscore atau garis bawah, untuk memudahkan pembacaan saat terdapat data yang banyak. Tapi jika dijalankan, maka underscore nya tidak terbaca. 

?>