#include <iostream>
using namespace std; 
int main() {

    int a; 
    int b; 
    cout << "Masukkan nilai = " << endl;  
    cin >> a; 

    cout << "Kemudian, masukkan nilai b" << endl;
    cin >> b; 

    if (a < b) {
        cout << "Nilainya kurang dari" << endl;
    }

    else if (a > b) {
        cout << "Nilainya lebih dari" << endl; 
    }




#include <iostream>
using namespace std; 
int main() {

    int a; 
    int b; 
    cout << "Masukkan nilai a = " << endl;  
    cin >> a; 

    cout << "Kemudian, masukkan nilai b" << endl;
    cin >> b; 

    if (a < b) {
        cout << "Nilainya kurang dari" << endl;
    }

    else if (a > b) {
        cout << "Nilainya lebih dari" << endl; 
    }

    // Program Switch
    switch(a <= b) {
        case 1: 
          cout << "Nilainya minus. " << endl;
          break;

        case 2: 
          cout << "Ini sangat amat menggambarkan gueh" << endl;  
          break;

        case 3: 
          cout << "Nilainya adalah 3" << endl; 
          break; 

        case 4: 
          cout << "Nilainya adalah 4" << endl;
          break;

        case 5: 
          cout << "Nilainya adalah 5" << endl; 
          break; 

        default:
          cout << "Nilainya tidak sesuai" << endl;
    }

    cout << "Akhir dari program" << endl;
    
    return 0; 
}
