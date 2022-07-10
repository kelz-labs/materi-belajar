#include <iostream>
#include <stdio.h>
using namespace std;
int main() {
  string kata; 
  printf("Hai, apakah kamu mau mengerjakan tugasku?\n"); 
  printf("\nPilihan: Ya, Tidak: ");
  cin >> kata; 

  if (kata == "Ya") {
    printf("\nMakasih, daisuki dayo");
  }

  else if (kata == "Tidak") {
    printf("\nMangsud amad luwh, Pelit!!!!");
  }

  else {
    printf("WOI, LU BELUM NGEJAWAB! COBA LAGI!");
    return 0; 
  }

  return 0;
}
