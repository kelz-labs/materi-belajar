/*
OOP di typescript

1. class
2. properties & methods
3. constructor
4. inheritance 
5. abstraction
6. encapsulation
7. polymorphism 
*/

class Rekening {
    /*
    tanpa constructor 

    nama: string = "Laik";
    umur: number = 18;
    saldo: number = 500000;
    */

    /*
    public 

    properties/method yang bersifat public dapat diakses siapa saja 
     
    nama: string;
    umur: number;
    saldo: number;
    */

    /*public nama: string; 
    public umur: number; 
    public saldo: number;*/

    // menggunakan readonly agar property tersebut tidak bisa diubah nilainya
//    private readonly nama: string; 

    // ada juga yang namanya protected 
    protected nama: string; 
    private umur: number; 
    private saldo: number; 

    // setter and getter
    set setName(newName: string) {
        this.nama =  newName;
    }

    set setUmur(newUmur: number) {
        this.umur = newUmur; 
    }

    set setSaldo(newSaldo: number) {
        this.saldo = newSaldo; 
    }

    get getName(): string{
        return this.nama; 
    }

    get getUmur(): number {
        return this.umur; 
    }

    get getSaldo(): number {
        return this.saldo; 
    }

    // constructor 
    constructor(nama: string, umur: number, saldo?: number) {
        this.nama = nama;
        this.umur = umur;

        /* 
        if (saldo) {
            this.saldo = saldo;
        } else {
            this.saldo = 0;
        }*/

        // menggunakan nullish operator 
        this.saldo = saldo ?? 0;
    }

    // method
    deposit(jumlahDeposit: number): void {
        this.saldo = this.saldo + jumlahDeposit;
    }

    // konsep polymorphism
    bukaRekening(setoranAwal: number) {

    }

    withdraw(jumlahDeposit: number): void {
        this.saldo += jumlahDeposit;
    }
}


// inheritance -> pake keyword extends
class RekeningTabungan extends Rekening {
    bunga: number;

    constructor(nama: string, umur: number, saldo: number, bunga?: number) {
        // super function -> buat memanggil fungsi yang ada di base class kita, dalam hal ini class Rekening
        super(nama, umur, saldo);

        // kita jadiin si bunga opsional
        this.bunga = bunga ?? 0;
    }

    bukaRekening(setoranAwal: number) {
        if(setoranAwal < 100000) {
            throw new Error("Jumlah setoran kurang dari seratus ribu");
        } 

        this.saldo = setoranAwal; 
    }
}


// abstraction -> sebuah konsep dimana kita hanya menunjukkan properties tertentu dan menyembunyikan informasi tidak penting
interface IBunga {
    hitungBunga: (bungaSaatIni: number) => void
}

/*class RekeningInvestasi extends Rekening implements IBunga {
    hitungBunga(bungaSaatIni: number) {
        this.saldo += (this.saldo * bungaSaatIni)
    }
}*/ 

// encapsulation -> menyembunyikan data-data tertentu yang sekiranya bersifat sensitif

let rekeningLaik = new Rekening("Kaguya", 18, 2000000);
let rekeningAndi = new RekeningTabungan("Andi", 20, 1000000);

// mengubah property 
// rekeningLaik.umur += 2;

// mencoba deposit
rekeningLaik.deposit(1000);

rekeningLaik.bukaRekening(10);

// mengakses private melalui get 
console.log(rekeningAndi.getName); 
console.log(rekeningLaik.getSaldo && rekeningLaik.getUmur); 
