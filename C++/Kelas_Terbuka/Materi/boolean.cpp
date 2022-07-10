#include <iostream>
using namespace std; 
int main() {

    // Oke disini kita akan belajar boolean

    int a = 2; 
    int b = 2; 
    bool hasil1, hasil2, hasil3, hasil4; 

    // Komparasi, relation expression

    // Sebanding
    hasil1 = (a == b); // True jika outputnya adalah 1(2 / 2 = 1), akan false jika outputnya adalah 0
    
    // Tidak sebanding atau != 
    hasil2 = (a != b); // True jika outputnya adalah 1, akan false jika outputnya adalah 0 
    
    // Kurang dari atau <= 
    hasil3 = (a <= b); // Ini nanti hasilnya bakal true karena tanda sama dengan( = ). Kalau ga ada ya false

    // Lebih dari atau 
    hasil4 = (a >= b); // Ini nanti hasilnya bakal true karena tanda sama dengan( = ). Kalau ga ada ya false

    cout << "Hasil sebanding: " << hasil1 << endl;
    cout << "Hasil tidak sebanding: " << hasil2 << endl;
    cout << "Hasil kurang dari sama dengan: " << hasil3 << endl;  
    cout << "Hasil lebih dari sama dengan: " << hasil4 << endl; 

    cin.get();
    return 0; 

    
}

#include <iostream>
#include <stdio.h>
using namespace std;

int main (){ 
    int a = 10; 
    int b = 2; 
    int c = 4; 
    int hasil1, hasil2, hasil3, hasil4, hasil5, hasil6, hasil7, hasil8; 

    // Pertambahan
    hasil1 = a + b + c; 
    cout << "penambahan" << hasil1 << endl;

    // Pengurangan
    hasil2 = a - b -c; 
    cout << "pengurangan" << hasil2 << endl;

    //Perkalian 
    hasil3 = a * b * c; 
    cout << "perkalian" << hasil3 << endl; 

    //Pembagian 
    hasil4 = a / b / c; 
    cout << "Pembagian" << hasil4 << endl; 

    // Boolean true or false
    hasil5 = (a == b == c); 
    cout << "Sebanding" << hasil5 << endl; 

    hasil6 = (a != b != c);
    cout << "Tidak sebanding" << hasil6 << endl;

    hasil7 = (a <= b <= c);
    cout << "kurang dari sama dengan " << hasil7 << endl; 

    hasil8 = (a >= b >= c);
    cout << "Lebih dari sama dengan " << hasil8 << endl;
}
