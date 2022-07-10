/*
Destructuring array dengan menggunakan variable lain

- Saat melakukan destructuring di array, maka kita bisa dengan mudah membuat nama variable sesuak kita
- Namun pada saat melakukan destructuring, kita harus membuat nama variable sama dengan nama property
- Kita juga bisa menggunakan nama variable lain saat melakukan destructuring object jika kita mau

Contoh:
*/

const orang = {
  namaDepan: 'orang 0',
  namaTengah: 'orang 1',
  namaBelakang: 'orang 2'
};

let {
  // merubah nama variable menjadi tidak sama dengan property, juga masih bisa menambahkan default value.
  namaDepan: firstName = 'null',
  namaTengah: middleName = 'void',
  namaBelakang: lastName = 'gentoo'
} = orang;

console.log(firstName, middleName, lastName);




