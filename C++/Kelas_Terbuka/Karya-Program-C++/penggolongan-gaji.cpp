#include <iostream>
using namespace std;
int main () {
    int a; 
    int b = a; 
    int c = a; 
    cout << "Program Mengelompokkan golongan gaji." << endl;
    cout << "Masukkan gaji anda: " << endl; 
    cin >> a;
    
    // Menggunakan while
    while (a <= 2000000) {
        cout << "Maaf, anda termasuk golongan kurang mampu. Semangat yah, jangan lupa kerja keras + ibadah :)  " << endl; 
        break; 
        return 0; 
    }
    
    while (a <= 3500000) {
        printf("Anda termasuk golongan menengah ke bawah. Tetep semangat yah kerjanya :) "); 
        break; 
        return 0; 
    }
    
    while (a <= 6500000) {
        printf("Anda termasuk golongan menengah. Yok jangan lengah, jangan malas-malasan. Sebaiknya sisihkan sedikit gajinya untuk saham, bangun usaha, dan sedekah. ");
        break; 
        return 0; 
    }
    
    while (a <= 20000000) {
        printf("Anda termasuk golongan menengah ke atas. Banyakin sedekah eui. "); 
        break; 
        return 0; 
    }
    
    while (a > 20000000) {
        printf("Anda termasuk golongan kaya. Semoga tetep rendah hati, perbanyak sedekah dan ibadah ya. Dunia ini hanya sementara."); 
        break; 
        return 0; 
    }
    return 0; 
}
