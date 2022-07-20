/*
function di typescript

Tambahan: apa itu any type? any type adalah cara kita untuk menolak error, bentuk tipe datanya bisa berupa apa saja entah itu string, number, dll. Tapi ini tidak disarankan karena kita tidak mempunyai kontrol kepada type yang kita definisikan
*/
function addNumbers(a: number, b: number) {
  return a + b;
}

export default addNumbers;

// default parameter
export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

// union types
export const format = (title: string, param: string | number): string => `${title} ${param}`;

// void function 
export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
}

// promise function
export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

let names = ["Haikel", "Ayu", "Cendol"];
function introduce(salutation: string, ...names: string[]): string {
  return `${salutation} ${names.join("")}`
}

/*
let name: string = "Haikel di sana";
// idea: ganti nama si Haikel jadi Andi
let splitName: string[] = name.split("Haikel");
let andiName: number = splitName.unshift("Andi")

console.log(andiName)
*/

// operator optional chaining(?): buat memastikan data itu apakah ada atau tidak. Jika tidak, maka akan mengembalikan error
// operator nullish: buat memberitahu jika data itu tidak apa, maka kita mau mengembalikan apa
// example 
const func = (nama?: string, kelas?: string) => {
  return `Nama: ${nama ?? "Tidak terdefinisi"}. Kelas: ${kelas ?? "Tidak terdefinisi"}`;
}

console.log(func());

