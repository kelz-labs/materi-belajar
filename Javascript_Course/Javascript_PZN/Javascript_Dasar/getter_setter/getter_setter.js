/* Materi getter and setter
- getter and setter adalah kemampuan membuat function yang berbeda untuk mengambil data (getter) dan mengubah data (setter) pada sebuah property di object
- Dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam functiin sebelum sebuah property diakses atau diubah, misal menambah validasi, dan lain-lain

*/

const person = {
  firstName: 'sakura',
  lastName: 'yuuki',
  get fullName() {
    return `${this.firstName}, ${this.lastName}`;
  },
  set fullName(value) {
    const array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
    console.log(`Dapatkan itu, ${value}`)
  }
}

// Jika dia tidak ditambahkan set, maka ini tidak akan berubah
person.fullName = 'budi budi';
console.table(person);

person.fullName = 'sakura sakura';
console.table(person);

person.fullName = 'yuuki yuuki';
console.table(person);

