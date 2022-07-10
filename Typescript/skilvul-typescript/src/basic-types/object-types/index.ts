/*let person: {
  name: string;
  // jika ada salah satu object yang tidak terdefinisi, maka akan error
  umur: number;

  // optional property (pake tanda tanya ?)
  partner?: string;
} = {
  name: "Haikel",
  umur: 18,
};*/

// console.log(person.name);

/*let daftarKursi: Person = {
  "1a": "andi",
  "1b": "budi",
  "1c": "dodo",
};*/

let person: Person = {
  name: "Haikel",
  umur: 18,
  partner: "Kurang tau",
};

console.log(`
    nama: ${person.name}, 
    umur: ${person.umur}, 
    partner: ${person.partner}. 
`);
// pendefinisian object types dengan type alias
/*type Person = {
  name: string;
  umur: number;
  partner?: string;
};*/

// pendefinisian dengan interface
interface Person {
  name: string;
  umur: number;
  partner?: string;
}
