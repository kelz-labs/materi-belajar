/*
- Debugger digunakan untuk melakukan proses debugging
- Intinya, debugger itu proses kita dalam mencari bug
- Dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint), lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti
*/

function createFullName(firstName, middleName, lastName) {
  debugger;
  const fullName = `${firstName}, ${lastName}, ${lastName}`;
  return fullName;
}

const name = createFullName('Kunai', 'Sakura', 'mantrap');
console.log(name);

