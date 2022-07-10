#include <iostream>
using namespace std; 
int main() {
  int duit;
  cout << "Selamat datang di program ATM" << endl; 
  cout << "Silahkan masukkan nominal uang yang ingin anda pakai untuk menarik uang: RP.50000, RP.100000: \n"; 
  cin >> duit; 

  if (duit >= 50000) {
    cout << "Baiklah, anda akan memakai uang 50ribuan. " << endl; 
  }

  else if(duit  >= 100000) {
    cout << "Baiklah, anda akan memakai uang 100ribuan. " << endl; 
  }

  else if(duit < 50000) {
    cout << "Permintaan anda tidak dapat diproses. Nominal yang anda masukkan terlalu kecil. " << endl;
  }

  return 0;
}
