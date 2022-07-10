#include <iostream>
using namespace std; 
int main() {
  float a, b, hasil; // tipe data float 
  char operatorz; // tipe data char

  cout << "Selamat Datang di Program Kalkulator Sederhana\n\n"; 

  // memasukkan input dari user
  cout << "Silahkan masukkan nilai pertama: "; 
  cin >> a; 
  cout << "\nPilih operator (+), (-), (*), (/): "; 
  cin >> operatorz; 
  cout << "\nKemudian masukkan nilai kedua: "; 
  cin >> b; 

  // Contoh jika dia pakai switch 
  //switch(aritmatika) {
    //case '+':
      //hasil = a + b; 
      //break; 

    //case '-':
      //hasil = a - b;
      //break; 

    //case '*':
      //hasil = a * b; 
      //break; 

    //case '/':
      //hasil = a / b;
      //break; 

    //default:
      //cout << "Maaf, permintaan tidak bisa diproses karena operator yang anda masukkan tidak sesuai. Silahkan coba lagi. " << endl; 
  //}
  //cout << "\nHasil Perhitungan: " << a << aritmatika << b << " = " <<  hasil << endl;

  // Ini kalau dia pakai if else()
  if(operatorz == '+'){
    hasil = a + b; 
  }

  else if(operatorz == '-'){
    hasil = a - b;
  }

  else if(operatorz == '*'){
    hasil = a * b; 
  }

  else if(operatorz == '/'){
    hasil = a / b; 
  }

  else {
    cout << "\nMaaf, permintaan tidak bisa diproses karena operator yang anda masukkan tidak sesuai! Silahkan coba lagi!" << endl;
    return 0; 
  }

  cout << "\nHasil Perhitungan: " << a <<  operatorz  << b << " = " <<  hasil << endl; 


  return 0; 
}
