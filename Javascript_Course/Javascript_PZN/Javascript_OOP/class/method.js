// Method di class

// class 1 
class Manager {
    constructor(nama) {
        // menambahkan property ke class
        this.nama = nama; 
        this.statement = () => {
            console.log(`Halo, ${nama}. Saya managermu`);
        }
    }
}

const andi = new Manager('Andi'); 
andi.statement();
console.log('\nIsinya: \n')
// console.log(andi);

// console.log('\n'); 

// class 2
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

const ayu = new Employee('Ayu'); 
ayu.statement('Ayu'); 
