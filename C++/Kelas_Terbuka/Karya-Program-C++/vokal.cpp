#include <iostream>
#include <conio.h>
using namespace std;
int main() {
    string pokal = "\nVokal";
    char pokal2;
    
    printf("Masukkan nilai a, i, u, e, atau o: ");
    cin >> pokal2;
    
    if (pokal2 == 'a') {
        cout << pokal << endl;
    }
    
    else if (pokal2 == 'i') {
        cout << pokal << endl;
    }
    
    else if (pokal2 == 'u') {
        cout << pokal << endl;
    }
    
    else if (pokal2 == 'e') {
        cout << pokal << endl;
    }
    
    else if (pokal2 == 'o') {
        cout << pokal << endl;
    }
    
    else {
        printf("\nKonsonan");
        return 0; 
    }
    
    return 0;
}
