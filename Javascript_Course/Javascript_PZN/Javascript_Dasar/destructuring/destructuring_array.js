/*Materi destructuring
- Jadi, destructuring adalah fitur yang bisa digunakan untuk membongkar value-value di array atau object ke dalam variable variable
- Fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu
*/

// contoh pengambilan secara manual tanpa destructuring
const names = ['andi', 'budi', 'cici'];
const firstNames = names[0];
const middleNames = names[1];
const lastNames = names[2];

console.log(firstNames, middleNames, lastNames);

// contoh dengan destructuring
const barang = ['botol', 'lemari', 'kursi', 'kipas', 'kasur'];
const [firstName, middleName, lastName, ...others] = barang;

console.log(firstName, middleName, lastName, others);
