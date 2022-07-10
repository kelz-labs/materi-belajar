// penerapan prototype inheritance 

// Contoh yang salah
function Employee(name) {
    this.name = name; 
}

function Manager(name) {
    this.name = name; 
}

// Kalau kayak gini, kita mendefinisikan nilai si Manager = Employee 
// Otomatis pernyataannya akan mengikuti urutan paling bawah 
// Manager.prototype = Employee.prototype;


// Yang benar 
// Maka dia akan memisahkan Manager dan Employee masing-masing
Manager.prototype = Object.create(Employee.prototype);


Manager.prototype.sayHello = function(name) {
    console.log(`Halo, ${name}. My name is ${this.name}, your Manager`);
}

Employee.prototype.sayHello = function(name) {
    console.log(`Halo, ${name}. My name is ${this.name}, your Employee`);
}

const employee = new Employee('Andi'); 
employee.sayHello('Joko Satir');

const manager = new Manager('Budi'); 
manager.sayHello('Guntur');

console.log(employee); 
console.log(manager);