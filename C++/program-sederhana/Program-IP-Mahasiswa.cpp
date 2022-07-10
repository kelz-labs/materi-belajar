/*Program IP Mahasiswa*/

#include <iostream>
using namespace std;
int main() {
    string nama;
    int nilaiIP;

    cout << "Masukkan nama anda: ";
    cin >> nama;
    cout << "Masukkan nilai IP anda "; 
    cin >> nilaiIP;

    if (nilaiIP >= 0 && nilaiIP <= 9){
        cout << "Jangan bersedih yah sayang" << endl;
    }
    else if(nilaiIP >= 10 && nilaiIP <= 30){
        cout << "E. Tetap belajar yah gais" << endl;
    }
    else if(nilaiIP > 30 && nilaiIP <= 40){
        cout << "D. Semangat ya gais" << endl;
    }
    else if(nilaiIP > 40 && nilaiIP <= 70){
        cout << "C. Terus belajar dan semangat yah!" << endl;
    }
    else if(nilaiIP > 70 && nilaiIP <= 89){ 
        cout << "B. Mantap bosque, terus tingkatkan lagi!" << endl;
    }
    else if(nilaiIP > 89 && nilaiIP <= 94){
        cout << "A. Wih, nilai mantap. Pertahankan yah" << endl;
    }
    else if(nilaiIP > 94 && nilaiIP <= 100) {
        cout << "A++. Gilak GG bener bosque. Pertahankan prestasimu ini." << endl;
    }
    else{
        cout << "Nilainya melebihi batas kawan. Silahkan masukkan nilai yang sebenarnya." << endl;
    }
}