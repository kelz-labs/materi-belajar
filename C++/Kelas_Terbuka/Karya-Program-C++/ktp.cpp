#include <iostream>
using namespace std; 
int main () {

  string nama, alamat; 
  alamat = "";
  nama = "";
  int NIK, umur; 
  printf("Program KTP\n\n");
  printf("Silahkan masukkan nama: ");
  cin >> nama; 

  printf("Silahkan masukkan alamat: \n");
  cin >> alamat;

  printf("Silahkan masukkan umur anda: \n");
  cin >> umur;

  printf("Silahkan masukkan NIK anda: \n");
  cin >> NIK; 

  cout << "\n\nBerikut data yang telah anda masukkan: \n" << endl;
  cout << nama << "\n";
  cout << alamat << "\n"; 
  cout << umur << "\n"; 
  cout << NIK << "\n"; 


  return 0;
}
