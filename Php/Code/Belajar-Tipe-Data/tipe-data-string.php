<?php

// Tipe data string
// Mengandung teks, dan tidak ada batasannya alias bisa memuat banyak karakter. Contoh:
// Ada beberapa cara untuk membuat string, yakni dengan single quote('') maupun double quote("")

// Contoh dengan single quote, di single quote itu tidak bisa menggunakan escape sequence, jadi escape sequence nya akan terbaca sebagai string. 
echo 'Nama: Haikel '; 
echo 'Tinggal di: Bangka Belitung'; 


// Contoh dengan double quote, kita bisa menggunakan escape sequence, seperti \n terbaca sebagai enter, \t terbaca sebagai tab, dan lain-lain
echo "\n\nNama: Haikel \n"; // \n terbaca sebagai enter 
echo "Tinggal di: \tBangka Belitung\n\n"; // \t terbaca sebagai tab


// Latihan string php dengan perkenalan
echo "\n\nNama Saya Haikel Ilham Hakim\n"; 
echo "Saya saat ini tinggal di Bangka Belitung\n"; 
echo "Punya mimpi yang cukup besar dan ingin membanggakan kedua orang tua\n"; 
echo "Hobi saya adalah bermain catur dan membaca Novel\n"; 
echo "Khususunya novel dengan genre school. romance\n"; 
echo "Misal disini saya ingin membuat operasi penjumlahan\n";
echo "1 + 1 hasilnya adalah ", 1 + 1, "\n\n"; 

// Terlihat seperti diatas, saat kita membuat baris baru, maka akan ke-enter. Ini adalah alternatif dari \n. 


// Multiline string. Untuk mempermudah pemakaian enter. Jadi tidak perlu repot lagi memberikan \n di setiap barisnya. Dibagi menjadi herodoc dan nowdoc. 
// Misalnya untuk herodoc: 
echo <<<HAIKEL
Haikel Ilham Hakim
Bangka Belitung
Pekerjaan: Web Developer 
HAIKEL;

// Nowdoc, mirip seperti herodoc, yang membedakan adalah di nowdoc tidak memiliki kemampuan parsing seperti di herodoc atau double quote. 
// Pemakaiannya bisa memakai single quote atau double quote 
echo <<<'HAIKEL'

Haikel Ilham Hakim 
Bangka Belitung 
Pekerjaan: Web Developer
HAIKEL; 


// Belajar

?>