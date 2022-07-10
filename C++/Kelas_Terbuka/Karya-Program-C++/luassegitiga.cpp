#include <iostream>
using namespace std; 
int main() {

    int a;
    int b; 
    cout << "Program menghitung luas segitiga" << endl;
    cout << "Masukkan alas = "; 
    cin >> a;
    cout << "Masukkan tinggi = "; 
    cin >> b; 
    int hasil = a * b;
    int beneranhasil = hasil / 2;
    cout << "Jadi, luasnya adalah: " << beneranhasil  << endl;
}