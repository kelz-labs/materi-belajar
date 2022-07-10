// Materi nuulish coalesing operator
// nuulish ini mirip dengan ternary operator, sangat simple dan singkat. Valuenya adalah null dan undefined
// Contoh:

// tanpa nuulish operator
let parameter;

let data = parameter;

if (data == undefined || data == null) {
  console.log("Nilai Default");
}

else {
  console.log("Nilai lain");
}

console.log(data);

// Dengan nuulish operator
let parameter1 = "Eko";
let parameter2;

let data1 = parameter1 ?? "Nilai default"; // Artinya apa? Jika nilai si parameter1 itu null atau undefined, maka ia akan memprint "nilai default", tapi jika ia memiliki value entah itu string atau number, ia akan memprint nilai dari parameter tersebut
let data2 =  parameter2 ?? "Nilai default"; // Lihat? ini hasilnya nanti akan "nilai default"

console.log(data1);
console.log(data2);



