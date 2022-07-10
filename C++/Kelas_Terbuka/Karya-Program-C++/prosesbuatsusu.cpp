#include <iostream>
using namespace std;
int main () {
  int susuPanas = 0;
  int cangkir = 1; 
  int gula = 1; 
  int sendok = 1; 
  int airPanas = 1; 
  int susu = 1; 

  cout << "Program membuat susu panas\n" << endl; 
  cout << "Program dimulai!\n" << endl; 

  cangkir = cangkir + susu; 
  cout << "Susu dimasukkan ke dalam cangkir" << endl;  

  cangkir = cangkir + gula; 
  cout << "Gula dimasukkan ke dalam cangkir" << endl; 

  cangkir = cangkir + airPanas; 
  cout << "Air panas dimasukkan ke dalam cangkir\n" << endl; 

  while ((gula == 1) && (susu == 1)) {
    cangkir = cangkir + sendok; 
    cout << "Proses mengaduk dengan sendok" << endl; 

    if (cangkir == 50) {
      gula = 0; 
      susu = 0; 
    }
  }

  cout << "\nSudah teraduk merata dan susu panas siap untuk diminum." << endl; 
  return 0; 
}
