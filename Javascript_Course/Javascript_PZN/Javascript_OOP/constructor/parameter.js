// parameter di constructor function
function Hewan(jenis, tinggal) {
    // dengan nilai default 
    this.jenis = jenis; 
    this.tinggal = tinggal; 

    this.statement = (nama) => {
        console.log(`Halo, ${nama}. Kamu mendapatkan sebuah ${this.jenis} yang tinggal di ${this.tinggal} lho`); 
    }
}

const budi = new Hewan('Badak', 'Hutan'); // param 
budi.statement('Budi');

console.log('\nDefine Object');
console.log(budi); 

