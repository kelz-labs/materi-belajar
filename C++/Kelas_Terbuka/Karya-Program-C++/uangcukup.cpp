#include <iostream>
using namespace std; 
int main() {

    int a;
    a = 12000000; 
    int b; 
    
    cout << "======Program sederhana pemeriksa kecukupan uang.======" << endl;
    cout << "Anda mau membeli laptop gaming? Silahkan masukkan nominal uang yang anda punya: " << endl;
    cin >> b; 
    
    // if statement
    if (b == a) {
        cout << "Uang anda ngepas nih, saran saya tambah lagi duitnya biar sekalian bisa beli aksesoris lain" << endl;
    }
    
    else if (b > a) {
        cout << "Uang anda lebih dari cukup, silahkan membeli laptop dengan aksesorisnya." << endl;
    }
    
    else if (b < a) {
        cout << "Oops, uang anda belum cukup untuk membeli laptop gaming" << endl;
    }
    
    cout << "Selesai"<< endl;

    cin.get();
    return 0; 
}