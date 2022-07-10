// Perbandingan interface vs type 
// Sederhananya, interface cocok buat class, sedangkan type buat function 
// Contoh: 

// aliases 
type customType = string | number; 
let myType: customType; 
myType = 'Halohalo'; // string 
myType = 13123; // number 
myType = true; // boolean, tapi salah karena yang diperbolehkan cuma string atau number 



// object 

//  Default dari interface itu object 
interface User {
  name: string; 
  age: number; 
}

type Tuser = {
  name: string; 
  age: number;   
}



// Merge, menggabungkan 2 atau lebih interface menjadi satu
interface Song {
  songName: string; 
}

interface Song {
  artistName: string; 
}

const mySong: Song = {
  artistName: 'Yoasobi', 
  songName: 'Tabun', 
}



// Intersection dan union
type typeA = {
  id: number; 
  propA: string; 
}; 

type typeB = {
  id: number; 
  propB?: string; 
}; 

// intersection 
type Intersection AB = typeA & typeB; 

// Union 
type UnionAB = typeA | typeB; 

let myData: IntersectionAB = {
  id: 1, 
  propA: 'testA',
  propB: 'testB',
}; 



// Untuk implements, kita bisa juga memakai type atau interface
type Person = {
  name: string; 
  age: number; 
  getName(id: number): string; 
}

class People implements Person {
  name: string;
  age: number; 
  constructor(name: string, age: number) {
    this.name = name; 
    this.age = age;
  }

  getName(id: number) {
    return "Yess";
  }
}



// Extend 
// Interface bisa diextend, sedangkan pada type, tidak bisa

interface Address {
  street: string; 
}

interface Orang extends Address {
  nama: string;
  umur: number; 
  getNama(id: number): string; 
}

class Masyarakat implements Orang {
  nama: string;
  umur: string; 
  street: string; 
  
  constructor(nama: string, umur: number) {
    this.nama = nama; 
    this.umur = umur; 
    this.street = ''; 
  }
} 

interface alamat {
  tujuan: string; 
}

interface supir extends alamat {
  nama: string;  
  umur: number; 
  getNama(id: number): string; 
}

class mobil implements supir {
  nama: string;
  umur: number; 
  tujuan: string; 

  // add class 
  constructor(nama: string, umur: number) {
    this.nama = nama; 
    this.umur = umur; 
    this.tujuan = ''; // string 
  }
}

console.log(mobil);
