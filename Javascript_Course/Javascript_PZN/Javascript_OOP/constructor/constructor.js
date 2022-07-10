// constuctor OOP JS 

// overview perbandingan class dengan object 
// object 
const obj = {
    barang: 'Roma kelapa', 
    jenis: 'Biskuit', 
    jumlah: 20
}

// perbandingan oop di JS versi lama dengan versi baru 
// constructor versi lama
// best practice: Huruf depan pake kapital, untuk menegaskan kalau itu constructor, bukan seperti function biasa 
// seperti function biasa

function Orang() {
    // init object
    const andi = new Orang(); 
    const budi = new Orang(); 
}