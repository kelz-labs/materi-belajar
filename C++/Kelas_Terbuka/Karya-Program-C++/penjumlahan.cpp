#include <iostream>
#include <stdio.h>
using namespace std; 
int main() {
  int bilangan1 = 10;
  int bilangan2 = 12;
  int bilangan3 = 14; 
  int bilangan4 = 16; 
  int hasil; 
  hasil = bilangan1 + bilangan2 + bilangan3 + bilangan4; 

  printf("Penjumlahan empat bilangan\n"); 
  printf("==========================\n\n");

  cout << "Bilangan pertama: " << bilangan1 << endl; 
  cout << "Bilangan kedua: " << bilangan2 << endl; 
  cout << "Bilangan ketiga: " << bilangan3 << endl; 
  cout << "Bilangan keempat: " << bilangan4 << endl; 

  cout << "Hasil dari penjumlahan keempat bilangan adalah: " << hasil << endl;
  return 0; 
}
