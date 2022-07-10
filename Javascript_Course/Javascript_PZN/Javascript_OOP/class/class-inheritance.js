// class inheritance atau pewarisan
// Hanya cukup menambahkan kata kunci extends

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
class Warisan extends Employee{} 

const ayu = new Employee('Ayu');
ayu.statement('Ayu'); 

const warisan = new Warisan();
warisan.statement('Budi');