// Materi type aliases
type Orang = {
    name: string;
    age: number;
}

let bambang: Orang = {
    name: "Haikel",
    age: 18,
}

// mengkombinasikan beberapa types dengan union type 
type Hewan = 'mamalia' | 'amfibi' | 'unggas'
let ayam: Hewan = 'mamalia'

// intersection type
type Karyawan = {
    id: string
    nama: string
}

type KaryawanTetap = {
    email: string
    jabatan: string
}

// jika ingin menggunakan type model ini, maka kita harus menggunakan semua property yang ada dalalm type(Kecuali dia opsional, ga wajib)
type KaryawanGabungan = Karyawan & KaryawanTetap;

let karyawanTetap: KaryawanGabungan = {
    id: "Anu",
    nama: "Haikel",
    email: "something@my.id",
    jabatan: "Front end Dev",
}