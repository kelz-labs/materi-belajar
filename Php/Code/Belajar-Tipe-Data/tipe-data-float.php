<?php 

// Belajar Tipe data float(bilangan desimal). Tanda koma yang biasanya dipakai, diganti menjadi titik. Contoh: 

echo "Ini bilangan desimal: "; 
var_dump(1.20293); 

// Jenis-jenis float

echo "Floating Point: "; 
var_dump(1.234); // Ingat, apabila ia tidak pake titik, maka ia akan termasuk integer. 

echo "Floating Point Dengan E Notation Plus (1.2 x 1000): "; 
var_dump(1.2 * 1000); // Perkalian dengan tipe data floating

echo "Floating Point dengan E Notation Minus (7 x 0.001): ";
var_dump(7 * 0.001); // Perkalian dengan tipe data floating

echo "Underscore di Floating Point: "; 
var_dump(1_234.567); // Contoh penggunaan underscore di Floating. Sebagai catatan, apabila menambahkan titik(.) setelah underscore, maka hasilnya akan ERROR.


?>