/*
Kata kunci this

- This adalah referenso ke object milik siapa
- Tiap lokasi kata kunci this, bisa berbeda-beda referensi pemiliknya
- Dalam object method, this merupakan referensi ke object pemilik functionnya
- Di global scope, this merupakan referensi ke global object (di browser biasanya disebut window)
- Dalam function, this merupakan referensi ke global object (di browser biasanya disebut window)
- Di function dengan strict mode, this adalah undefined
- Dalam event, this merupakan referensi ke element yang menerima event
*/

// contoh this di global scope
console.log(this); // hasilnya window
