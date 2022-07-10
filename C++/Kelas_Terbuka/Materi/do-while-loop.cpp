#include <iostream>
using namespace std; 
int main () {

  int a = 10; 
  char pilihan; 
  bool angka; 
  // Beda do-while dengan while biasa adalah di do-while, aksi dilakukan terlebih dahulu sebelum syarat. 
  
  printf("Perkenalan"); 
  cin >> pilihan; 
  switch(pilihan) {
    case 'Y': 
      angka == true; 
      break;

    case 'N': 
      angka == false; 
      break;
  }
  do {
    cout << "Halo semua. Saya Haikel. "; // Lakukan print "Halo semua"
  } while (a > 5); // Ketika nilai a < 5. Nah disini int a = 10, agar program bisa menjalankan looping, kita bisa mengakalinya dengan memasukkan a > 5 ke dalam while (). 

  cout << "Selesai. " << endl; 
  return 0;

}
