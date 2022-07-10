#include <iostream>
using namespace std; 
int main () {
  
  // Looping 
  int a = 100; 
  while (a >= 80 ) { // Ini syarat while ()

    // Aksi, apa yang dilakukan keadaan tertentu. 
    cout << "Wah nilai kamu cukup besar nich. " << endl; 

    // Untuk menghentikan looping, kita bisa membuatnya false dengan menambahkan a = 79, atau nilai lain yang membuatnya false. ; 
    a = 79; 

    // Atau bisa juga dengan assignment, logikanya: setiap dia looping, maka akan berkurang 10, misal loop pertama: 100-10 = 90, loop kedua: 90 - 10 = 80, loop ketiga: 80 - 10 = 70, saat mau loop ke empat, dia tidak bisa lagi karena nilainya sudah kurang dari 80. 
    a -=10; 

    // Dan bisa juga memakai break statement seperti di materi switch. 
    break; 
  }

  cout << "Selesai. " << endl;  
  return 0; 
}
