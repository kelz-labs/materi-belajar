let username: string = "Haikel"; 
let apakahLogin: boolean = true; 

// di JS biasa, kode seperti ini tidaklah error, padahal kalau kita perhatikan, tipe data variable apakahLogin itu boolean, dan seharusnya tidak boleh diassign dengan tipe data apapun
// apakahLogin += "Haikel??"; // expected: string is no assignable to boolean 
username += " ??"; 
console.log(username);

let myNumber: number = 10; 
let myRegex: RegExp = /foo/; 

const names: string[] = username.split(" ");

// generic types
const myValues: Array<number> = [1,2,3]; 

// objects 
/*const myPerson: {
  first: string; 
  last: string; 
  isBoy: boolean; 
} = {
  first: "Andi", 
  last: "Wibowo", 
  isBoy: true, 
}*/

// interface, agar kita bisa menggunakan types definition bukan hanya di satu tempat saja 
interface Iperson {
  first: string; 
  last: string; 
  isBoy: boolean; 
}

const myPerson: Iperson = {
  first: "Andi",
  last: "Wibowo", 
  isBoy: true, 
}

// mapping 
const ids: Record<number, string> = {
  10: "a", 
  20: "b", 
}

ids[30] = "c"; 

if(ids[30] === "D") {
  
}

// for loop 
for(let i = 0; i <= 10; i++) {
  console.log(i); 
}

// forEach 
[1,2,3].forEach(value => console.log(value));

// map 
const out = [4,5,6].map((value) => value +  10); 
