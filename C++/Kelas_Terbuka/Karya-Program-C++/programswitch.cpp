#include <iostream>
using namespace std; 
int main() {
  int a; 
  cout << "=====Program mengecek Angka=====" << endl; 
  cout << "=====Pilih angka 1, 2, 3, 4, atau 5 =====" << endl;
  switch (a) {
    case 1:
      cout << "Ini adalah angka 1" << endl; 
      break;
    case 2:
      cout << "Ini adalah angka 2" << endl; 
      break;
    case 3:
      cout << "Ini adalah angka 3" << endl; 
      break;
    case 4: 
      cout << "Ini adalah angka 4" << endl;
      break; 
    case 5: 
      cout << "Ini adalah angka 5" << endl; 
      break;
    default:
      cout << "Default" << endl; 
  }

  cout << "Yay programnya sudah selesai nih." << endl; 
  return 0; 
}
