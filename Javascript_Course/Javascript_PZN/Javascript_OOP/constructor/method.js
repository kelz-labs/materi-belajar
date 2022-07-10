// Method di constructor function

function Person() {
    this.firstName = ''; 
    this.middleName = '';
    this.lastName = '';

    this.greeting = (name, tempat) => {
        console.log(`Halo, ${name}, bertempat tinggal di: ${tempat} nama saya adalah ${this.firstName} ${this.middleName} ${this.lastName}`)
    }
}

const andi = new Person();
andi.firstName = 'Andi'; 
andi.middleName = ''; 
andi.lastName = 'Satir';
andi.greeting('Anime', 'Jalan Lembawai');  

const budi = new Person(); 
budi.firstName = 'Budi'; 
budi.middleName = ''; 
budi.lastName = 'Satir'; 
andi.greeting('Anime', 'Jalan Sakura'); 

console.log(andi); 
console.log(budi); 