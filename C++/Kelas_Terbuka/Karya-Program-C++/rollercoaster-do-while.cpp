#include <iostream>
using namespace std;
int main() {
    
    char pilihan; 
    bool angka; 
    
    printf("*Program do-while.* \n"); 
    printf("Apakah anda ingin naik roller coaster? Pilihan: Y atau N: "); 
    cin >> pilihan; 
    
    // Membuat if terlebih dahulu
    
    if (pilihan == 'N') {
        printf("\nAnda tidak jadi naik roller coaster. ");
    }
    
    else if (pilihan == 'n') {
        printf("\nAnda tidak jadi naik roller coaster. ");
    }
    
    else if (pilihan == 'Y') {
        do {
            printf("\nAnda telah bermain roller coaster. ");
            printf("Apakah anda ingin naik roller coaster lagi? Pilihan: Y atau N: ");
            cin >> pilihan; 
            
            // Membuat switch case 
            switch (pilihan) {
                case 'Y': 
                angka = true;
                break; 
                
                case 'N': 
                angka = false;  
                printf("\nAnda memutuskan untuk berhenti bermain. ");
                break;
                return 0;
                
                case 'y': 
                angka = true;
                break;
                
                case 'n': 
                angka = false; 
                printf("\nAnda memutuskan untuk berhenti bermain. ");
                break;
                return 0;
                
                default: 
                printf("\nAnda salah memasukkan pilihan. Silahkan coba lagi. ");
                break; 
                return 0; 
            }
        } while (angka == true);
    }
    
    else {
        printf("\nAnda salah memasukkan pilihan. Silahkan coba lagi. ");
    }
    
    printf("\nProgram selesai. ");
    return 0; 
    
    
}
