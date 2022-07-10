#include <iostream>
using namespace std; 

int main () {

  double a, b, c; 

  cout << "Program menentukan luas segitiga" << endl; 
  cout << "================================" << endl; 
  cout << "Masukkan Panjang garis a: ";
  cin >> a; 

  cout << "Masukkan Panjang garis b: ";
  cin >> b; 

  cout << "Masukkan Panjang garis c: "; 
  cin >> c; 

  if (a * b > c && a * c > b && b * c > a) {
    cout << "Panjang garis-garis tersebut membentuk segitiga" << endl; 
  } 

  else {
    cout << "Panjang garis-garis tersebut tidak membentuk segitiga" << endl; 
  }

  return 0; 
}
