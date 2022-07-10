// Super constructor 
// Super hanya boleh dipanggil di dalam constructor
class Employee {
    constructor(nama) {
        this.nama = nama;
        this.props = {
            jenisKelamin: 'cwk'
        }
    }

    // Method di class. 
    statement(nama) {
        console.log(`Halo, ${nama}. Kukira cwk ternyata ${this.props.jenisKelamin}`);
    }
}

// Pewarisan dari Employee ke Warisan, dengan kata kunci extends
class Warisan extends Employee {
    constructor(nama, umur) {
        // super
        // dalam penggunaan super, wajib memanggil constructor induk(dalam hal ini nama) 
        super(nama);
        this.umur = umur;
    }

    statement(nama, umur) {
        console.log(`Halo, ${this.nama}. Umurmu adalah ${this.umur}`);
    }

}

const ayu = new Employee('Ayu');
ayu.statement('Ayu');

const warisan = new Warisan('Budi', 20);
warisan.statement('Budi', 20);