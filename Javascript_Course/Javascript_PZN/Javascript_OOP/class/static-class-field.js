// static class field
/*
- Static adalah kata kunci yang bisa kita tambahkan sebelum field atau method. 
Biasanya ketika kita membuat field atau method, maka secara otomatis field akan menjadi property di instance object.
Dan method akan menjadi function di prototype.
- Jika kita tambahkan static, maka hal itu tidak akan terjadi 
- Static class bersifat global scope
*/

class Configuration {
    static name = 'Belajar JS OOP'; 
    static version = '1.0'; 
    static author = 'Mas Eko';  
}

const config = new Configuration();
console.log(config);

// bagaimana cara mengaksesnya?
// console.log(config.name); -> cara yang salah 

// kita juga bisa mengubah nilainya  
Configuration.author = 'Haikel';

// cara yang benar adalah kita langsung mengakses ke class nya
console.info(`Nama: ${Configuration.name}, Versi: ${Configuration.version}, Author: ${Configuration.author}`); 