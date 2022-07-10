#include <iostream>
using namespace std; 
int main () {
  int bubuk = 120; 
  int air; 

  cout << "Program Mengecek air dan bubuk susu agar bisa diaduk menjadi segelas susu" << endl; 
  cout << "Dengan asumsi bubuk susunya 2 sendok untuk 120ml air.\n" << endl; 

  cout << "Silahkan masukkan banyak air yang diinginkan: "; 
  cin >> air; 

  if (bubuk > air) {
    cout << "Maaf, air yang anda masukkan terlalu sedikit, silahkan masukkan lebih banyak air." << endl; 
  }

  else if (air <= 140 ) {
    cout << "Air yang anda masukkan sudah pas." << endl; 
  }

  else {
    cout << "Maaf, air yang anda masukkan terlalu banyak. Silahkan kurangi sedikit takaran airnya." << endl; 
  }

  return 0; 
}
