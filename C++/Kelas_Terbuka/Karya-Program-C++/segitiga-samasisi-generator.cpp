#include <iostream>
#include <conio.h>
using namespace std;
int main() {
    int nilai = 10;
    int masuk; 
    printf("Segitiga siku-siku generator\n\n"); 
    printf("Silahkan masukkan nilai yang diinginkan: \n");
    cin >> masuk; 
    
    //Kalo mau pake batas maksimum, pake if aja. if (masuk >= 11) {
    //    cout << Maaf, nilai maksimum hanya sampai 10 saja" << endl;
    //    return 0;
    //}
    
    for (int a = 1; a <= nilai; a++) {
        for (int b = 1; b <= a; b++) {
            cout << b << ""; 
        }
        cout << endl;
    }
    
    return 0;
}
