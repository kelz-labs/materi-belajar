#include <iostream>
using namespace std;
int main() {
  cout << "Mengecek Bilangan Prima\n" << endl; 
 
  int bil_bulat, i, bil_pembagi;
  bool bil_prima = true;
  
 
  cout << "Masukkan angkanya: ";
  cin >> bil_bulat;
 
  // 0 dan 1 bukan angka prima
  if (bil_bulat == 0 || bil_bulat == 1) {
      bil_prima = false;
  }
  
  else if (bil_bulat < 0) {
      bil_prima = false; 
  }
  
  else {
      for (i = 2; i <= bil_bulat / 2; i++) {
          if (bil_bulat % i == 0) {
              bil_pembagi = i;
              bil_prima = false;
              break;
      }
    }
  }
  
  if (bil_prima) {
      cout << "\n" << bil_bulat << " termasuk bilangan prima." << endl;
  }
  
  else {
      cout << "\n" << bil_bulat << " tidak termasuk bilangan prima. " << endl;
  }
  
  return 0;
}

