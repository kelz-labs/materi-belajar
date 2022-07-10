#include <iostream> 
using namespace std; 
int main () {
    
    float nilai1, nilai2; 
    cout << "Program input nilai\n\n"; 

    // Input nilainya 
    cout << "Masukkan nilai pertama: "; 
    cin >> nilai1; 
    cout << "Masukkan nilai kedua: "; 
    cin >> nilai2; 

    if ((nilai1 >= 60) && (nilai2 >= 60)) {
        cout << "DITERIMA!" << endl; 
    }
    
    else {
        cout << "\nTIDAK DITERIMA!" << endl; 
    }
    
    return 0;
}
