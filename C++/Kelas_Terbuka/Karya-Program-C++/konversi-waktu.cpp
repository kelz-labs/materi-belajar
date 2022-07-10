#include <iostream>
using namespace std;
int main () {

  string nilai; 
  int nilaijam; 
  int nilaimenit;   
  
  cout << "======Konversi waktu ke detik======\n" << endl; 
  cout << "Pilih format waktu: Jam, Menit, Detik: "; 
  cin >> nilai; 
  cout << endl; 

  if ((nilai == "Jam") || (nilai == "jam")) { 
    cout << "Masukkan nilainya: "; 
    cin >> nilaijam; 
    cout << endl; 

    int hasiljam = nilaijam * 3600; 
    cout << "Hasilnya adalah: " << hasiljam << endl;
  }

  else if ((nilai == "Menit") || (nilai == "menit")) { 
    cout << "Masukkan nilainya: "; 
    cin >> nilaimenit; 
    cout << endl; 

    int hasilmenit = nilaimenit * 60; 
    cout << "Hasilnya adalah: " << hasilmenit << endl;
  }

  else if ((nilai == "Detik") || (nilai == "detik")) {
    cout << "Anda memilih detik. Anda tidak bisa mengkonversi karena waktunya sudah dalam format detik. " << endl;
  }

  else {
    cout << "Format yang anda masukkan tidak sesuai. Silahkan masukkan format yang benar." << endl; 
  }

  return 0; 

}
