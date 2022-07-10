// Paradigma OOP di Javascript 
// Sedikit pendahuluan, OOP adalah suatu paradigma dalam programming yang berorientasi objek. Berbeda dengan functional programming.

/*
Daftar Materi: 

- class -> prototype, rangka/rancangan awal 
- object 
- inheritance 
- iterable and iterators 
- standar JS classes 
- etc
*/ 

// penerapan dengan object literal
const cars = {
    color: 'red', 
    engine: '2jz', 
    tires: 'Radial', 
    isEngineStart: false,
    seat: 4,  
}

// dengan object class 

// class car 
class car {

    // di dalam mobil ada warna dan tipe mesin
    constructor(warna, mesin) {

        // init 
        this.warna = warna, 
        this.mesin = mesin, 
        this.mesinNyala = 'off' 
    }
}

class person {
    // berbeda object, tapi masih dalam satu class yang sama 
    constructor(eko, joko, budi) {

        // init 
        this.eko = eko, 
        this.joko = joko, 
        this.budi = budi 
    }
}

