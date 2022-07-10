// public field
// propert atau object yang dibuat di dalam class itu sifatnya public(secara default nya)

class Customer {
    // public field 
    firstname; 
    lastname; 

    balance = 0; 

    // mengakses firstname dan lastname di constructor 
    constructor(firstname, lastname) {
        this.firstname = firstname; 
        this.lastname = lastname; 
    }

    sayHello() {

    }
} 

const haikel = new Customer('Sakura', 'Sakuya'); 
console.log(haikel); 