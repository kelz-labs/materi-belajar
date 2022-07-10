#include <stdio.h>
using namespace std; 
int main() {
  int harga; // Tipe data integer, nanti discan dengan %d 
  float nilai-ip; // Tipe data desimal, nanti discan dengan %f
  char huruf; // Tipe data yang memuat satu karakter, nanti discan dengan %c

  printf("Harga Barangnya: "); //printf("Harga Barangnya: ")
  scanf("%d", harga); // scan tipe data integer(int)

  printf("Nilai IP: "); // print("Nilai IP: )
  scanf("%f",&nilai_ip); // Scan tipe data float

  printf("Huruf pertama nama kamu: "); 
  scanf("%c", &huruf); // scan tipe data char

  printf("\n"); 
  printf("harga = %d, nilai_ip = %f dan huruf = %c, harga, nilai_ip, huruf"); // scan tipe data integer(int), tipe data desimal(float), 
  printf("\n"); // 

  return 0;
}
