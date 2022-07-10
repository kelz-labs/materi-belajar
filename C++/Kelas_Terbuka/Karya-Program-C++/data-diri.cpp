#include <iostream>
using namespace std; 
int main() {
  string nama, alamat, jeniskelamin, goldarah, agama, pekerjaan, kewarganegaraan, ttl, nik;  

  printf("Nama: "); 
  getline(cin, nama);

  printf("Tempat Tanggal Lahir: ");
  getline(cin, ttl);

  printf("Alamat: ");
  getline(cin, alamat);

  printf("Jenis Kelamin: "); 
  getline(cin, jeniskelamin);

  printf("Golongan Darah: ");
  getline(cin, goldarah);

  printf("Agama: ");
  getline(cin, agama);

  printf("Pekerjaan: "); 
  getline(cin, pekerjaan);

  printf("Kewarganegaraan: ");
  getline(cin, kewarganegaraan);

  printf("Nomor Induk Keluarga: ");
  getline(cin, nik); 

  printf("\nBerikut adalah hasilnya: ");
  printf("\n-----------------------------------\n\n");
  cout << "Nama: " << nama << endl;
  cout << "Tempat Tanggal Lahir: " << ttl << endl;
  cout << "Alamat: " << alamat << endl; 
  cout << "Jenis Kelamin: " << jeniskelamin << endl;
  cout << "Golongan Darah: " << goldarah << endl;
  cout << "Agama: " << agama << endl; 
  cout << "Pekerjaan: " << pekerjaan << endl; 
  cout << "Kewarganegaraan: " << kewarganegaraan << endl;
  cout << "Nomor Induk Keluarga: " << nik << endl;

  return 0;
}