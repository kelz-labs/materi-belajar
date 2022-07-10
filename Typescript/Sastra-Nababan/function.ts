// function di typescript 
// bisa didefinisikan dengan 3 cara, yakni dengan deklarasi, ekspresi, dan arrow 

// function declaration
function add(param1: number, param2: number) {
  return `${param1}, ${paramm2}, ${param3}`; 
}

console.log(add(20, 20, 'Anime luwh'));

// function with callback 

type greeter = (message: string) => void
function request(url: string, cb: greeter) {
  cb(url);
}

let fn = (str: string) => console.log(str);
request('https://github.com', fn); 



// function expression
const addEx = function (x: number, y: number): number {
  return x + y; 
};

// arrow function 
const addArrow = (x: number, y: number): number => x + y; 

type Contact = {
  firstName: string;
  lastName: string;
  gender?: string;
  languange: string; 
}

function submitContact (
  firstName: string,
  lastName: string,
  languange: string,
  gender: string, 
) : Contact {
  return {
    firstName: firstName, 
  lastName: lastName, 
  ...(gender && { gender }), 
  languange, 
  }
}

let result = submitContact('Alan', 'Mayer', 'Laki-Laki', 'Native English')

console.log(result);

let result = submitContact('Valen', 'Mayer', 'Laki, laki'); 
console.log(result);



// Rest parameter 
function fruitsCollection(item: string, ...restItems: string[]) {
   return item + ' ' + restItems.join(' ');
}

let fruits = fruitsCollection('Apple', 'Mangga', 'Duren');



// Conditional type with union
function ct<T>(param: <T>) {
  return param; 
}

ct<string>('Hallo');



// overloading 
function overload(param: string): string; 
function overload(param: number): string; 
function overload(param: any): any {
  return param; 
} 
// Mengapa ada any? Sederhananya, string dan number itu untuk deklarasi, sedangkan any buat implementasinya

ct('Halosemua');
ct(123232); 
