// inheritance constructor
// dimana constructor yang satu boleh memanggil constructor yang lain

// constructor 1, pembeli 
function Pembeli() {
    this.barang = '';
    this.jumlah = '';

    this.statement = () => {
        console.log(`Saya ingin membeli ${this.barang} sebanyak ${this.jumlah} buah. Berapa Harganya?`);
    }
}

// constructor 2, penjual 
function Penjual(barang, jumlah, harga) {
    // Memasukkan constructor 1 ke constructor 2 
    Pembeli.call(this, barang, jumlah);
    this.harga = harga;
    this.aktivitas = 'Tidak ada aktivitas hari ini'; 
    this.statement = (diskon) => {
        console.log(`Harga barang ${this.barang} dengan jumlah ${this.jumlah} buah adalah ${this.harga}. Ada diskonnya juga loh, yakni sebesar: ${diskon}%`);
    }
}

const beli = new Pembeli();
beli.barang = 'Minyak goreng 1 Liter Sunco';
beli.jumlah = '100';
beli.statement();

// menambahkan satu property ke dalam constructor Pembeli yang sudah dibuat
beli.gaBeli = () => {
    console.log("Sulit dimengerti, semoga harga minyak turun"); 
}

console.log('\nDefine\n');

const jual = new Penjual();
jual.barang = beli.barang;
jual.jumlah = beli.jumlah;
jual.harga = 'Rp.2.000.000';
jual.statement('12');

jual.gaJual = () => {
    console.log("Sulit dimengerti, semoga kamu jadi Anime");
}

console.log(beli);
console.log(jual); 