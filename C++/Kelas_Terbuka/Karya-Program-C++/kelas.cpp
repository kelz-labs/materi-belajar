#include <iostream> 
using namespace std; 
int main () {

  // Program batas maksimal anak per kelas menggunakan if else
  int a = 25; 
  int b; 

  cout << "Masukkan jumlah anak: " ; 
  cin >> b; 

  if (b >= a) {
    cout << "Jumlah anak yang dimasukkan: " << b << endl; 
    cout << "Kelas yang diisi: " << (b / a) + 1 << endl; 
  }

  else if (b <= 0) {
    cout << "Kelas harus terisi dengan murid!" << endl;
  }

  else if ( b > 0, b < 25 ) {
    cout << "Anak di dalam kelas: " << b << endl; 
    cout << "Kelas yang diisi: " << 1 << endl;
  }

  else {

  }

  return 0; 
}
