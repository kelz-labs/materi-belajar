// Materi basic types: array, tuples, null, undefined, void, never

// array 
let bilanganDiBawah5: number[] = [1, 2, 3, 4, 5];

// tuples 
let karyawan: [string, string, number] = ["andi", "Tegal", 22];

// undefined 
type person = {
    name: string
    age: number
    number: number | null // number atau null 
}

let single: person = {
    name: "Budi",
    age: 20,
    number: 1 // atau pakai null juga bisa
}

// void dan never, buat function 

// void digunakan untuk fungsi yang tidak mengembalikan nilai 
function log(messages: string): void {
    console.log(messages)
}

// never digunakan untuk yang tidak pernah muncul
function Err(messages: string): never {
    throw new Error(messages);
}