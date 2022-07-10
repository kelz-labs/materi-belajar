// Tipe data dasar
let id = 5; // number 
let company = 'Sony Japan'; //string 
let isPublished = true; // boolean 

// apabila kita ingin reassign si x dengan tipe data yang lain, maka kita harus mendefinisikan 'any' di awal agar x nya dapat menerima semua tipe data
id = '100';

let arr: number[] = [1,2,3,4,5,6];

function pu(param: any) {
    arr.push(param);
}

pu(60);
console.log(arr);

// --------------------------------------------------------

// TIPE DATA tuple 
let person: [number, string, boolean] = [1, '1', true];
person.push(100, 'anime');

console.log(`${person}, size: ${person.length}`);

// tuple array
let employee: [number, string][];

employee = [
  [1, '1'],
  [2, '2']
]

// --------------------------------------------------------

// TIPE DATA Union 
let pid = string | number;
pid = 22;

console.log(pid);

// --------------------------------------------------------

// TIPE DATA Enum
enum direct1 {
  up = 1, 
  down, 
  left, 
  right
}

console.log(direct1);

enum direct2 = {
  up = 'up', 
  down = 'down', 
  left = 'left', 
  right = 'right'
}

console.log(direct2.down);

// -------------------------------------------------------

// TIPE DATA Objects 
type User = {
  id: number,
  name: string,
  alamat: string,
  umur: string
}

const user: User = {
  id: 123423423,
  name: 'Haikel',
  alamat: 'Tokyo, Jepang',
  umur: 18
}

// ------------------------------------------------------

// Type assertion
// Assertion = mempertegas tipe data yang dipakai, misal: 
let assert: any = 200;
let changeAssert = assert as number;

assert = 'Haikel'; // salah karena kita sudah menegaskan bahwa si assert itu mesti number 

// ------------------------------------------------------

// Function di typescript
function addNum(x: :number, y: number): number {
  return x + y;
}

const printNum = addNum(10, 500);
console.log(printNum);

// ------------------------------------------------------

// void on function
function log(message: string | number): void {
  console.log(`Halo, apa pesanmu? ${message} dan ${id}`);
}

log(12345, 'Yuuki');

// ------------------------------------------------------

// Interface
// Cara kerjanya sama saja dengan type, hanya saja kalo di type, dia bisa menggunakan tipe data primitif dan union
interface sudo {
  isSudo: boolean,
  password: string,

  // Kita dapat menjadikan objectnya menjadi opsional(alias terserah mau dimasukin atau nggak) dengan tanda tanya(?)
  isRight?: boolean   
}

const userSudo: sudo = {
  isSudo: true,
  password: 'dapatdimengertiemotebatu',
  // isRight: true 
}

console.log(userSudo);

// Read-Only Properties, seperti const 
userSudo.password = 'turu';

// Interface with math function 

const userMath: interfaces = {
  id: 1,
  nama: 'John Doe'
}

interface MathFunc {
  {
    x: number, 
    y: number
  }: number 
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x + y;


// Interface dengan unsur OOP 

interface PersonInterface {
  id: number 
  name: string 
  register(): string
}

class orang implements PersonInterface {
  // Macam-macam data modifiers 

  // private 
  // protected 
  // public
  nis: number 
  nama: string 

  constructor(nis: number, nama: string) {
    this.nis = nis;
    this.nama = nama;
  }

  register() {
    return `${this.name} is now registered`
  }
}

const andi = new orang(2130123, 'andi');
const budi = new orang(2342343, 'budi');

console.log(andi.register());

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    // Buat ngakalin inisialisasi this 
    // this.nama = this, this.umur = 18 
    // Kita bisa akali seperti berikut: 
    // super(nama, umur)

    super(id, name)
    this.position: position
  }
}

const emp = new Employee(3, 'John', 'Engineer')

// -------------------------------------------

// Generics 
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['john', 'joko satir', 'Jali']);

strArray.push('Hallo');

console.log(strArray);

