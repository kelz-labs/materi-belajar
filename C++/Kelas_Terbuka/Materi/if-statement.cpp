#include <iostream>
using namespace std; 
int main() {

    int a;
    cout << "Program menghitung segitiga" << endl;
    cout << "Masukkan angka = "; 
    cin >> a;
    cout << "Jadi, kelilingnya adalah: " << a + a + << endl;

    // if statement
    if (a > 0){
        cout << "Halo" << endl; 
    }

    else if (a < 0) {
        cout << "Angka yang anda masukkan tidak valid. Silahkan coba lagi dengan nilai yang benar " << endl;
    }
    
    else if (a == 0){ 
        cout << "woi ngapain kau masukin nol?" << endl;
    }
    
    cout << "Selesai"<< endl;

    cin.get();
    return 0; 
}