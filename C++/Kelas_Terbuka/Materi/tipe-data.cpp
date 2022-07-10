//Belajar C++di Kelas Terbuka

#include <iostream>
#include <stdio.h>
using namespace std; 
int main () {
    cout << "Halo dunia!" << endl; 
    return 0; 
}

//Contoh pernyataan tidak menaruh std di awal, tapi langsung menggunakannya saat ingin mencetak kode
#include <iostream>
int main () {
    std::cout << "Halo Haikel" << std::endl; 
    std::cin.get();
    return 0;
}

// Dan ini contoh yang menggunakan std di awal. 
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
int main () { /*Gerbang menuju program*/
    std::cout << "Halo saya Haikel" << std::endl; 
    return 0; 
}

/* -------------------------------------------------------------- */
// Belajar Variabel

#include <iostream>
using namespace std; 
int main () {
    a = 1;
    b = 2; 
    c = a + b;

    cout << "Jadi, hasil a + b adalah " + c << endl; //nanti outputnya 2 + 1 = 3
}

#include <iostream>
using namespace std; 
int main () {
    int a;
    a = 10;

    cout << a << endl;
    cin.get(); 
}

// Belajar deklarasi dan cin 
#include <iostream>
using namespace std;
int main() {
    int a = 10;
    int b = 11; 

    //Contoh
    cout << "Hasil a + b adalah " << a + b << endl;
}

#include <iostream>
using namespace std;
int main() {
    int b;
    int a;
    a = 10;
    cout << "Program kelipatan 10" << endl; 
    cin >> c;
    cout << "Masukkan angka yang anda ingin kali 10: " << endl ;
    cin >> b;
    cout << "Hasilnya adalah: " << b * a << endl;
}

// Belajar tipe data dasar
#include <iostream>
using namespace std;
int main() {
    int a = 10; 
    cout << a << endl; 
    cout << sizeof(a) << "byte" << endl;// ini jenis data byte, 1 - 4 byte ,note bahwa 1 byte = 4 bit

    unsigned
    
    // Bilangan bulat
    int a = 5; 
    long b = 6;
    short c = 10;

    // Bilangan Desimal
    float d = 1.0;
    double e = 2.23; 

    //character
    char f = "a"; //char hanya bernilai 1 byte atau 8 bit

    // boolean
    bool g = true; // or false  
    cin.get();  
    cout << numeric_limits<int>::min << endl; 
    return 0;
}

// Misalkan, kita akan membuat program menghitung luas persegi
#include <iostream>
using namespace std; 
int main() {
    int luas, sisi; 
    luas = sisi * 4; 
    cout << "Program menghitung persegi sesuai keinginan" << endl; 
    cout << "===========================================" << endl; 
    cout << "Silahkan masukkan sisi yang anda inginkan: " << endl; 
    cin >> sisi;
    cout << "Jadi, jawabannya adalah" << luas << endl;  
}




