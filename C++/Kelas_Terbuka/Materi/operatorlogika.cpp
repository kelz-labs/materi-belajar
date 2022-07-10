#include <iostream>
using namespace std; 
int main() {
    int a = 2;
    int b = 3;
    bool hasil; 

    // Belajar operator logika : not, and, or


    // Operator not(!)
    hasil = !(a == 3);

    // Operator and, kedua nilai harus true agar menghasilkan satu, jika salah satunya ada yang false, maka dia menghasilkan nol(0). 
    hasil = ( a == 3 ); 
    
    hasil = (a == 3) and (b == 2); // true and true
    cout << "hasilnya adalah: " << hasil << endl; 
    hasil = (a == 4) and (b == 2); // false and true
    cout << "hasilnya adalah: " << hasil << endl;
    hasil = (a == 3) and (b == 3); // true and false
    cout << "hasilnya adalah: " << hasil << endl;
    hasil = (a == 4) and (b == 3); // false and false  
    cout << "hasilnya adalah: " << hasil << endl;

    // Operator or, jika salah satu bernilai true, maka hasilnya akan true (1)
    hasil = (a == 3) or (b == 2); // true and true
    cout << "hasilnya adalah: " << hasil << endl; 
    hasil = (a == 4) or (b == 2); // false and true
    cout << "hasilnya adalah: " << hasil << endl;
    hasil = (a == 3) or (b == 3); // true and false
    cout << "hasilnya adalah: " << hasil << endl;
    hasil = (a == 4) or (b == 3); // false and false  
    cout << "hasilnya adalah: " << hasil << endl;

    cin.get(); 
    return 0; 
}