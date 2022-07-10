/*Program jurusan*/

#include <iostream>
using namespace std;
int main() {
    string nama;
    int jurusan;

    cout < "Masukkan nama: ";
    cin >> nama; 
    cout << "1. Teknik Komputer" << endl;
    cout << "2. Teknik Informatika" << endl;
    cout << "3. Perhotelan" << endl; 
    cout << "4. Sistem Informasi" << endl;
    cout << "5. Akuntansi" << endl;
    cout << "Masukkan jurusan yang anda inginkan disini: " << endl;
    cin >> jurusan;

    cout << "=====================================================" << endl;
    cout << "Nama: " << nama << endl;
    cout << "Jurusan: ";
    if(jurusan == 1) {
        cout << "Teknik Komputer" << endl;
    }
    else if(jurusan == 2){
        cout << "Teknik Informatka" << endl; 
    }
    else if(jurusan == 3){
        cout << "Perhotelan" << endl;
    }
    else if(jurusan == 4){
        cout << "Sistem Informasi" << endl;
    }
    else if(jurusan == 5){
        cout << "Akuntansi" << endl;
    }
    else{
        cout << "Pilihan anda salah, silahkan ulangi" << endl;
    }
}