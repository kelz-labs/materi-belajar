// Getter and setter 
// getter dan setter hanya akan berada di prototype, bukan di instance object 
class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname; 
    }

    get fullname() {
        return `${this.firstname} ${this.lastname}`; 
    }

    set fullname(value) {
        const result = value.split(''); 
        this.firstname = result[0];
        this.lastname = result[1]; 
    }
}

const eko = new Person('Eko', 'Eko'); 
console.log(eko);