// instanceof
// kadang ada kasus kita ingin mengecek apakah sebuah object merupakan sebuah instance dari class tertentu atau bukan
// operator instanceof akan menghasilkan boolean, true jika benar object tersebut adalah instance, jika bukan maka false 

class Satu {
    // statement 
}

/*class Dua  {
    // statement 
}*/ 

// Misal kita coba hasilnya apabila dia hasil pewarisan 
class Dua extends Satu {

}

const satu = new Satu();

// checking dengan instanceof
console.log(satu instanceof Satu); // true 
console.log(satu instanceof Dua); // false 


const dua = new Dua(); 

// checking 
console.log(dua instanceof Satu); // true, karena class Dua ditandai sebagai turunan dari class Satu  
console.log(dua instanceof Dua); // true 