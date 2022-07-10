// advanced typescript

// Misal kita buat interface terlebih dahulu: 
interface User {
  id: number; 
  name: string; 
  age?: number; // Tanda tanya berfungsi buat ngasih ini bersifat opsional 
  createdAt: Date; 
}

// Required 
function CreatedUser(data: Required<User>) {

}
// Info penting
/* misal mau dapetin tahun, bulan, dan tanggal, kita bisa seperti ini: 
const date = new Date();

function GetDate() {
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`); 
}

GetDate();*/
