#include <iostream>
using namespace std; 
int main() {
  int angka1, angka2, angka3, angka4; 
  
  printf("Program Pertamaku"); 
  printf("\n\nNIM saya: 12321942\n");
  printf("Nama saya Haikel\n");
  printf("Jurusan teknik informatika\n"); 

  // Program perkalian

  printf("\nMasukkan nilai pertama: ");
  cin >> angka1;
  
  printf("Masukkan nilai kedua: ");
  cin >> angka2; 
  
  cout << "Hasil perkaliannya adalah: " << angka1 * angka2 << endl; 
  
  printf("\nMasukkan nilai kedua: ");
  cin >> angka3; 
  
  printf("Masukkan nilai keempat: ");
  cin >> angka4; 

  cout << "Hasil pembagiannya adalah: " << angka3 / angka4 << endl;
}

#include <iostream>
using namespace std; 
int main() {
  float a, b, hasil; 
  char c;

  printf("Selamat datang di program switchcase. "); 
  printf("\nSilahkan masukkan nilai A: ");
  cin >> a; 

  printf("\nSilahkan masukkan nilai B: "); 
  cin >> b; 
  
  printf("\nMasukkan operatornya (+)(-)(*)(/): ");
  cin >> c;

  switch (c) {
    case '+':
    hasil = a + b; 
    break;

    case '-': 
    hasil = a - b; 
    break;

    case '*':
    hasil = a * b; 
    break; 

    case '/':
    hasil = a / b; 
    break; 

    default:
    printf("\nMaaf, operator yang anda masukkan tidak sesuai. Silahkan masukkan operator yang benar. \n");
    return 0; 
  }

  cout << "\nJadi, hasil dari " << a << c << b << " adalah " << hasil << endl; 
  return 0;
}
