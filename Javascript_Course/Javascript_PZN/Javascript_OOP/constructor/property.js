// membuat property di constructor Function 
function Car() {
    // init props
    this.model = 'Toyota'; 
    this.engineVariant = '2jz';
    this.color = 'Red';  
}

const merk = new Car();
const engine = new Car();
const warna = new Car(); 

console.log(`${merk.model}, ${engine.engineVariant}, ${warna.color}`);


// Contoh lain, dengan cara yang berbeda 
function Laptop() {}

const part1 = new Laptop();
part1.merk = 'Lenovo'; 

const part2 = new Laptop(); 
part2.jenis = 'Thinkbook'; 

console.log(`${part1}, ${part2}`);
