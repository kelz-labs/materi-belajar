// masalah pada var, sehingga diganti let
// Ini dikarenakan si var tidak terikat dengan blok scope

// contoh jika pakai let
/*let tontonan = 10;

for (let tontonan = 10; tontonan <= 20; tontonan++) {
  console.log(tontonan);
}

console.log(tontonan);*/

// contoh dengan var
var tontonan = 10;

for (var tontonan = 10; tontonan <= 20; tontonan++) {
  console.log(tontonan);
}

console.log(tontonan);

// jika menggunakan var, maka global variablenya dirubah oleh local scope
