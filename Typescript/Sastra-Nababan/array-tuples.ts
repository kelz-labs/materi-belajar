// array dan tuples


// 1. array 
// ada beberapa cara untuk mendeklarasikan array 

// type inference 
let list1 = [1,2,3,4]; 

// dengan square bracket
let list1_2: number[];
list1_2 = [1,2,3,4]; 

// generic array 
let list1_3 = Array<number>;
list1_3 = [1,2,3,4];


// string, sama saja seperti di atas 

// type inference 
let listString1 = ['Anime', 'banget', 'luwh'];

// dengan square bracket 
let listString2: string[];
listString2 = ['Anime', 'banget', 'luwh'];

// generic array 
let listString3 = Array<string>;
listString3 = ['Anime', 'banget', 'luwh'];


// array union

// type inference 
let listStringArr1 = ['Anime', 2, 3, 'Luwh'];

// dengan square bracket 
let listStringArr2: (string | number)[];
listStringArr2 = ['Anime', 2, 3, 'Luwh'];

// generic array 
let listStringArr3: Array<string | number>; 
listStringArr3 = ['Anime', 2, 3, 'Luwh']; 



// 2. tuples 
// Tuples ini mirip array, cuma dia udah fix, dan tidak terlalu dinamis seperti array 
let listTuples1: [string, number, string, number];
// Kalo kita udah tetapkan tipe datanya, maka kita tidak bisa memasukkan nilai yang tipe datanya berlainan dengan yang sudah ditetapkan 

listTuples1 = ['Anime', 2, 'Luwh', 4]; // BENAR 
listTuples1 = ['Anime', 'luwh', 2, 4]; // SALAH, karena nilai yang seharusnya bertipe data number, malah diisi string



// 3. array of object atau object di dalam array 

// inline interface 
let listArrObj1: { color: string; index: number }[];
listArrObj1 = [
  { color: 'blue', index: 12 },
  { color: 'red', index: 1}
];
console.log(listArrObj1);

// generic array
let listArrObj2: Array<{color: string; index: number}>;
listArrObj2 = [
  { color: 'blue', index: 12 },
  { color: :'red', index: 1 }
]; 
console.log(listArrObj2);



// 4. matriks
let matrix: number[][];
matrix = [
  [1,2],
  [3,4]
];

// generic array 
let matrix2: Array<Array<number>>;
matrix2 = [
  [1,2],
  [3,4]
]; 



// 4. Destructuring 

// type inference 
// let [a,b,c,d] = [1,2,3,4]; 

// mendefinisikan dengan tipe data 
let [a,b,c,d]: [number, number, number, number] = [1,2,3,4];
